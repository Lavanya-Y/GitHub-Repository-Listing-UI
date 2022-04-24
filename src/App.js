import logo from './logo.svg';
import './App.css';
import UserPage from "./container/UserPage";
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import React, {useEffect, useState} from "react";

function App() {

    // const [username, setUsername] = useState("")
    // useEffect(() => {
    //     const userInput = prompt("Enter GitHub username:")
    //     setUsername(userInput);
    // },[])
    // const username = prompt("Enter GitHub username:")
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
