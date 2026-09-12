import { Minus, Plus } from 'lucide-react';
import styles from './Stepper.module.css';

interface StepperProps {
  value: number;
  min: number;
  max: number;
  onChange: (val: number) => void;
}

export function Stepper({ value, min, max, onChange }: StepperProps) {
  return (
    <div className={styles.stepper}>
      <button 
        className={styles.btn} 
        onClick={() => value > min && onChange(value - 1)}
        disabled={value <= min}
      >
        <Minus size={16} />
      </button>
      <span className={styles.value}>{value}</span>
      <button 
        className={styles.btn} 
        onClick={() => value < max && onChange(value + 1)}
        disabled={value >= max}
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
