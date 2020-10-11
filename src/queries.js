import gql from 'graphql-tag'

export const GET_ROCKETS = gql`
  query getRockets {
    rockets {
      id
      name
    }
  }
`

export const GET_ROCKET = gql`
  query getRocket($id: ID!) {
    rocket(id: $id) {
      id
      name
      description
      costPerLaunch: cost_per_launch
    }
  }
`

export const GET_USERS = gql`
  query getUsers {
    users(limit: 10, order_by: { timestamp: desc }) {
      id
      name
      twitter
      rocket
    }
  }
`
