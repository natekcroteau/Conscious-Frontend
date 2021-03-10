import { useState } from 'react'
import './App.css'
import HomeContainer from "./Components/HomeComponents/HomeContainer"
import GratitudeContainer from './Components/GratitudeComponents/GratitudeContainer'
import FreewriteContainer from './Components/FreewriteComponents/FreewriteContainer'
import MyAccountHeader from './Components/AccountHeaderComponents/MyAccountHeader'
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {

let [userID, setUserID] = useState('')
let [username, setUsername] = useState('')

const userInformation = (id, currentUsername) => {
  setUserID(userID = id)
  setUsername(username = currentUsername)
}

const displayGratitude = () => {
  if(localStorage.getItem('token')){
    return <GratitudeContainer userID={userID} username={username}/>
  }else{
    return <h2>You must be logged in to view this content</h2>
  }
}

const displayFreewrite = () => {
  if(localStorage.getItem('token')){
    return <FreewriteContainer userID={userID} username={username}/>
  }else{
    return <h2>You must be logged in to view this content</h2>
  }
}

  return (
    <>
    <MyAccountHeader userInformation={userInformation}/>
    <Router>
    <nav className="nav" ><Link className="link" to="/">Home</Link> | <Link className="link" to="/gratitude">Daily Gratitude</Link> | <Link className="link" to="/freewrite">Morning Free-write</Link> </nav>
      <Switch>
        <Route exact path="/">
          <HomeContainer />
        </Route>
        <Route path="/gratitude">
          {displayGratitude}
        </Route>
        <Route path="/freewrite">
          {displayFreewrite}
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
