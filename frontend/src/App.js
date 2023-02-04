import logo from './logo.svg';
import './App.css';
import { Form } from './components/Form';
import { ThemeProvider, CssBaseline, createTheme, Button } from '@mui/material';

const styles = {
  formContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: 'column',
    alignItems: 'center',
  }
}

function App() {
  return (
    <>
      <div style={styles.formContainer}>
        <Form />
      </div>
    </>
  );
}

export default App; 
