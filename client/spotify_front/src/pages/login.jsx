import {
    Container,
    Wrapper,
    Form,
    Input,
    Button,
    Title,
    Link
} from '../style/Login_Styled';

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>

                    <Input placeholder="User Name" />
                    <Input placeholder="Password" />
                    <Button>LOGIN</Button>
                    <Link>DO NOT YOU REMBER THE PASSWORD</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>


            </Wrapper>
        </Container>
    )
}

export default Login
