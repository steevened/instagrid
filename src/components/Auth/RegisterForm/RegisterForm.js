import React from 'react'
import './RegisterForm.scss'
import { Form, Button } from 'semantic-ui-react'

export const RegisterForm = ({ setShowLogin }) => {
  const onSubmit = () => {
    console.log('submitted')
  }

  return (
    <>
      <h2 className='register-form-title'>
        Sign up to see photos and videos from your friends.
      </h2>
      <Form className='register-form' onSubmit={onSubmit}>
        <Form.Input type='text' placeholder='Email' name='email' />
        <Form.Input type='text' placeholder='Fullname' name='fullname' />
        <Form.Input type='text' placeholder='Username' name='username' />
        <Form.Input type='password' placeholder='Password' name='password' />
        <Form.Input
          type='password'
          placeholder='Repeat Password'
          name='repeatPassword'
        />
        <Button type='submit' className='btn-submit'>
          Sign Up
        </Button>
      </Form>
    </>
  )
}
