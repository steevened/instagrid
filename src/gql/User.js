import { gql } from '@apollo/client'

export const REGISTER = gql`
  mutation register($input: UserInput) {
    register(input: $input) {
      id
      name
      userName
      email
      password
    }
  }
`
