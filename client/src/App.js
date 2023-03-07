import './components/styles/Global';
import Discover from './pages/Discover';
import Landing from "./pages/Landing";
import ProfileComponent from './components/Profile';
import Matches from './components/Matches';
import Avatar from './components/Avatar'
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
    <div style={{background: 'linear-gradient(175deg, rgba(218,77,141,1) 39%, rgba(115,10,244,1) 83%)', width: '100%', height: '100%'}}>
       <Landing />
      {/* <Discover /> */}
      {/* <ProfileComponent /> */}
      {/* <Matches /> */}
      {/* <Avatar>

      </Avatar> */}
    </div>
    </ApolloProvider>
  );
};





export default App;
