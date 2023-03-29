import './components/styles/Global';
import Discover from './pages/Discover';
import Landing from "./pages/Landing";
import Profile from './pages/ProfilePage';
import Login from './pages/Login';

import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as  Router, Route, Routes, } from 'react-router-dom';


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
        {/* <div style="{{background: 'linear-gradient(175deg, rgba(218,77,141,1) 39%, rgba(115,10,244,1) 83%)', width: '100%', height: '100%'}}>"> */}
          <div className="container">
            <Routes>
              <Route 
                path="/"
                element={<Landing />}
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
