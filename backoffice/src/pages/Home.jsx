import React, { Component } from 'react';
import '../App.scss';
import NavPanel from '../components/navpanel';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';


export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const header = (
      <img alt="Card" src='showcase/resources/demo/images/usercard.png'/>
  );
  const footer = (
      <span>
          <Button label="Save" icon="pi pi-check"/>
          <Button label="Cancel" icon="pi pi-times" className="p-button-secondary"/>
      </span>
  );
    return (

      <React.Fragment>
 <NavPanel />
 <div className="content-section implementation">
                    <Card title="Simple Card" style={{width: '360px'}}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
                    </Card>

                    <br/><br/>

                    <Card title="Advanced Card" subTitle="Subtitle" style={{width: '360px'}} className="ui-card-shadow" footer={footer} header={header}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
                    </Card>
                </div>

 
         </React.Fragment>

    );
  }
}