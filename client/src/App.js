import './components/styles/Global';
import Discover from './pages/Discover';
import Landing from "./pages/Landing";
import Profile from './pages/ProfilePage';
import Login from './pages/Login';
import { setContext } from '@apollo/client/link/context';
import Navbar from './components/Navbar';
import ProfileComponent from './components/Profile';



import Matches from './components/Matches';
import Avatar from './components/Avatar'
import { Route, Routes, BrowserRouter as  Router } from 'react-router-dom';


import './App.css';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
});

// Cache the data in memory 
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// TODO Set the apolloprovider and the react router dom
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* <Navbar /> */}
        {/* <div style="{{background: 'linear-gradient(175deg, rgba(218,77,141,1) 39%, rgba(115,10,244,1) 83%)', width: '100%', height: '100%'}}>"> */}
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
        
        {/* </div> */}
      </Router>
    </ApolloProvider>
  );
};





export default App;
