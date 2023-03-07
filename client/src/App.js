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
    
    <Avatar>

    </Avatar>
    
  )
}
    
 


export default App;
