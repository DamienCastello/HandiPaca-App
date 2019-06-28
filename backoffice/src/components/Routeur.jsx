import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Api from '../pages/api';
import Ficheconfig from '../pages/configuration';
import Signalement from '../pages/signalement';
import Place from '../pages/place';
import Correspondant from '../pages/correspondant';
import Partenaire from '../pages/partenaire';


export default class Routeur extends Component {
  render() {
    return (
        <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/league/:id" component={League} />
        <Route path="/bet/:id" component={Bet} />
        <Route path="/contact" component={Contact} /> */}

<Route exact path='/' component={Home} />
        <Route  exact path='/' component={Home} />
        <Route  exact path='/signalement' component={Signalement} />
        <Route  exact path='/place' component={Place} />
        <Route exact path='/correspondant' component={Correspondant} />
        <Route exact path='/partenaire' component={Partenaire} />

        <Route  exact path='/api' component={Api} />
        <Route  exact path='/configuration' component={Ficheconfig} />



      </Switch>
    )
  }
}