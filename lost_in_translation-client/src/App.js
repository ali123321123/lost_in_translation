import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Translate from "./components/Translate/Translate";
import Myprofile from "./components/Myprofile/Myprofile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Translate} />
          <Route path="/Login" component={Login} />
          <Route path="/Myprofile" component={Myprofile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
