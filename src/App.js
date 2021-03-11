import { useState } from 'react'
import './App.css'
import 'antd/dist/antd.css';
import HeaderContainer from './Components/HeaderComponents/HeaderContainer'
import { Divider } from 'antd'



function App() {

let [userID, setUserID] = useState('')
let [username, setUsername] = useState('')

const userInformation = (id, currentUsername) => {
  setUserID(userID = id)
  setUsername(username = currentUsername)
}

  return (
    <div>
    <HeaderContainer userID={userID} username={username} userInformation={userInformation}/>
    <Divider />
    </div>
  );
}

export default App;
