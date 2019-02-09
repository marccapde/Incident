import React from 'react'
import { View } from 'react-native'
import { LinearGradient } from 'expo'
import { Text } from './common'

const PlansListSectionHeader = ({ title }) => {
  const { containerStyle, transparencyStyle, textStyle } = styles

  return (
    <View style={containerStyle}>
      <View style={textStyle}>
        <Text size={16} weight="heavy">{title.toUpperCase()}</Text>
      </View>
      <LinearGradient
        style={transparencyStyle}
        colors={["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0)"]}
      />
    </View>
  )
}

const styles = {
  containerStyle: {
  },
  textStyle: {
    paddingTop: 10,
    paddingLeft: 10,
    backgroundColor: 'white'
  },
  transparencyStyle: {
    height: 10
  }
}

export { PlansListSectionHeader }