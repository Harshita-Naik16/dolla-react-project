import React from 'react'
import { Container, FormContainer, Form, FormH1, Icon, FormLabel, FormInput, FormButton, Text } from './SigninElements'

export default function Signin() {
  return (
    <>
      <Container>
        <Icon to='/dolla-react-project' >dolla</Icon>
        <FormContainer>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor='for'>
                Email
            </FormLabel>
            <FormInput type='email' required/>
            <FormLabel htmlFor='for'>
                Password
            </FormLabel>
            <FormInput type='password' required/>
            <FormButton type='submit'>Continue</FormButton>
            <Text>Forgot password?</Text>
          </Form>
        </FormContainer>
      </Container>
    </>
  )
}
