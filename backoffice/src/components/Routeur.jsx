import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

export default class Routeur extends Component {
  render() {
    return (
        <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/league/:id" component={League} />
        <Route path="/bet/:id" component={Bet} />
        <Route path="/contact" component={Contact} /> */}
      </Switch>
    )
  }
}