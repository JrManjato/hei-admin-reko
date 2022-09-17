import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EventHandler from './pages/EventHandler';
import EventLanding from './pages/EventLanding';
import EventList from './pages/EventList';
import LoginPage from './pages/LoginPage';
import RekoHandler from './pages/RekoHandler';

const App: React.FC = () => {
  return (
    <div className="App">
        <Routes>
          <Route index element={<LoginPage/>} />
          <Route path='/events' element={<EventHandler/>} />
          <Route path='/landing' element={<EventLanding/>} />
          <Route path='/presence' element={<RekoHandler/>} />
          <Route path='/list' element={<EventList/>} />
        </Routes>
    </div>
  );
}

export default App;
