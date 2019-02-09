import React from 'react'
import { View, StatusBar, TouchableOpacity } from 'react-native'
import { COLORS } from '../../constants'
import AntDesign from '@expo/vector-icons/AntDesign'
import { Text } from './Text'

const HeaderDetail = (props) => {
  const {
    containerStyle,
    statusStyle,
    safeAreaStyle,
    leftIconContainerStyle,
    backTextStyle,
    bottomStyle
  } = styles
  const { onBackPress } = props

  return (
    <View style={containerStyle}>
      <View style={statusStyle}>
        <StatusBar barStyle="light-content" />
      </View>
      <View style={safeAreaStyle}>
        <TouchableOpacity onPress={onBackPress} style={leftIconContainerStyle}>
          <AntDesign name="left" size={14} color="white" />
          <View style={backTextStyle}>
            <Text color="white" size={14} weight="bold">Back</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={bottomStyle}>
      </View>
    </View>
  )
}

const styles = {
  containerStyle: {
    backgroundColor: COLORS.primary
  },
  statusStyle: {
    height: 30
  },
  safeAreaStyle: {
    height: 50,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftIconContainerStyle: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10
  },
  backTextStyle: {
    marginLeft: 4
  },
  bottomStyle: {
    height: 30
  }
}

export { HeaderDetail }