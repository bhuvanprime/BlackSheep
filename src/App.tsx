import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SettingsScreen } from './screens/SettingsScreen';
import { PlayersScreen } from './screens/PlayersScreen';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { PassAndPlayScreen } from './screens/PassAndPlayScreen';
import { ActiveGameScreen } from './screens/ActiveGameScreen';
import { GameOverScreen } from './screens/GameOverScreen';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<SettingsScreen />} />
        <Route path="/players" element={<PlayersScreen />} />
        <Route path="/categories" element={<CategoriesScreen />} />
        <Route path="/pass" element={<PassAndPlayScreen />} />
        <Route path="/game" element={<ActiveGameScreen />} />
        <Route path="/game-over" element={<GameOverScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
