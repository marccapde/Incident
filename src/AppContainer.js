import React from 'react'
import { Provider } from 'react-redux'
import { AppNavigator } from './navigation'
import { store } from './store'

const AppContainer = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}

export default AppContainer