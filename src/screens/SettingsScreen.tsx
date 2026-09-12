import { useNavigate } from 'react-router-dom';
import { useGameStore, getMaxImposters } from '../store/useGameStore';
import { Stepper } from '../components/Stepper';
import { Toggle } from '../components/Toggle';
import { ChevronRight } from 'lucide-react';
import styles from './SettingsScreen.module.css';

export function SettingsScreen() {
  const navigate = useNavigate();
  const { settings, updateSettings, categories, selectedCategoryIds, startGame } = useGameStore();

  const selectedCategoriesText = selectedCategoryIds.length === 1 
    ? categories.find(c => c.id === selectedCategoryIds[0])?.name
    : `${categories.find(c => c.id === selectedCategoryIds[0])?.name} +${selectedCategoryIds.length - 1}`;

  const handleStartGame = () => {
    startGame();
    navigate('/pass');
  };

  return (
    <div className="screen-container">
      <div className={styles.bannerContainer}>
        <div className={styles.bannerImageWrapper}>
          <img src={`${import.meta.env.BASE_URL}banner.png`} alt="Black Sheep" className={styles.bannerImage} />
        </div>
      </div>

      <div className={styles.settingsList}>
        <div className="list-item" onClick={() => navigate('/players')}>
          <div className={styles.itemLeft}>
            <span className={styles.emojiIcon}>☝️</span>
            <span className={styles.itemLabel}>Players</span>
          </div>
          <div className={styles.itemRight}>
            <span className={styles.valueText}>{settings.playersCount}</span>
            <ChevronRight size={20} color="var(--text-muted)" />
          </div>
        </div>

        <div className="list-item">
          <div className={styles.itemLeft}>
            <span className={styles.emojiIcon}>👻</span>
            <span className={styles.itemLabel}>Imposters</span>
          </div>
          <Stepper 
            value={settings.impostersCount} 
            min={1} 
            max={getMaxImposters(settings.playersCount)} 
            onChange={(val) => updateSettings({ impostersCount: val })} 
          />
        </div>

        <div className="list-item">
          <div className={styles.itemLeft}>
            <span className={styles.emojiIcon}>🔍</span>
            <span className={styles.itemLabel}>Hints for Imposter</span>
          </div>
          <Toggle 
            checked={settings.hintsEnabled} 
            onChange={(val) => updateSettings({ hintsEnabled: val })} 
          />
        </div>

        <div className="list-item" onClick={() => navigate('/categories')}>
          <div className={styles.itemLeft}>
            <span className={styles.emojiIcon}>👀</span>
            <span className={styles.itemLabel}>Categories</span>
          </div>
          <div className={styles.itemRight}>
            <span className={styles.valueText}>{selectedCategoriesText || 'None selected'}</span>
            <ChevronRight size={20} color="var(--text-muted)" />
          </div>
        </div>

        <div className="list-item">
          <div className={styles.itemLeft}>
            <span className={styles.emojiIcon}>⏰</span>
            <span className={styles.itemLabel}>Time Limit</span>
          </div>
          <Toggle 
            checked={settings.timeLimitEnabled} 
            onChange={(val) => updateSettings({ timeLimitEnabled: val })} 
          />
        </div>

        {settings.timeLimitEnabled && (
          <div className="list-item">
            <div className={styles.itemLeft}>
              <span className={styles.emojiIcon}>🕐</span>
              <span className={styles.itemLabel}>Duration</span>
            </div>
            <div className={styles.itemRight}>
              <Stepper 
                value={settings.durationMinutes} 
                min={1} 
                max={15} 
                onChange={(val) => updateSettings({ durationMinutes: val })} 
              />
              <span className={styles.minutesLabel}>minutes</span>
            </div>
          </div>
        )}
      </div>

      <div className={styles.actionArea}>
        <button className="primary-btn" onClick={handleStartGame}>
          Start Game
        </button>
      </div>
    </div>
  );
}
