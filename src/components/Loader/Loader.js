import React from 'react'
import Loader from 'react-loader-spinner'

const LoaderComponent = (props) => {
  return (
    <Loader
      type={props.type || 'Triangle'}
      color={props.color || '#EC1D97'}
      height={props.size || 100}
      width={props.size || 100}
    />
  )
}

export default LoaderComponent
