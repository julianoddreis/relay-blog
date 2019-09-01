import React from 'react'
import { QueryRenderer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import styled from 'styled-components'

import environment from '../../environment'
import { Loader, Error } from '../../components'

const query = graphql`
  query UsersQuery {
    users {
      id
      firstname
      age
    }
  }
`

const Users = props => {
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <Error text='Erro!' />
        }
        if (!props) {
          return <Loader />
        }
        return props.users.map(user => (
          <UserCard key={user.id}>
            <p>{user.firstname}</p>
            <p>{user.age}</p>
          </UserCard>
        ))
      }}
    />
  )
}

const UserCard = styled.div`
  border: 1px solid #EC1D97;
  margin: 10px;
`

export default Users
