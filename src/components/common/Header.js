import React from 'react'
import { View, StatusBar, Platform } from 'react-native'
import { COLORS } from '../../constants'
import { Text } from './Text'
import { AntDesign } from '@expo/vector-icons'

const Header = (props) => {
  const { title } = props
  const {
    containerStyle,
    statusStyle,
    safeAreaStyle,
    leftIconsStyle,
    titleStyle,
    rightIconsStyle
  } = styles

  const statusBarLightStyle = Platform.OS === 'ios' ? "dark-content" : "light-content"
  return (
    <View style={containerStyle} >
      <View style={statusStyle}>
        <StatusBar barStyle={statusBarLightStyle} />
      </View>
      <View style={safeAreaStyle}>
        <View style={leftIconsStyle} />
        <View style={titleStyle}>
          <Text color={COLORS.text} size={25} weight="bold">{title}</Text>
        </View>
        <View style={rightIconsStyle}>
          <AntDesign name="pluscircle" size={30} color={COLORS.primary} />
        </View>
      </View>
    </View>
  )
}

const styles = {
  statusStyle: {
    height: 30
  },
  safeAreaStyle: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row'
  },
  leftIconsStyle: {
    width: 40
  },
  titleStyle: {
    justifyContent: 'center',
    flex: 3
  },
  rightIconsStyle: {
    alignItems: 'flex-end',
    flex: 1,
    paddingRight: 15
  }
}

export { Header }