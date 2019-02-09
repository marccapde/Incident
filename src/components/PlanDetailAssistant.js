import React from 'react'
import { View } from 'react-native'
import { Text, CircleImage } from './common'

const PlanDetailAssistant = ({ assistant }) => {
  const { containerStyle, assistantNameStyle } = styles

  const defaultImage = require('../../assets/images/profile_default.png')
  const image = assistant.image ? { uri: assistant.image } : defaultImage

  return (
    <View style={containerStyle}>
      <CircleImage
        source={image}
        placeholder={defaultImage}
        radius={16}
      />
      <View style={assistantNameStyle}>
        <Text>{assistant.name}</Text>
      </View>
    </View>
  )
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 7,
    paddingBottom: 7
  },
  assistantNameStyle: {
    marginLeft: 15
  }
}

export { PlanDetailAssistant }