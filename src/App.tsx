import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './css/App.css';

import LayoutNavbar from './components/LayoutNavbar';

import Exercice from './pages/exercice';
import Exercices from './pages/exercices';
import AddExercice from './pages/add-exercice';
import UpdateExercice from './pages/update-exercice';

import Tags from './pages/tags';

import PageNotFound from './pages/page-not-found';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutNavbar />}>
          <Route index element={<Exercices />} />
          <Route path="/exercice/:id" element={<Exercice />} />
          <Route path="/addExercice" element={<AddExercice />} />
          <Route path="/updateExercice/:id" element={<UpdateExercice />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
