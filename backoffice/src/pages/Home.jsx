import React, { Component } from 'react';
import '../App.scss';
import NavPanel from '../components/navpanel';



export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (

      <React.Fragment>
 <NavPanel />
     

      </React.Fragment>

    );
  }
}