import { useNavigate, Navigate } from 'react-router-dom';
import { useGameStore } from '../store/useGameStore';
import { X } from 'lucide-react';
import styles from './GameOverScreen.module.css';

export function GameOverScreen() {
  const navigate = useNavigate();
  const { gameState, players, resetGame } = useGameStore();

  if (gameState.phase !== 'game-over') {
    return <Navigate to="/" />;
  }

  const imposterNames = gameState.imposters
    .map(id => players.find(p => p.id === id)?.name)
    .filter(Boolean) as string[];

  let impostersText = '';
  if (imposterNames.length === 1) {
    impostersText = `The Imposter is ${imposterNames[0]}`;
  } else if (imposterNames.length === 2) {
    impostersText = `The Imposters are ${imposterNames[0]} & ${imposterNames[1]}`;
  } else if (imposterNames.length > 2) {
    const last = imposterNames.pop();
    impostersText = `The Imposters are ${imposterNames.join(', ')} & ${last}`;
  }

  const handleRestart = () => {
    resetGame();
    navigate('/');
  };

  return (
    <div className="screen-container">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.emojiIcon}>🕵️</span>
          <span>Guess the Imposter</span>
        </div>
        <button className={styles.closeBtn} onClick={handleRestart}>
          <X size={24} />
        </button>
      </div>

      <div className={styles.content}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', animation: 'fadeIn 0.5s ease-out' }}>
          <h1 className={styles.title}>{impostersText}</h1>
          
          <div className={styles.wordInfo}>
            <p className={styles.label}>The Secret Word was</p>
            <h2 className={styles.word}>{gameState.secretWord}</h2>
            <p className={styles.category}>Category: {gameState.secretCategory}</p>
          </div>

          <button className="primary-btn" onClick={handleRestart} style={{ marginTop: 'var(--spacing-xl)' }}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
