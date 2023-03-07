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
import { getProfile } from '../utils/auth'

export default function Avatar() {
        const user = getProfile();

        const [updateImage, {loading}] = useMutation(UPDATE_USER);
    
        const imageUpload = (event) => {
            const image = event.target.files[0];
            const formData = new FormData();
            formData.append('image', image);
    
            updateImage({
                variables: {id: user.id, }
            });
        };
            
    
    
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

