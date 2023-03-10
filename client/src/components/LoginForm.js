import React, { useState, useEffect } from 'react';
import {LandingContainer} from './styles/container.styled';
import H1 from './styles/singleLineH1.styled';
import Button from './styles/pinkButton.styled';
import Input from './styles/genericInput.styled';
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';
import { useMutation  } from '@apollo/client';
import { Redirect } from 'react-router-dom';

export default function Login() {
  // Setting the state for login form
  const [userFormData, setUserFormData] = useState({email: '', password: ''});
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // Need mutation for login
  const [login, { error }] = useMutation (LOGIN_USER);

  // Allow dynamic changes to the forms data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  useEffect(() => {
    if (error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  })

  // Handle the form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // const form = e.currentTarget;
    // if (form.checkValidity() === false) {
    //   e.preventDefault();
    //   e.stopPropagation();
    // }
    
    //comment
    try {
      const { data } = await login({
        variables: { ...userFormData},
      });
      
      Auth.login(data.login.token)
      window.location.href = '/discover';
    } catch (err) {
      console.error(err);
    }

    // Set the form data
    setUserFormData({
      email: '',
      password: '',
    });
  };

    return (
      <LandingContainer>
          <H1>Welcome Back!</H1>
          <Input 
          placeholder='Email'
          type="text"
          name='email'
          onChange={handleInputChange}
          value={userFormData.email}
          required>
          </Input>


          <Input 
          placeholder='Password'
          type='password'
          name='password'
          onChange={handleInputChange}
          value={userFormData.password}
          required>
          </Input>
          <Button onClick={handleF}>Login</Button>
      </LandingContainer>
    );
};