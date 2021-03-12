import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import GratitudeContainer from '../GratitudeComponents/GratitudeContainer'
import FreewriteContainer from '../FreewriteComponents/FreewriteContainer'
import PrivelagedContent from '../HomeComponents/PrivelagedContent'
import './NavBar.css'
import { Divider } from 'antd'
import Story from '../StoryComponents/Story'
import HomeContainer from '../HomeComponents/HomeContainer'


export default function NavBar(props) {

  const { username, userID } = props

  const displayGratitude = () => {
    if(localStorage.getItem('token')){
      return <GratitudeContainer userID={userID} username={username}/>
    }else{
      return <PrivelagedContent />
    }
  }
  
  const displayFreewrite = () => {
    if(localStorage.getItem('token')){
      return <FreewriteContainer userID={userID} username={username}/>
    }else{
      return <PrivelagedContent />
    }
  }


  return (
    <div className="nav-container">
      <Router>
      <nav className="nav" ><Link className="link" to="/">Home</Link> | <Link className="link" to="/gratitude">Daily Gratitude</Link> | <Link className="link" to="/freewrite">Morning Free-write</Link> | <Link className="link" to="/goldenBuddha">Story of the Golden Buddha</Link></nav>
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
          <Route path="/goldenBuddha">
            <Story />
          </Route>
        </Switch>
      </Router>
      <Divider />
    </div>
  )
}
