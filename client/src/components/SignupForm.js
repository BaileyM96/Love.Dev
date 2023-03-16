import React, { useState } from "react";
import { LandingContainer } from "./styles/container.styled";
import H1 from "./styles/singleLineH1.styled";
import Button from "./styles/pinkButton.styled";
import Input from "./styles/genericInput.styled";
import { Link } from 'react-router-dom'
import Auth from '../utils/auth';
import { CREATE_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";

export default function SignupForm() {

    // State for form validation
    const [userFormData, setUserFormData] = useState({ email: '', password: '', name: '', gender: '', age: '', location: '', bio: '', images: '' });

    const [createUser, { error, data }] = useMutation(CREATE_USER);
  

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserFormData({...userFormData, [name]: value,
       });
    };
    

      //Signup event
      const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(userFormData);

        try {
            const { data } = await createUser({
                variables: { ...userFormData },
            });

            Auth.login(data.createUser.token);
              } catch (e) {
              console.error(e);
                }

                window.location.href = '/discover'
      
              };
      // console.log(userFormData)

      

   
     



    return (
        <LandingContainer>
        <H1>Create your account!</H1>
        {/* Email */}
        {data ? (
          <p>
            Success!
            <Link to='/discover'></Link>
          </p>
        ) : (
        
        
          <>
        <Input
        placeholder='Email'
        type="email"
        name='email'
        onChange={handleInputChange}
        value={userFormData.email}
        required
        />

    
        <Input 
        placeholder='Password'
        type='password'
        name='password'
        onChange={handleInputChange}
        value={userFormData.password}
        required
        />

      
        <Input 
        placeholder='Name'
        type='text'
        name='name'
        onChange={handleInputChange}
        value={userFormData.name}
        required
        />


      
        <Input 
        placeholder='Gender'
        type='text'
        name='gender'
        onChange={handleInputChange}
        value={userFormData.gender}
        required
        />

        
        <Input 
        placeholder='Age'
        type='text'
        name='age'
        onChange={handleInputChange}
        value={userFormData.age}
        required
        />

       
        <Input 
        placeholder='Location'
        type='text'
        name='location'
        onChange={handleInputChange}
        value={userFormData.location}
        required
        />

        <Input 
        placeholder='images'
        type='text'
        name='images'
        onChange={handleInputChange}
        value={userFormData.images}
        required
        />

        <Input 
        placeholder='Bio'
        type='text'
        name='bio'
        onChange={handleInputChange}
        value={userFormData.bio}
        required
        />
        <Button onClick={handleFormSubmit}>Signup</Button>
        
        </>
      )};
    </LandingContainer>
      );
}