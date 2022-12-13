import React, { useState } from 'react'
import './Auth.scss'
import { Container, Image } from 'semantic-ui-react'
import instaclone from '../../assets/png/instaclone.png'
import { RegisterForm } from '../../components/Auth/RegisterForm/RegisterForm'

const Auth = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <Container fluid className='auth'>
      <Image src={instaclone} />
      <div className='container-form'>
        {showLogin ? (
          <p>Login form</p>
        ) : (
          <RegisterForm setShowLogin={setShowLogin} />
        )}
      </div>
      <div className='change-form'>
        <p>
          {showLogin ? (
            <>
              Don't have an account?
              <span onClick={() => setShowLogin(!showLogin)}>Register</span>
            </>
          ) : (
            <>
              Have an account?
              <span onClick={() => setShowLogin(!showLogin)}>Log in</span>
            </>
          )}
        </p>
      </div>
    </Container>
  )
}

export default Auth
