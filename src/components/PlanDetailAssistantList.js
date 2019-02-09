import React from 'react'
import { ScrollView, View } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'
import { PlanDetailAssistant } from './PlanDetailAssistant'
import { Text, Badge } from '../components/common'

const ListEmpty = () => {
  const { assistantsEmptyStyle } = styles

  return (
    <View style={assistantsEmptyStyle}>
      <Text>There are no assistants yet to this plan</Text>
    </View>
  )
}

const PlanDetailAssistantList = (props) => {
  const {
    contentStyle,
    assistantsTitleStyle,
    assistantsNumberStyle
  } = styles
  const { assistants } = props

  return (
    <ScrollView style={contentStyle}>
      <Transition appear="top" delay inline>
        <View style={assistantsTitleStyle}>
          <Text size={16} weight="heavy">ASSISTANTS</Text>
          {(assistants && assistants.length > 0)
            ? <Badge style={assistantsNumberStyle} text={assistants.length} />
            : null}
        </View>
      </Transition>

      {assistants.length > 0 && assistants.map((assistant, index) => {
        return (
          <Transition key={assistant.id} inline appear="top" delay>
            <PlanDetailAssistant assistant={assistant} />
          </Transition>
        )
      })}
      {assistants.length === 0 &&
        <Transition appear="top" delay inline>
          <ListEmpty />
        </Transition>
      }
    </ScrollView>
  )
}

const styles = {
  contentStyle: {
    flex: 1
  },
  assistantsTitleStyle: {
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center'
  },
  assistantsNumberStyle: {
    marginLeft: 10
  }
}

export { PlanDetailAssistantList }