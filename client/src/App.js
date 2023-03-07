// import logo from './logo.svg';
// import './App.css';

import './components/styles/Global';
import Discover from './pages/Discover';
import Landing from "./pages/Landing";
import ProfileComponent from './components/Profile';
import Matches from './components/Matches';


import Avatar from './components/Avatar'



function App() {
  return (
    <div style={{background: 'linear-gradient(175deg, rgba(218,77,141,1) 39%, rgba(115,10,244,1) 83%)', width: '100%', height: '100%'}}>
       {/* <Landing /> */}
      <Discover />
      {/* <ProfileComponent /> */}
      {/* <Matches /> */}
    </div>
    <Avatar>

    </Avatar>
  );
};
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




export default App;
