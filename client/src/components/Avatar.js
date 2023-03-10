import PhotoButton from './styles/photoButton.styled';
import H1 from './styles/singleLineH1.styled';
// reusing the container from landning page
import {LandingContainer} from './styles/container.styled';
import AvatarA from "../Avatars/AvatarA.png";
import AvatarB from "../Avatars/AvatarB.png";
import AvatarC from "../Avatars/AvatarC.png";
import AvatarD from "../Avatars/AvatarD.png";
import AvatarE from "../Avatars/AvatarE.png";
import { UPDATE_USER } from '../utils/mutations';
import { useMutation  } from '@apollo/client';
import Auth from '../utils/auth'
import React, { useState, useEffect } from 'react';

export default function Avatar() {
        // this requires a user to be logged in for this function to work

        // const user = Auth.getProfile();

        const [updateImage, { error }] = useMutation(UPDATE_USER);
        const [showAlert, setShowAlert] = useState(false);

        const imageUpload = (event) => {
            const image = event.target.files[0];
            const formData = new FormData();
            formData.append('image', image);
            // This also requires the user to be logged in
            // updateImage({
            //     variables: {id: user.id, image: image }
            // });
        };
            
        useEffect(() => {
            if (error) {
              setShowAlert(true);
            } else {
              setShowAlert(false);
            }
          })
    
    return (
        <div>
            <H1>Pick Your Avatar</H1>
            <LandingContainer>
                <PhotoButton><img src={AvatarA} alt="Avatar A" onClick={imageUpload}>
                    </img> 
                </PhotoButton>
                <PhotoButton><img src={AvatarB} alt="Avatar B" onClick={imageUpload}>
                    </img> 
                </PhotoButton>
                <PhotoButton><img src={AvatarC} alt="Avatar C" onClick={imageUpload}>
                    </img> 
                </PhotoButton>
                <PhotoButton><img src={AvatarD} alt="Avatar D" onClick={imageUpload}>
                    </img> 
                </PhotoButton>
                <PhotoButton><img src={AvatarE} alt="Avatar E" onClick={imageUpload}>
                    </img> 
                </PhotoButton>

            </LandingContainer>
        </div>
        
        
    );
};

//Uncomment this later

