<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';
=======
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import SignIn from './pages/signin';
import Navbar from './components/NavBar';
>>>>>>> Stashed changes

function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
    <Container maxWidth="100%" >
      <Navbar />
        <SignIn />
    </Container>
>>>>>>> Stashed changes
  );
}

export default App;
