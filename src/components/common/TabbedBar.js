import React, { Component } from 'react'
import { View } from 'react-native'
import { AntDesign, Ionicons, EvilIcons } from '@expo/vector-icons'
import { COLORS } from '../../constants'

class TabbedBar extends Component {
  render() {
    const {
      containerStyle,
      centerIconContainerStyle,
      iconContainerStyle
    } = styles

    return (
      <View style={containerStyle}>
        <View style={iconContainerStyle}>
          <Ionicons name="ios-search" size={25} color={COLORS.tabIcon} />
        </View>
        <View style={iconContainerStyle}>
          <EvilIcons name="calendar" size={35} color={COLORS.primary} />
        </View>
        <View style={centerIconContainerStyle}>
          <EvilIcons name="clock" size={40} color={COLORS.tabIcon} />
        </View>
        <View style={iconContainerStyle}>
          <AntDesign name="user" size={25} color={COLORS.tabIcon} />
        </View>
        <View style={iconContainerStyle}>
          <AntDesign name="setting" size={25} color={COLORS.tabIcon} />
        </View>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    zIndex: 200,
    flexDirection: 'row',
    backgroundColor: COLORS.background,
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
    height: 45
  },
  centerIconContainerStyle: {
    width: 75,
    height: 75,
    marginTop: -16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 50,
    backgroundColor: 'white'
  },
  iconContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}

export { TabbedBar }