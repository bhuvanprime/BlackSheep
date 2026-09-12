import { motion } from 'framer-motion';
import styles from './Toggle.module.css';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Toggle({ checked, onChange }: ToggleProps) {
  return (
    <div 
      className={`${styles.toggle} ${checked ? styles.on : styles.off}`} 
      onClick={() => {
        if (navigator.vibrate) navigator.vibrate(50);
        onChange(!checked);
      }}
    >
      <motion.div 
        className={styles.handle}
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
      />
    </div>
  );
}
