import gql from 'graphql-tag'
export const INSERT_USER = gql`
mutation insertUser(
  $id: uuid!
  $name: String!
  $twitter: String!
  $rocket: String!
){
  insert_users(objects: {id: $id, name: $name, twitter: $twitter, rocket: $rocket}) {
    returning {
      id
      name
      rocket
      twitter
    }
  }
}
`
