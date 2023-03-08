import React, { useState, useEffect } from "react";
import { LandingContainer } from "./styles/container.styled";
import H1 from "./styles/singleLineH1.styled";
import Button from "./styles/pinkButton.styled";
import Input from "./styles/genericInput.styled";

import Auth from '../utils/auth';
import { CREATE_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";

export default function SignupForm() {

    // State for form validation
    const [userFormData, setUserFormData] = useState({ email: '', password: '', firstname: '', lastname: '', gender: '', birthdate: '', favlang: '' });
    
    const [validated] = useState(false);

    const [showAlert, setShowAlert] = useState(false);

    const [createUser, { error }] = useMutation(CREATE_USER);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserFormData({...userFormData, [name]: value });
    };

    useEffect(() => {
        if (error) {
          setShowAlert(true);
        } else {
          setShowAlert(false);
        }
      }, [error]);

      const handleFormSubmit = async (e) => {
        e.preventDeafault();

        try {
            const { data } = await createUser({
                variables: { ...userFormData },
            });

            console.log(data);
            Auth.login(data.addUser.token);
        }   catch (err) {
            console.error(err);
        }

        setUserFormData({
            email: '',
            password: '',
            firstname: '',
            lastname: '',
            gender: '',
            birthdate: '',
            favlang: '',
        });
      };



    return (
        <LandingContainer>
        <H1>Create your account!</H1>
        {/* Email */}
        <Input 
        placeholder='Email'
        type="text"
        name='email'
        onChange={handleInputChange}
        value={userFormData.email}
        required>
        </Input>

        {/* Create Password */}
        <Input 
        placeholder='Password'
        type='password'
        name='password'
        onChange={handleInputChange}
        value={userFormData.password}
        required>
        </Input>

        {/* First Name */}
        <Input 
        placeholder='First Name'
        type='text'
        name='First Name'
        onChange={handleInputChange}
        value={userFormData.password}
        required>
        </Input>

        {/* Last Name */}
        <Input 
        placeholder='Last Name'
        type='text'
        name='Last Name'
        onChange={handleInputChange}
        value={userFormData.password}
        required>
        </Input>

        {/* Gender */}
        <Input 
        placeholder='Gender'
        type='text'
        name='Gender'
        onChange={handleInputChange}
        value={userFormData.password}
        required>
        </Input>

        {/* Birth Date */}
        <Input 
        placeholder='Birthdate'
        type='text'
        name='Birthdate'
        onChange={handleInputChange}
        value={userFormData.password}
        required>
        </Input>

        {/* Fav Lang */}
        <Input 
        placeholder='Favorite Language'
        type='text'
        name='password'
        onChange={handleInputChange}
        value={userFormData.password}
        required>
        </Input>

        <Button>Signup</Button>
    </LandingContainer>
      );
}