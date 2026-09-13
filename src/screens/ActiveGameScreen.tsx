import { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useGameStore } from '../store/useGameStore';
import { Clock } from 'lucide-react';
import styles from './ActiveGameScreen.module.css';

export function ActiveGameScreen() {
  const navigate = useNavigate();
  const { gameState, settings, endGame } = useGameStore();
  
  const [startingPlayer] = useState(() => {
    const players = gameState.currentRoundPlayers;
    if (!players || players.length === 0) return '';
    
    if (!settings.hintsEnabled) {
      const nonImposters = players.filter(p => !gameState.imposters.includes(p.id));
      if (nonImposters.length > 0) {
        return nonImposters[Math.floor(Math.random() * nonImposters.length)].name;
      }
    }
    
    return players[Math.floor(Math.random() * players.length)].name;
  });

  const [timeLeft, setTimeLeft] = useState(settings.durationMinutes * 60);

  useEffect(() => {
    if (!settings.timeLimitEnabled) return;

    if (timeLeft <= 0) {
      handleEndGame();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, settings.timeLimitEnabled]);

  if (gameState.phase !== 'active') {
    if (gameState.phase === 'game-over') return <Navigate to="/game-over" />;
    return <Navigate to="/" />;
  }

  const handleEndGame = () => {
    endGame();
    navigate('/game-over');
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="screen-container">
      <div className={styles.container}>
        <div className={styles.instruction} style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-md)' }}>
          <h2 style={{ margin: 0, fontSize: '1.8rem' }}>{startingPlayer} starts!</h2>
          <p style={{ marginTop: 'var(--spacing-sm)', opacity: 0.9 }}>
            Give the first one-word clue.
          </p>
        </div>

        {settings.timeLimitEnabled && (
          <div className={styles.timerCard}>
            <Clock size={32} />
            <h1 className={`${styles.timeText} ${timeLeft < 30 ? styles.hurry : ''}`}>
              {formatTime(timeLeft)}
            </h1>
          </div>
        )}

        <button className="primary-btn" onClick={handleEndGame} style={{ marginTop: 'var(--spacing-xl)' }}>
          Game Over
        </button>
      </div>
    </div>
  );
}
