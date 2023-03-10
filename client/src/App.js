import './components/styles/Global';
import Discover from './pages/Discover';
import Landing from "./pages/Landing";
import Profile from './pages/ProfilePage';
import Login from './pages/Login';

import ProfileComponent from './components/Profile';
import Matches from './components/Matches';
import Avatar from './components/Avatar'
import { Route, Routes, BrowserRouter as  Router } from 'react-router-dom';


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
      <Router>
        <div className='mainDiv'>
          <div className="container">
            <Routes>
              <Route 
                path="/"
                element={<Landing />}
              />
              <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/discover" 
                element={<Discover />}
              />
              <Route 
                path="/me" 
                element={<Profile />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  )
}
    
export default App;
