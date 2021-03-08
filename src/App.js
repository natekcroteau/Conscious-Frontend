import './App.css'
import HomeContainer from "./components/HomeContainer";
import { Button } from 'antd'



function App() {
  return (
    <div className="App">
      <HomeContainer />
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
