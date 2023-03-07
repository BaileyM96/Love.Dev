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




export default App;
