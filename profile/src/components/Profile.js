import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../store/index'

export default () => {
  const dispatch = useDispatch()
  const profileData = useSelector((appState) => appState.profile)
  useEffect(() => {
    dispatch(getProfile())
  }, [])
  return <div>{profileData.name}</div>
}
