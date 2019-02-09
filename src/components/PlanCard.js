import React, { Component } from 'react'
import { View } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'
import { AntDesign } from '@expo/vector-icons'
import { Card, CardHeader, Text } from './common'
import { scaleAndFadeOutTransition } from '../animations/transitions'

const Section = ({icon, color, text, bold}) => {
  const {
    rowStyle,
    iconStyle,
    descriptionStyle
  } = styles

  return (
    <View style={rowStyle}>
      <AntDesign style={iconStyle} name={icon} size={18} color={color} />
      <View style={descriptionStyle}>
        <Text size={16} color={color} weight={bold ? 'bold' : null}>{text}</Text>
      </View>
    </View>
  )
}

class PlanCard extends Component {
  constructor(props) {
    super(props)

    this.renderAssist = this.renderAssist.bind(this)
  }

  renderAssist() {
    const { plan: { assisting } } = this.props

    if (typeof assisting !== 'undefined' && assisting !== null) {
      if (assisting) {
        return <Section color="#33aa33" text="Assisting" icon="check" bold />
      } else {
        return <Section color="#ff0000" text="Not assisting" icon="close" bold />
      }
    }
  }

  render() {
    const {
      contentStyle,
      columnStyle
    } = styles

    const {
      plan
    } = this.props

    const { title, place, time, user } = plan
  
    return (
      <Transition shared={`shared_plan_${plan.id}`} inline disappear={scaleAndFadeOutTransition}>
        <Card>
          <CardHeader title={title} image={user.image} />
          <View style={contentStyle}>
            <View style={columnStyle}>
              <Section icon="tago" text={place} />
              <Section icon="clockcircleo" text={time} />
            </View>
            <View style={columnStyle}>
              <Section icon="user" text={user.name} />
              {this.renderAssist()}
            </View>
          </View>
        </Card>
      </Transition>
    )
  }
}

styles = {
  contentStyle: {
    marginLeft: 14,
    marginRight: 14,
    flexDirection: 'row'
  },
  columnStyle: {
    flex: 1
  },
  rowStyle: {
    marginBottom: 10,
    flexDirection: 'row'
  },
  iconStyle: {
    flex: 1
  },
  descriptionStyle: {
    flex: 5
  }
}

export { PlanCard }