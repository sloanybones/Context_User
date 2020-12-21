import logo from './logo.svg';
import './App.css';
import { Container, } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";
import UserProfile from "./components/UserProfile";
function App() {
  return (
    <>
  
    <Container>
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route
          exact
          path="/users/profile"
          render={() => <UserProfile />}
        />
      </Switch>
    </Container>
  </>
  );
}

export default App;
