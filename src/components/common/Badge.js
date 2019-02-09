import React from 'react'
import { View } from 'react-native'
import { Text } from './Text'
import { COLORS } from '../../constants';

const Badge = ({ text, style }) => {
  const { containerStyle } = styles

  return (
    <View style={[containerStyle, style]}>
      <Text size={11} color="white" weight="heavy">{text}</Text>
    </View>
  )
}

const styles = {
  containerStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 4,
    paddingBottom: 4,
    backgroundColor: COLORS.primary,
    borderRadius: 10
  }
}

export { Badge }