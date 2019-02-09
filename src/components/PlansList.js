import React, { Component } from 'react'
import { View, SectionList, TouchableOpacity } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions'
import moment from 'moment'
import { PlanCard } from './PlanCard'
import { PlansListSectionHeader } from './PlansListSectionHeader'
import { fadeOutTransition } from '../animations/transitions'

class PlansList extends Component {
  constructor(props) {
    super(props)

    this.getSectionTitle = this.getSectionTitle.bind(this)
    this.buildSection = this.buildSection.bind(this)
    this.getSections = this.getSections.bind(this)
  }

  getSectionTitle(date) {
    console.log(date)
    if (date === moment(new Date()).startOf('day'))
      return 'Today'
    if (date === moment(new Date()).add(-1, 'days'))
      return 'Tomorrow'
    if (moment(date).isAfter(moment(new Date()).add(-7, 'days')))
      return moment(date).format('dddd')
    return date
  }

  buildSection(index, date, plan) {
    const title = this.getSectionTitle(date)
    console.log(title)

    const result = {
      title: title,
      index: index,
      data: [plan]
    }
    return result
  }

  getSections() {
    const { plans } = this.props

    let values = [], result = []
    plans.forEach(plan => {
      val = moment(plan.date).format('YYYY-MM-DD')
      const index = values.indexOf(val)
      if (index !== -1) {
        result[index].data.push(plan)
      } else {
        values.push(val)
        const section = this.buildSection(index, val, plan)
        result.push(section)
      }
    })

    return result
  }

  render() {
    const { containerStyle } = styles
    const { onItemPress } = this.props

    return (
      <View style={containerStyle}>
        <SectionList
          renderItem={({item, index, section}) => (
            <TouchableOpacity onPress={() => { onItemPress(item) }}>
              <View>
                <PlanCard plan={item} onPress={onItemPress} />
              </View>
            </TouchableOpacity>
          )}
          renderSectionHeader={({section: {title, index, data}}) => (
            <Transition inline disappear={fadeOutTransition}>
              <PlansListSectionHeader title={title} />
            </Transition>
          )}
          renderSectionFooter={() => <View style={{ height: 5 }} /> }
          sections={this.getSections()}
          keyExtractor={(item, index) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
  }
}

const sectionsMock = [
  {
    title: 'Today',
    index: 0,
    data: [
      {
        id: 0,
        title: 'Dinning at home',
        place: 'Home',
        time: '20:00',
        user: {
          image: '',
          name: 'Pablito'
        },
        assisting: true,
        assistants: []
      },
      {
        id: 1,
        title: 'University party',
        place: 'Universitat Politècnica de Catalunya',
        time: '22:00',
        user: {
          image: 'data:image/jpeg;base64,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',
          name: 'Fibernalia'
        },
        assistants: []
      }
    ]
  },
  {
    title: 'Tomorrow',
    index: 1,
    data: [
      {
        id: 2,
        title: 'Beer at Bar',
        place: 'Bar FIB',
        time: '15:00',
        user: {
          image: '',
          name: 'Jose el del bar'
        },
        assisting: false,
        assistants: [
          { id: 0, name: 'Pau', image: 'https://i1.sndcdn.com/avatars-000076077050-20v7a0-t500x500.jpg' },
          { id: 1, name: 'Pablito' },
          { id: 2, name: 'Gisela', image: 'https://media.licdn.com/dms/image/C4E03AQEhhLuu1hD2BQ/profile-displayphoto-shrink_200_200/0?e=1545868800&v=beta&t=dwDfeHvSv-WZjgaF8aaZ6EO-jNZNdKw-mA5g03uTPII' },
          { id: 3, name: 'Purus', image: 'http://premisrecercajove.cat/wp-content/uploads/2014/03/Marc_Soldevilla_Cuartiella.jpg' },
          { id: 4, name: 'Oriol', image: 'https://media.licdn.com/dms/image/C4D03AQGBw_l49nu8eg/profile-displayphoto-shrink_200_200/0?e=1549497600&v=beta&t=Ya340SKpbRlchK59IoPuWrSh4sVW9GLdwSx0fC3b5Bc' },
        ]
      },
      {
        id: 3,
        title: 'Dinning at Sushi Top',
        place: 'Sushi Top',
        time: '22:00',
        user: {
          image: 'https://media.licdn.com/dms/image/C4E03AQEhhLuu1hD2BQ/profile-displayphoto-shrink_200_200/0?e=1545868800&v=beta&t=dwDfeHvSv-WZjgaF8aaZ6EO-jNZNdKw-mA5g03uTPII',
          name: 'Gisela'
        },
        assistants: []
      },
      {
        id: 4,
        title: 'Plataformaaaaaa',
        place: 'Plataforma',
        time: '23:30',
        user: {
          image: '',
          name: 'Pau Torrents'
        },
        assistants: []
      }
    ]
  },
  {
    title: 'Mon 10',
    index: 2,
    data: [
      {
        id: 5,
        title: 'Dinning at home',
        place: 'Home',
        time: '20:00',
        user: {
          image: '',
          name: 'Pablito'
        },
        assistants: []
      },
      {
        id: 6,
        title: 'University party',
        place: 'Universitat Politècnica de Catalunya',
        time: '22:00',
        user: {
          image: '',
          name: 'Fibernalia'
        },
        assistants: []
      }
    ]
  }
]

export { PlansList }