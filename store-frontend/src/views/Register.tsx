import styled from "styled-components";

const Container = styled.div`
 width: 110v;
 height: 100vh;
 background: linear-gradient(
     rgba(255,255,255,0.5), 
     rgba(255,255,255,0.5) 
     
     ),
  url("https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
 
`
const Form = styled.form`
 
`
const Input = styled.input`
 
`
const Agreement = styled.span`
 
`
const Button = styled.button`
 
`



const Register: React.FC = () => {
    return <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name"></Input>
                    <Input placeholder="last name"></Input>
                    <Input placeholder="username"></Input>
                    <Input placeholder="email"></Input>
                    <Input placeholder="password"></Input>
                    <Input placeholder="confirm password"></Input>
                    <Agreement>
                        By creating an account with Gamer-Store y accept 
                        this is my own information<b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE ACCOUNT</Button>
                </Form>
            </Wrapper>
        </Container>
        ;
  };
  
  export default Register;