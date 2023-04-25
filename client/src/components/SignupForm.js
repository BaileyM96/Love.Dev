import React, { useState } from "react";
import { useSignupHook } from "../Hooks/FormSubmitHook";
import Info from "./Gen.Info";
import Interests from "./Interests";
import BioForm from "./Bio";

//Parent component to host the other forms such as...
  //General Info
    //Interests form...
      //Bio form

export default function SignupForm() {

    // State for form validation, the back button, and next page
    const { userFormData, handleInputChange, handleFormSubmit, data, handleGenderButton } = useSignupHook();
    const [currentPage, setCurrentPage] = useState(1);

    //Switch to next form
      const nextPage = () => {
        setCurrentPage(currentPage + 1);
      };

      //Go back to prev form
      const previousPage = () => {
        setCurrentPage(currentPage - 1);
      };


    return (
      <>
      {currentPage === 1 && (
        <Info 
        formData={userFormData}
        handleGenderButton={handleGenderButton}
        handleInputChange={handleInputChange}
        nextPage={nextPage}
        />
      )}
      {currentPage === 2 && (
        <Interests 
        formData={userFormData}
        handleInputChange={handleInputChange}
        previousPage={previousPage}
        nextPage={nextPage}
        />
      )}
      {currentPage === 3 && (
        <BioForm 
        formData={userFormData}
        handleInputChange={handleInputChange}
        previousPage={previousPage}
        handleFormSubmit={handleFormSubmit}
        />
      )}
      </>  
    );
}