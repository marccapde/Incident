import React from 'react'
import { View } from 'react-native'
import { Text } from './Text'
import { CircleImage } from './CircleImage'

const Card = ({children, style}) => {
  const { containerStyle, cardContainerStyle } = styles
  return (
    <View style={containerStyle}>
      <View style={cardContainerStyle}>
        {children}
      </View>
    </View>
  )
}

const CardHeader = ({title, image}) => {
  const { headerStyle, textHeaderStyle } = styles

  const defaultImage = require('../../../assets/images/profile_default.png')
  const source = image ? { uri: image } : defaultImage
  return (
    <View style={headerStyle}>
      <CircleImage
        source={source}
        placeholder={defaultImage}
        radius={15}
      />
      <View style={textHeaderStyle}>
        <Text weight="bold" size={18}>{title}</Text>
      </View>
    </View>
  )
}

const styles = {
  containerStyle: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  cardContainerStyle: {
    backgroundColor: 'white',
    borderRadius: 10,

    // ios
    shadowOffset: { height: 1 },
    shadowColor: 'black',
    shadowOpacity: 0.2,

    // android
    elevation: 3
  },
  headerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10
  },
  textHeaderStyle: {
    marginLeft: 10
  }
}

export { Card, CardHeader }