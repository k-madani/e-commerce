import React from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';
import Button from "./Button";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;

const SignUp = () => {
  return (
    <Container>
      <div>
        <Title>create a new account👋</Title>
        <Span>Enter your details here to create an account</Span>
      </div>
      <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
        <TextInput label="name" placeholder="Enter your name"/>
        <TextInput label="email" placeholder="Enter your email"/>
        <TextInput label="password" placeholder="**********"/>
        
        <Button text="Sign Up"/>
      </div>
    </Container>
  )
}

export default SignUp;
