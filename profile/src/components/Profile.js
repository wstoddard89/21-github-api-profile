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
          <a href="#"><i class="fal fa-book-open"></i> Overview</a>
          <a href="#"><i class="far fa-bookmark"></i> Repositories <span className="repoTotal">{repoData.length}</span></a>
          <a href="#"><i class="fal fa-chart-bar"></i> Projects</a>
          <a href="#"><i class="fal fa-cube"></i> Packages</a>
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
        <div className="profileLocation"><i class="far fa-map-marker-alt"></i> {profileData.location}</div>
        <div className="profileEmail"><i class="far fa-envelope"></i> {profileData.email || "Email: N/A"}</div>
        <div className="profileHtml">{profileData.html_url}</div>
      </div>
      <div className="repoContainer">
        <div className="repoInput">
          <input placeholder="Find a repository..."></input>
          <button className="typeBtn">Type: All <i class="fas fa-caret-down"></i></button>
          <button className="languageBtn">Language: All <i class="fas fa-caret-down"></i></button>
          <button className="newBtn"><i class="far fa-bookmark"></i> New</button>
        </div>
        {repoData.map((item) => (
          <div className="eachRepo">
            <a href={item.html_url}>{item.name} </a>
            <button className="starBtn"><i class="far fa-star"></i>Star</button>
        <div className="forkedFrom">Forked from: {item.forks_url}</div>
            {/* {item.updated_at} */}
            <div className="bottomRepo">
              <span>{item.language}</span>
              {/* i class="fas fa-code-branch" */}
              <span><i class="far fa-code-branch"></i>{item.forks_count}</span>
              <span>Updated {item.updated_at}</span>
            </div>
          </div>
        
          
        ))}
      </div>
    </div>
  )
}
