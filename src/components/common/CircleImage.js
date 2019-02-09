import React from 'react'
import { View, Image } from 'react-native'

const CircleImage = ({source, placeholder, radius}) => {
  const { containerStyle } = styles

  const finalContainerStyle = {
    ...containerStyle,
    width: radius * 2 + 1,
    height: radius * 2 + 1,
    borderRadius: radius
  }
  const imageStyle = {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius
  }
  return (
    <View style={finalContainerStyle}>
      <Image style={imageStyle} source={source} loadingIndicatorSource={placeholder} />
    </View>
  )
}

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  }
}

export { CircleImage }