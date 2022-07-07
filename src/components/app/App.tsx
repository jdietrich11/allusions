import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import './App.css';
import LandingPage from '../../pages/landing/landing';
import LoginPage from '../../pages/login/login';
import ChooseTeams from '../../pages/choose-teams/choose-teams';
import ModeSelect from '../../pages/mode-select/mode-select';
import CardpackSelect from '../../pages/cardpack-select/cardpack-select';
import Instructions from '../../pages/instructions/instructions';
import PlayerSelect from '../../pages/player-select/player-select';
import PlayerTurn from '../../pages/player-turn/player-turn';
import ScoreScreen from '../../pages/score-screen/score-screen';
import StorePage from '../../pages/store/store';
import UserPage from '../../pages/user/user';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/choose-teams' element={<ChooseTeams />} />
        <Route path='/mode-select' element={<ModeSelect />} />
        <Route path='/cardpack-select' element={<CardpackSelect />} />
        <Route path='/instructions' element={<Instructions />} />
        <Route path='/player-select' element={<PlayerSelect />} />
        <Route path='/player-turn' element={<PlayerTurn />} />
        <Route path='/scores' element={<ScoreScreen />} />
        <Route path='/store' element={<StorePage />} />
        <Route path='/user' element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
