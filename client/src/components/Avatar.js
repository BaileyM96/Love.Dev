import PhotoButton from './styles/photoButton.styled';
import H1 from './styles/singleLineH1.styled';
// reusing the container from landning page
import {LandingContainer} from './styles/container.styled';
import AvatarA from "../Avatars/AvatarA.png";
import AvatarB from "../Avatars/AvatarB.png";
import AvatarC from "../Avatars/AvatarC.png";
import AvatarD from "../Avatars/AvatarD.png";
import AvatarE from "../Avatars/AvatarE.png";


// const avatarPicker = () => {
//     console.log('photoadded to userState')
// };

export default function Avatar() {
    return (
        <div>
            <H1>Pick Your Avatar</H1>
        <LandingContainer>
            <PhotoButton><img src={AvatarA} alt="Avatar A" onClick={avatarPicker}>
                </img> 
            </PhotoButton>
            <PhotoButton><img src={AvatarB} alt="Avatar B" onClick={avatarPicker}>
                </img> 
            </PhotoButton>
            <PhotoButton><img src={AvatarC} alt="Avatar C" onClick={avatarPicker}>
                </img> 
            </PhotoButton>
            <PhotoButton><img src={AvatarD} alt="Avatar D" onClick={avatarPicker}>
                </img> 
            </PhotoButton>
            <PhotoButton><img src={AvatarE} alt="Avatar E" onClick={avatarPicker}>
                </img> 
            </PhotoButton>

        </LandingContainer>
        </div>
        
        
    );
};

//Uncomment this later

