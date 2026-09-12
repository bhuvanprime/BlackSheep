import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/useGameStore';
import { ChevronLeft, Plus, Check, Trash2 } from 'lucide-react';
import styles from './CategoriesScreen.module.css';

export function CategoriesScreen() {
  const navigate = useNavigate();
  const { categories, selectedCategoryIds, toggleCategorySelection, addCategory, removeCategory } = useGameStore();
  
  const [isAdding, setIsAdding] = useState(false);
  const [newName, setNewName] = useState('');
  const [newWords, setNewWords] = useState('');

  const saveCustomCategory = () => {
    if (newName.trim() && newWords.trim()) {
      const wordsArray = newWords.split(',').map(w => w.trim()).filter(w => w.length > 0);
      if (wordsArray.length > 0) {
        addCategory({ name: newName.trim(), words: wordsArray });
        setIsAdding(false);
        setNewName('');
        setNewWords('');
      }
    }
  };

  return (
    <div className="screen-container">
      <div className="header">
        <button className={styles.iconBtn} onClick={() => navigate(-1)}>
          <ChevronLeft size={28} />
        </button>
        <h1>Categories</h1>
      </div>

      <div className={styles.categoriesContainer}>
        {categories.map((category) => {
          const isSelected = selectedCategoryIds.includes(category.id);
          return (
            <div 
              key={category.id} 
              className={`${styles.categoryRow} ${isSelected ? styles.selected : ''}`}
              onClick={() => toggleCategorySelection(category.id)}
            >
              <div className={styles.catInfo}>
                <span className={styles.catName}>{category.name}</span>
                <span className={styles.catCount}>{category.words.length} words</span>
              </div>
              <div className={styles.actions}>
                {category.isCustom && (
                  <button 
                    className={styles.deleteBtn} 
                    onClick={(e) => { e.stopPropagation(); removeCategory(category.id); }}
                  >
                    <Trash2 size={16} />
                  </button>
                )}
                <div className={`${styles.checkbox} ${isSelected ? styles.checked : ''}`}>
                  {isSelected && <Check size={16} color="white" />}
                </div>
              </div>
            </div>
          );
        })}

        {isAdding ? (
          <div className={styles.addForm}>
            <input 
              placeholder="Category Name" 
              value={newName} 
              onChange={e => setNewName(e.target.value)}
              className={styles.input}
              autoFocus
            />
            <textarea 
              placeholder="Comma-separated words (e.g. Cat, Dog, Bird)" 
              value={newWords}
              onChange={e => setNewWords(e.target.value)}
              className={styles.textarea}
              rows={3}
            />
            <div className={styles.formActions}>
              <button className={styles.cancelBtn} onClick={() => setIsAdding(false)}>Cancel</button>
              <button className={styles.saveBtn} onClick={saveCustomCategory}>Save</button>
            </div>
          </div>
        ) : (
          <button className={styles.addCustomBtn} onClick={() => setIsAdding(true)}>
            <Plus size={20} /> Add Custom Category
          </button>
        )}
      </div>
    </div>
  );
}
