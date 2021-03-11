import React from 'react'
import Image from './Image'
import Title from './Title'
import AccountModal from './AccountModal'
import './HeaderContainer.css'


export default function Header(props) {

  const { userInformation, username, userID } = props

  return (
    <div className="header-container">
      <Image />
      <Title userID={userID} username={username} userInformation={userInformation} />
      <AccountModal userID={userID} username={username} userInformation={userInformation}/>
    </div>
  )
}
