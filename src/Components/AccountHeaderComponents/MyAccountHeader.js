import React from 'react'
import './MyAccountHeader.css'
import MyAccount from './MyAccount'
import TitleHeader from './TitleHeader'


export default function MyAccountHeader() {
  return (
    <div className="account-header">
      <TitleHeader />
      <MyAccount />
    </div>
  )
}
