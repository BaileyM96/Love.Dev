import { useQuery } from '@apollo/client'
import { QUERY_ME } from "../utils/queries";
import Auth from '../utils/auth';
import { useParams } from 'react-router-dom';

export default function Profile() {
  const { data, loading } = useQuery(QUERY_ME);
  const me = data?.me;
  const loggedIn = Auth.loggedIn();

  if (loading) {
    return <h1>Loading...</h1>;
  };

  return (
    <>
      {loggedIn && (
        <>
          <h1>Welcome, {me.name}!</h1>
          <p>Email: {me.email}</p>
          <p>Gender: {me.gender}</p>
          <p>Age: {me.age}</p>
          <p>Location: {me.location}</p>
          <p>Images: {me.images}</p>
          <p>Bio: {me.bio}</p>
        </>
      )}
      {!loggedIn && (
        <p>Please log in to view your profile.</p>
      )}
    </>
  );
};



