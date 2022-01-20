import react from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Whitepaper from './Pages/Whitepaper/Whitepaper';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path='/home/:id' element={<Home />} />
          <Route path="/whitepaper">
            <Whitepaper />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
