import React from 'react'
import styled from 'styled-components'

const Error = props => {
  return (
    <Container>
      <Text>{props.text}</Text>
    </Container>
  )
}

const Container = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.p`
  font-size: 20px;
  color: red;
`

export default Error
