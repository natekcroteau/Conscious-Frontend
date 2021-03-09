import './App.css'
import HomeContainer from "./Components/HomeComponents/HomeContainer"
import GratitudeContainer from './Components/GratitudeComponents/GratitudeContainer'
import FreewriteContainer from './Components/FreewriteComponents/FreewriteContainer'
import MyAccountHeader from './Components/AccountHeaderComponents/MyAccountHeader'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


function App() {
  return (
    <>
    <MyAccountHeader />
    <Router>
      <Switch>
        <Route exact path="/">
          <HomeContainer />
        </Route>
        <Route path="/gratitude">
          <GratitudeContainer />
        </Route>
        <Route path="/freewrite">
          <FreewriteContainer />
        </Route>
      </Switch>
      <nav><Link to="/gratitude">Daily Gratitude</Link> | <Link to="/">Home</Link> | <Link to="/freewrite">Morning Free-write</Link> </nav>
    </Router>
    </>
  );
}

export default App;
