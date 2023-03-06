import {LandingContainer} from './styles/container.styled'
import H1 from './styles/singleLineH1.styled'
import Button from './styles/pinkButton.styled'
import Input from './styles/genericInput.styled'

export default function Login() {
    return (
      <LandingContainer>
          <H1>Welcome Back!</H1>
          <Input placeholder='Username'></Input>
          <Input placeholder='Password'></Input>
          <Button>Sign In</Button>
      </LandingContainer>
    );
};