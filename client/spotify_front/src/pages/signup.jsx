
import { Container, Wrapper, Form, Input, Button, Title } from "../style/Signup_Styled"





const SignUp = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="Name" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
                <Button>Create</Button>
            </Form>
            

        </Wrapper>
    </Container>
  )
}

export default SignUp
