import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfile, getRepos } from "../store/index"
import css from "../App.css"

export default () => {
  const dispatch = useDispatch()
  const profileData = useSelector((appState) => appState.profile)
  const repoData = useSelector((appState) => appState.repos)
  
  useEffect(() => {
    dispatch(getProfile())
  }, [])
  return (
    <div className="container">
      {console.log(profileData)}
      {console.log(repoData)}
      <div className="navbar">
        <nav>
          <a href="#">Overview</a>
          <a href="#">Repositories</a>
          <a href="#">Projects</a>
          <a href="#">Packages</a>
        </nav>
      </div>
      <div className="sideBar">
        <div className="avatar">
          <img src={profileData.avatar_url} />
        </div>
        <h2 className="profileName">{profileData.name}</h2>
        <div className="log-in">{profileData.login}</div>
        <button className="editProfile">Edit Profile</button>
        {profileData.blog}
        <div className="profileLocation">{profileData.location}</div>
        <div className="profileEmail">{profileData.email || "Email: N/A"}</div>
      </div>
      <div className="repoContainer">
        {repoData.map((item) => (
          <div className="eachRepo">{item.name}</div>
        
          
        ))}
      </div>
    </div>
  )
}
