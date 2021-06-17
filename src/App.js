import AppContext from "./context/appContext";
import "./css/style.scss";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import Form from "./pages/Form";

function App() {
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </AppContext>
  );
}

export default App;
