import HomePage from "./views/HomePage";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import MenPage from "./views/MenPage";
import WomenPage from "./views/WomenPage";
import ProductDetail from "./views/ProductDetail";
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
          <Route path="/women" exact>
            <WomenPage />
          </Route>
          <Route path="/product-detail" exact>
            <ProductDetail />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
