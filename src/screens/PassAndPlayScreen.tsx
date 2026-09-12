import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../store/useGameStore';
import { X, Check, User } from 'lucide-react';
import { TapHint } from '../components/TapHint';
import styles from './PassAndPlayScreen.module.css';

export function PassAndPlayScreen() {
  const navigate = useNavigate();
  const { gameState, settings, nextPlayerReveal, resetGame } = useGameStore();
  const [isRevealed, setIsRevealed] = useState(false);
  const [hasRevealedThisTurn, setHasRevealedThisTurn] = useState(false);

  // If we somehow enter this screen without being in pass-and-play phase, redirect
  if (gameState.phase !== 'pass-and-play') {
    if (gameState.phase === 'active') return <Navigate to="/game" />;
    if (gameState.phase === 'game-over') return <Navigate to="/game-over" />;
    return <Navigate to="/" />;
  }

  const currentPlayer = gameState.currentRoundPlayers[gameState.currentPlayerIndex];
  const isImposter = gameState.imposters.includes(currentPlayer.id);
  const isLastPlayer = gameState.currentPlayerIndex === gameState.currentRoundPlayers.length - 1;

  const handleNext = () => {
    setIsRevealed(false);
    setHasRevealedThisTurn(false);
    nextPlayerReveal();
  };

  const handleRevealClick = () => {
    if (navigator.vibrate) navigator.vibrate(50);
    setIsRevealed(true);
    setHasRevealedThisTurn(true);

    // Auto close after 3 seconds
    setTimeout(() => {
      setIsRevealed(false);
    }, 3000);
  };

  const cancelGame = () => {
    resetGame();
    navigate('/');
  };

  return (
    <div className="screen-container">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.emojiIcon}>🕵️</span>
          <span>Black Sheep</span>
        </div>
        <button className={styles.closeBtn} onClick={cancelGame}>
          <X size={24} />
        </button>
      </div>

      <div className={styles.mainContent}>
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <motion.div
              key="hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -200, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={styles.hiddenState}
            >
              <div
                className={styles.tapCard}
                style={{ position: 'relative' }}
                onClick={handleRevealClick}
              >
                <div className={styles.tapIconContainer}>
                  <img src="/chitti.jpg" alt="Avatar" className={styles.avatarImage} />
                </div>
                <h2 className={styles.tapPlayerName}>{currentPlayer.name}</h2>
                <p className={styles.tapSubtitle}>Tap to reveal</p>
                <TapHint visible={true} top="50%" left="50%" />
              </div>

              {hasRevealedThisTurn ? (
                <div className={styles.nextAction} style={{ marginTop: 'var(--spacing-xl)' }}>
                  <button className="primary-btn" onClick={handleNext}>
                    {isLastPlayer ? 'Start Timer' : 'Next Player'}
                  </button>
                  <p className={styles.helperText}>
                    {isLastPlayer ? 'Everyone has seen their role.' : 'Pass phone to the next player.'}
                  </p>
                </div>
              ) : (
                <p className={styles.helperText}>
                  Tap your card to reveal the word. Make sure no one else sees it.
                </p>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="revealed"
              initial={{ opacity: 0, y: 200, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -200, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={styles.revealedState}
            >
              <div className={`${styles.roleCard} ${isImposter ? styles.imposterCard : styles.civilianCard}`}>
                <div className={styles.cardBanner}>
                  <img src={isImposter ? "/imposter_avatar.png" : "/player_avatar.png"} alt="Role Banner" className={styles.cardBannerImg} />
                </div>
                <div className={styles.cardHeader}>
                  <h3>{currentPlayer.name}</h3>
                </div>

                <div className={styles.cardBody}>
                  {isImposter ? (
                    <div className={styles.roleInfo}>
                      <div className={styles.roleIconBad}><X size={32} color="white" /></div>
                      <h2 className={styles.roleName}>Black Sheep</h2>
                      {settings.hintsEnabled && gameState.secretHints?.length > 0 && (
                        <div className={styles.hintsContainer}>
                          <p className={styles.hintCategory}>Hint:</p>
                          <p className={styles.hintItem}>{gameState.secretHints[0]}</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className={styles.roleInfo}>
                      <div className={styles.roleIconGood}><Check size={32} color="white" /></div>
                      <h2 className={styles.secretWord}>{gameState.secretWord}</h2>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
