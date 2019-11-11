import React, { Component } from 'react'
import Home from "./component/Home"
import Navbarmenu from "./component/Navbarmenu"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FindCar from './component/FindCar';
import RentCar from "./component/RentCar"
import Channels from "./component/Channels"
import Dealer from "./component/Dealer"
import MachanicShop from "./component/MachanicShop"
export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route path="/" exact >
          <Home />
        </Route>
        <Route path="/Home"  >
          <Home />
        </Route>
        <Route path="/FindCar" >
          <FindCar />
        </Route>
        <Route path="/RentCar" >
          <RentCar />
        </Route>
        <Route path="/Dealer" >
          <Dealer />
        </Route>
        </Switch>
      </Router>
    )
  }
}
