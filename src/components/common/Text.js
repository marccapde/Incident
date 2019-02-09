import React from 'react'
import { Text as NativeText } from 'react-native'

const getFontFamily = (weight) => {
  if (typeof weight === 'undefined' || weight === null) {
    return 'roboto-light'
  }

  switch (weight) {
    case 'heavy':
      return 'roboto-bold'
    case 'bold':
      return 'roboto-regular'
    default:
      return 'roboto-light'
  }
}

const getTextStyle = ({color, size, weight}) => {
  let result = {}

  if (typeof color !== 'undefined' && color !== null) {
    result.color = color
  }

  if (typeof size !== 'undefined' && size !== null) {
    result.fontSize = size
  }

  result.fontFamily = getFontFamily(weight)

  return result
}

const Text = (props) => {
  const {
    children
  } = props

  const textStyle = getTextStyle(props)
  return (
    <NativeText style={textStyle}>
      {children}
    </NativeText>
  )
}

export { Text }