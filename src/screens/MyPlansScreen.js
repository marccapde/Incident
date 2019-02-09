import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { Transition } from 'react-navigation-fluid-transitions'
import { Header, TabbedBar, Text, Spinner } from '../components/common'
import { PlansList } from '../components'
import { SCREENS } from '../constants'
import { fetchMyPlans } from '../actions'

class MyPlansScreen extends Component {
  constructor(props) {
    super(props)

    this.renderList = this.renderList.bind(this)
  }

  componentWillMount() {
    this.props.fetchMyPlans()
  }

  renderList() {
    const { loadingContainerStyle } = styles
    const { navigation, plans, isFetching, error } = this.props

    if (isFetching) {
      return (
        <View style={loadingContainerStyle}>
          <Spinner />
        </View>
      )
    } else if (error) {
      return (
        <View>
          <Text>Error fetching plans</Text>
        </View>
      )
    } else {
      return (
        <PlansList
          plans={plans}
          onItemPress={(plan) => navigation.navigate(SCREENS.PlanDetail, { plan })} />
      )
    }
  }

  render() {
    const { containerStyle, contentStyle } = styles

    return (
      <View style={containerStyle}>
        <Transition disappear="top" inline>
          <Header title="Next Plans" />
        </Transition>
        <View style={contentStyle}>
          {this.renderList()}
        </View>
        <TabbedBar />
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1
  },
  contentStyle: {
    flex: 1
  },
  loadingContainerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const mapStateToProps = (state, ownProps) => {
  const { navigation } = ownProps
  const { plans, isFetching, error } = state.myPlans

  return {
    navigation,
    plans,
    isFetching,
    error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMyPlans: () => dispatch(fetchMyPlans())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPlansScreen)