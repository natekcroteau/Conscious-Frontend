import React, {useState } from 'react'
import './MyAccount.css'
import { Button } from 'antd'

export default function MyAccount(props) {

const { closeModal } = props

let [username, setUsername] = useState('')
let [password, setPassword] = useState('')


const handleUsername = (event) => {
  setUsername(username = event.target.value)
}

const handlePassword = (event) => {
  setPassword(password = event.target.value)
}

const login = () => {
  fetch('http://localhost:3000/login', {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
  .then(closeModal())
}

const signUp = () => {
  fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      "user":{
      "username": username,
      "password": password
      }
    })
  })
  .then(closeModal())
}



  return (
    <>
      <form className="my-account-form">
        <label>Username</label>
        <input className="account-form" type="text" name="username" value={username} onChange={handleUsername} ></input>
        <label>Password</label>
        <input className="account-form" type="password" name="password" value={password} onChange={handlePassword} ></input>
        <Button type="primary" onClick={login}>Login</Button>
        <Button type="primary" onClick={signUp}>Sign Up</Button>
      </form>
    </>
  )
}
