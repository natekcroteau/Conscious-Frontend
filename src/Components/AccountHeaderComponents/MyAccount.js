import React, {useState } from 'react'
import './MyAccount.css'

export default function MyAccount() {

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
}



  return (
    <>
      <form className="my-account-form">
        <label>Username</label>
        <input type="text" name="username" value={username} onChange={handleUsername} ></input>
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={handlePassword} ></input>
        <button onClick={login}>Login</button>
        <button onClick={signUp}>Sign Up</button>
      </form>
    </>
  )
}
