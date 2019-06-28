import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Fieldset } from 'primereact/fieldset';
import axios from 'axios';

import { HandiService } from '../components/HandiService';
import {InputSwitch} from 'primereact/inputswitch';
import {
  Link
} from 'react-router-dom';
import { NewParking } from '../components/contents/parking/NewParking';



export default class Signalement extends Component {
  constructor() {
    super();
    this.state = {
   users:[]
    };
    this.handiservice = new HandiService();
  }


  componentDidMount() {
   // this.handiservice.getPlaces().then(datas => this.setState({ users: datas }));
    // this.handiservice.getPlaces();
    this.getPlaces();

  }

  getPlaces() {
    axios
    .get('http://127.0.0.1:3000/api/v1/places')

    .then(response => {
      console.log(response);
      this.setState({
        users:response.data.places
      });
      
    })
    .catch(error => this.setState({ error }));
  }



  actionTemplate(rowData, column) {
    return <div>
      <Button type="button" icon="pi pi-envelope" className="p-button-success" style={{ marginRight: '.5em' }}></Button>

    <Link to={'/newusager/'}><Button type="button" icon="pi pi-pencil" className="p-button-warning" style={{ marginRight: '.5em' }}></Button></Link>
      <Button type="button" icon="pi pi-times" className="p-button-danger"></Button>
    </div>;
  }



  render() {
    console.log(this.state.users);
    return (

  

      <React.Fragment>

          <div className="content-section introduction">
            <div className="feature-intro">
              <h1>Liste des signalements</h1>
              <p></p>
            </div>
          </div>

          <div className="content-section implementation">
            <TabView>
              <TabPanel header="Liste des signalements">
                <div>
                  <Fieldset legend="">
                    <p> </p>

                    <DataTable value={this.state.users}>
                    <Column field="id" header="N° " />
                      <Column field="streetName" header="Adresse " />
                      <Column field="postalCode" header="Code postal " />
                      <Column field="city" header="Ville" />
                      <Column field="numberOfPlaces" header="Nbre Places" />
                      <Column body={this.actionTemplate} style={{ textAlign: 'center', width: '12em' }}  header="action" />
               
                    </DataTable>

                  </Fieldset>
                </div>
              </TabPanel>





              <TabPanel header="Signalements Validés">
                <div>
                  <Fieldset legend="En cours">
                  </Fieldset>
                </div>
              </TabPanel>


              <TabPanel header="Signalements en cours">
                <div>
                  <Fieldset legend="En cours">
            
                  </Fieldset>
                </div>
              </TabPanel>
      
              <TabPanel header="Signalements Refusés">
                <div>
                <Fieldset legend="En cours">
                 </Fieldset>
                </div>
              </TabPanel>
      
              <TabPanel header="Signalements Archivés">
                <div>
                <Fieldset legend="En cours">
                 </Fieldset>
                </div>
              </TabPanel>

            </TabView>
          </div>
          </React.Fragment>
    );
  }
}






