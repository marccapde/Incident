import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Transition } from 'react-navigation-fluid-transitions'
import { PlanCard, PlanDetailAssistantList } from '../components'
import { HeaderDetail, TabbedBar } from '../components/common'

class PlanDetailScreen extends Component {
  render() {
    const {
      containerStyle,
      cardContainerStyle,
    } = styles
    const { navigation } = this.props
    const plan = navigation.getParam('plan', null)

    return (
      <View style={containerStyle}>
        <Transition appear="top" inline>
          <HeaderDetail onBackPress={() => navigation.goBack()} />
        </Transition>
        <View style={cardContainerStyle}>
          <PlanCard plan={plan} />
        </View>
        <PlanDetailAssistantList assistants={plan.assistants} />
        <TabbedBar />
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1
  },
  cardContainerStyle: {
    zIndex: 100,
    marginTop: -40,
    marginBottom: -50
  },
  assistantsEmptyStyle: {
    marginLeft: 10,
    marginTop: 10
  }
}

const mapStateToProps = (state, ownProps) => {
  const { navigation } = ownProps

  return {
    navigation
  }
}

export default connect(mapStateToProps)(PlanDetailScreen)