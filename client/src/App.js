import Discover from './pages/Discover';
import Navbar from './components/Navbar';
import Profile from './pages/ProfilePage';
import Login from './pages/Login';
import Interests from './components/Interests';
import Bio from './components/Bio';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as  Router, Route, Routes, useLocation } from 'react-router-dom';


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
  //random comment

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

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
       {/* <Navbar /> */}
          <div className="container">
            <Routes>
              <Route 
                path="/"
                element={<Login />}
              />
              <Route 
              path='/Interests'
              element={<Interests />}
              />
              <Route 
              path='/Bio'
              element={<Bio />}
              />
              <Route 
                path="/Discover" 
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
  )
}
    
export default App;
