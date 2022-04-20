import logo from './logo.svg';
import './App.css';
import UserPage from "./container/UserPage";
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path = "/:userName" component={UserPage} />
          <Redirect to = '/bradtraversy' />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
