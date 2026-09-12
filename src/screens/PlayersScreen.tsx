import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import type { DropResult } from '@hello-pangea/dnd';
import { useGameStore } from '../store/useGameStore';
import { ChevronLeft, Pencil, Plus, Trash2, GripVertical, RotateCcw } from 'lucide-react';
import styles from './PlayersScreen.module.css';

export function PlayersScreen() {
  const navigate = useNavigate();
  const { players, setPlayers, addPlayer, removePlayer, updatePlayer, updateSettings } = useGameStore();
  
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    
    const items = Array.from(players);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    setPlayers(items);
  };

  const handleEditClick = (id: string, currentName: string) => {
    setEditingId(id);
    setEditValue(currentName);
  };

  const saveEdit = () => {
    if (editingId && editValue.trim()) {
      updatePlayer(editingId, editValue.trim());
    }
    setEditingId(null);
  };

  const handleAddPlayer = () => {
    addPlayer(`Player ${players.length + 1}`);
  };

  const handleResetPlayers = () => {
    const defaultPlayers = [
      { id: `p-${Date.now()}-1`, name: 'Player 1' },
      { id: `p-${Date.now()}-2`, name: 'Player 2' },
      { id: `p-${Date.now()}-3`, name: 'Player 3' },
      { id: `p-${Date.now()}-4`, name: 'Player 4' },
    ];
    setPlayers(defaultPlayers);
    updateSettings({ playersCount: 4 });
  };

  return (
    <div className="screen-container">
      <div className="header">
        <button className={styles.iconBtn} onClick={() => navigate(-1)}>
          <ChevronLeft size={28} />
        </button>
        <h1>Players</h1>
      </div>

      <div className={styles.playersContainer}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="players-list">
            {(provided) => (
              <div 
                {...provided.droppableProps} 
                ref={provided.innerRef}
                className={styles.list}
              >
                {players.map((player, index) => (
                  <Draggable key={player.id} draggableId={player.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className={styles.playerRow}
                      >
                        <div className={styles.dragHandle} {...provided.dragHandleProps}>
                          <GripVertical size={20} color="var(--text-muted)" />
                        </div>
                        
                        {editingId === player.id ? (
                          <div className={styles.editMode}>
                            <input 
                              autoFocus
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              onBlur={saveEdit}
                              onKeyDown={(e) => e.key === 'Enter' && saveEdit()}
                              className={styles.editInput}
                            />
                            <button 
                              className={styles.iconBtn} 
                              onMouseDown={(e) => {
                                e.preventDefault();
                                removePlayer(player.id);
                              }}
                            >
                              <Trash2 size={18} color="var(--accent-color)" />
                            </button>
                          </div>
                        ) : (
                          <div className={styles.viewMode} onClick={() => handleEditClick(player.id, player.name)}>
                            <span className={styles.playerName}>{player.name}</span>
                            <Pencil size={16} color="var(--text-muted)" />
                          </div>
                        )}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      <div className={styles.actionArea}>
        <button className={styles.addBtn} onClick={handleAddPlayer}>
          <Plus size={20} /> Add Player
        </button>
        <button className={styles.resetBtn} onClick={handleResetPlayers}>
          <RotateCcw size={16} /> Reset
        </button>
      </div>
    </div>
  );
}
