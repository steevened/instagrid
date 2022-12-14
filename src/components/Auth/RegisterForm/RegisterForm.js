import React from 'react'
import './RegisterForm.scss'
import { Form, Button } from 'semantic-ui-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useMutation } from '@apollo/client'
import { REGISTER } from '../../../gql/User'
import { toast } from 'react-toastify'

export const RegisterForm = ({ setShowLogin }) => {
  const [register] = useMutation(REGISTER)

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Email is required'),
      userName: Yup.string()
        .matches(/^[a-zA-Z0-9-]*$/, 'No spaces')
        .required('userName required'),
      name: Yup.string().required('Full name required'),
      password: Yup.string()
        .required('Password required')
        .oneOf([Yup.ref('repeatPassword')], 'Passwords are not the same'),
      repeatPassword: Yup.string()
        .required('Password required')
        .oneOf([Yup.ref('password')], 'Passwords are not the same'),
    }),
    onSubmit: async (formData) => {
      try {
        const newUser = formData
        delete newUser.repeatPassword
        await register({
          variables: {
            input: newUser,
          },
        })
        toast.success('user registered succesfully')
        setShowLogin(true)
      } catch (error) {
        toast.error(error.message)
        console.log(error)
      }
    },
  })

  return (
    <>
      <h2 className='register-form-title'>
        Sign up to see photos and videos from your friends.
      </h2>
      <Form className='register-form' onSubmit={formik.handleSubmit}>
        <Form.Input
          onChange={formik.handleChange}
          type='text'
          placeholder='Email'
          name='email'
          value={formik.values.email}
          error={formik.errors.email && true}
        />
        <Form.Input
          type='text'
          placeholder='name'
          name='name'
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.errors.name && true}
        />
        <Form.Input
          type='text'
          placeholder='userName'
          name='userName'
          onChange={formik.handleChange}
          value={formik.values.userName}
          error={formik.errors.userName && true}
        />
        <Form.Input
          type='password'
          placeholder='Password'
          name='password'
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password && true}
        />
        <Form.Input
          type='password'
          placeholder='Repeat Password'
          name='repeatPassword'
          onChange={formik.handleChange}
          value={formik.values.repeatPassword}
          error={formik.errors.repeatPassword && true}
        />
        <Button type='submit' className='btn-submit'>
          Sign Up
        </Button>
        <Button onClick={formik.handleReset} type='button'>
          reset
        </Button>
      </Form>
    </>
  )
}

function initialValues() {
  return {
    email: '',
    name: '',
    userName: '',
    password: '',
    repeatPassword: '',
  }
}
