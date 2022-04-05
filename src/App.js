import "./App.css";
import HomePage from "./HomePage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MenPage from "./MenPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/men" exact>
            <MenPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
