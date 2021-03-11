import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import HomeContainer from "../HomeComponents/HomeContainer"
import GratitudeContainer from '../GratitudeComponents/GratitudeContainer'
import FreewriteContainer from '../FreewriteComponents/FreewriteContainer'
import './NavBar.css'



export default function NavBar(props) {

  const { username, userID } = props

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
    <div className="nav-container">
      <Router>
      <nav className="nav" ><Link className="link" to="/gratitude">Daily Gratitude</Link> | <Link className="link" to="/">Home</Link> | <Link className="link" to="/freewrite">Morning Free-write</Link> </nav>
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
    </div>
  )
}
