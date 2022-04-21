import logo from './logo.svg';
import './App.css';
import UserPage from "./container/UserPage";
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

function App() {
    const username = prompt("Enter GitHub username:")
  return (
      <BrowserRouter>
        <Switch>
          <Route path = "/:userName" component={UserPage} />
          {/*<Redirect to = {`/${username}`} />*/}
          <Redirect to = {`/johnpapa`} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
