import React, { useState, useEffect } from 'react';
import {LandingContainer} from './styles/container.styled';
import H1 from './styles/singleLineH1.styled';
import Button from './styles/pinkButton.styled';
import Input from './styles/genericInput.styled';
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';
import { useMutation  } from '@apollo/client';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
window.location.href = '/Discover'
    } catch (e) {
      console.error(e);
    }
    

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
      <LandingContainer>
        <H1>Login</H1>
            {data ? (
              <p>
                Welcome back. Give us a moment to find your.{' '}
                <Link to="/Discover">potential matches.</Link>
              </p>
            ) : (


                <>
                <Input
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />

                <Input
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <Button onClick={handleFormSubmit}>Login</Button>
              </>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
   </LandingContainer>
  );
};

export default Login;
