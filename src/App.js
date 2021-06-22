import AppContext from "./context/appContext";
import "./css/style.scss";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import Form from "./pages/Form";
import ProductDetail from "./pages/ProductDetail";

function App(props) {
  return (
    <AppContext>
      <div
        className="App"
        style={{ position: "relative", overflowX: "hidden" }}
      >
        <Switch>
          <Route path="/form">
            <Form />
          </Route>
          <Route
            path="/productDetail/:id"
            render={(props) => <ProductDetail {...props} />}
          />

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </AppContext>
  );
}

export default App;
