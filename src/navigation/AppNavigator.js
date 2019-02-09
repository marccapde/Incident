import React from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createFluidNavigator } from 'react-navigation-fluid-transitions'
import { SCREENS } from '../constants'

import MyPlansScreen from '../screens/MyPlansScreen'
import PlanDetailScreen from '../screens/PlanDetailScreen'

const containerStyle = { flex: 1 }

const MyPlans = ({ navigation }) =>
  (<View style={containerStyle}><MyPlansScreen navigation={navigation} /></View>)
const PlanDetail = ({ navigation }) =>
  (<View style={containerStyle}><PlanDetailScreen navigation={navigation} /></View>)

const AppNavigator = createFluidNavigator(
  {
    [SCREENS.MyPlans]: {
      screen: MyPlans
    },
    [SCREENS.PlanDetail]: {
      screen: PlanDetail
    }
  },
  {
    initialRouteName: SCREENS.MyPlans,
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: true
    },
    transitionConfig: {
      duration: 1000
    }
  }
)

export { AppNavigator }