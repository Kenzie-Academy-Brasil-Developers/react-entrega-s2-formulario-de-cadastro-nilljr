import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Button } from "@material-ui/core";
import Form from "./components/Form";
import Logged from "./components/Logged";
import Card from "./components/Card";

function App() {
  const history = useHistory();
  const [user, setUser] = useState({});
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <h1>Kenzie's Page</h1>
          <p>Welcome, feel free to register.</p>
          <Button
            color="primary"
            variant="contained"
            onClick={() => history.push("/form")}
          >
            Register
          </Button>
        </Route>
        <Route exact path="/form">
          <Form user={user} setUser={setUser} />
        </Route>
        <Route exact path="/loggedin">
          <Logged user={user} />
        </Route>
        <Route exact path="/loggedin/:id">
          <Card user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
