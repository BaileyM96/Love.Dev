import './components/styles/Global';
import Discover from './pages/Discover';
import Landing from "./pages/Landing";
import Profile from './pages/ProfilePage';
import Login from './pages/Login';
import Navbar from './components/Navbar';


import ProfileComponent from './components/Profile';
import Matches from './components/Matches';
import Avatar from './components/Avatar'
import { Route, Routes, BrowserRouter as  Router } from 'react-router-dom';
import Nav from './components/Nav';

import './App.css';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

// Cache the data in memory 
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

// TODO Set the apolloprovider and the react router dom
function App() {
  return (
    <ApolloProvider client={client}>
      <Nav />
      <Discover />
    </ApolloProvider>
  )
}
    
export default App;
