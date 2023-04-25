import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { CREATE_USER } from "../utils/mutations";
import React, { useState } from 'react';
import Auth from "../utils/auth";

export const useSignupHook = () => {
    const [userFormData, setUserFormData] = useState({ 
        email: '', 
        password: '', 
        name: '', 
        gender: '', 
        age: '', 
        location: '', 
        images: '', 
        language: '', 
        what: '', 
        hobbies: '', 
        bio: ''
    });
    const [createUser, { error, data }] = useMutation(CREATE_USER);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserFormData({...userFormData, [name]: value,
       });
    };

    //Handles gender buttons
    const handleGenderButton = (gender) => {
      setUserFormData({...userFormData, gender});
      console.log('updated the form', {...userFormData,gender})
    }

    
    

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
               
                //The navigate state is better to deal with the browser history
                navigate('/Discover');
      
              };

              return {
                userFormData,
                handleInputChange,
                handleFormSubmit,
                handleGenderButton,
                data
              };
};