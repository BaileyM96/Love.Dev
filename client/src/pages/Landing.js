import { Container } from '../components/styles/container.styled'
import { H1 } from '../components/styles/Header.styled';
import Button from '../components/styles/pinkButton.styled';




export default function Landing() {
    return (
        <Container>
            <H1>
            {'{ Love.Dev }'}
            </H1>
            <Button type='button'>Login</Button>
            <Button type='button'>Sign Up</Button>
        </Container>
    );
}
