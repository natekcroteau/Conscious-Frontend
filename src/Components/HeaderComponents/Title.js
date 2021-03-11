import React from 'react'
import NavBar from './NavBar'
import './Title.css'

export default function Title(props) {

  const { userInformation, username, userID } = props

  return (
    <div className="title-div">
      <h1>CONSCIOUS</h1>
      <NavBar userID={userID} username={username} userInformation={userInformation} />
    </div>
  )
}
