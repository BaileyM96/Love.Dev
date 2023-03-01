<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';
import GlobalStyles from './Global';

function App() {
  return (
    <GlobalStyles />

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
  );
=======
// Render components to build page

import GlobalStyles from './components/styles/Global';
import { ThemeProvider } from 'styled-components'


const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '390px',
}
function App() {
  return (
    <ThemeProvider theme = {theme}>
      <>
    <GlobalStyles />
  //   <div className="App">
     
  //   </div>
  </>
  </ThemeProvider>
  // );
>>>>>>> Stashed changes
  )
}

export default App;
