import './App.css'
import HomeContainer from "./components/HomeContainer";
import GratitudeContainer from './components/GratitudeContainer'
import FreewriteContainer from './components/FreewriteContainer'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
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
  );
}

export default App;
