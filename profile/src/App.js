import React from 'react'
import { useSelector, Provider } from 'react-redux'
import store from './store'
import Profile from './components/Profile'


export default function SimpleStoreDispatch() {
  return (
    <Provider store={store}>
      <Profile />
    </Provider>
  )
}
