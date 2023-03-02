
<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';
import GlobalStyles from './Global';


// Render components to build page
function App() {
  return (
    <GlobalStyles />

    <div className="App">
     
    </div>
  );

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

  )
}
<<<<<<< Updated upstream
=======
// Render components to build page

// import GlobalStyles from './components/styles/Global';
// import { ThemeProvider } from 'styled-components'


// const theme = {
//   colors: {
//     header: '#ebfbff',
//     body: '#fff',
//     footer: '#003333',
//   },
//   mobile: '390px',
// }
// function App() {
//   return (
//     <ThemeProvider theme = {theme}>
//       <>
//     <GlobalStyles />
//   //   <div className="App">
     
//   //   </div>
//   </>
//   </ThemeProvider>
//   // );

//   )
// }


=======
// Render components to build page

import GlobalStyles from './components/styles/Global';

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
  
      <>
    <GlobalStyles />
 
  </>
 

>>>>>>> Stashed changes

>>>>>>> Stashed changes

export default App;
