import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import TicketsPage from './pages/ticketsPage/TicketsPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TicketsPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
