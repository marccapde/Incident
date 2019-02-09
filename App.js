import React from 'react'
import { Font, Asset } from 'expo';
import AppContainer from './src/AppContainer'
import AppLoading from './src/AppLoading'

console.disableYellowBox = true

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }
  async componentWillMount() {
    await Font.loadAsync({
      'ultra-fresh': require('./assets/fonts/UltraFresh.ttf'),
      'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
      'roboto-thin': require('./assets/fonts/Roboto-Thin.ttf')
    })

    await Asset.fromModule(require('./assets/images/profile_default.png')).downloadAsync()

    this.setState({ fontLoaded: true })
  }
  render() {
    const { fontLoaded } = this.state
    if (fontLoaded) {
      return <AppContainer />
    }
    
    return (
      <AppLoading />
    )
  }
}
