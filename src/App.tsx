import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Header />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
