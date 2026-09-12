import { Hand } from 'lucide-react';
import styles from './TapHint.module.css';

interface TapHintProps {
  visible: boolean;
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
}

export function TapHint({ visible, top, left, right, bottom }: TapHintProps) {
  if (!visible) return null;

  return (
    <div 
      className={styles.tapHintContainer}
      style={{ top, left, right, bottom }}
    >
      <div className={styles.tapPulseCircle} />
      <Hand 
        className={styles.tapIcon} 
        size={40} 
        strokeWidth={1.5} 
        color="#111" 
        fill="white" 
      />
    </div>
  );
}
