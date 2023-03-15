import { useQuery } from '@apollo/client'
import { QUERY_ME } from "../utils/queries";
import Auth from '../utils/auth';
import { useParams } from 'react-router-dom';

export default function ProfileComponent() {

  const { data, loading } = useQuery(QUERY_ME);

  const me = data?.me;

  if (loading) {
    return <h1>Loading...</h1>;
  };

  console.log();
  
    
      return (
        <>
        
        </>
      );
  
};