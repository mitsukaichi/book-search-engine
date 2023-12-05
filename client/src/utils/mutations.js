import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($bookToSave: Input!, $username: String!) {
        saveBook(bookToSave: $bookToSave, username: $username) {
            _id
            username
            savedBooks{
                bookId
                description
                image
                link
                title
                authors
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!, $username: String!) {
        removeBook(bookId: $bookId, username: $username) {
            _id
            username
            savedBooks{
                bookId
                description
                image
                link
                title
                authors
            }
        }
    }
`
