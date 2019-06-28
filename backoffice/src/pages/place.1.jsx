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



export default class Correspondant extends Component {
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
              <h1>Places pour handicapés ayants droit : Comment créer ses zones de stationnement ?</h1>
              <p>La largeur minimale de la place de stationnement doit être de 3,3m. Nouveau L'arrêté du 20 avril 2017 impose une longueur minimale de 5m. La pente devra être inférieure à 2% La place devra respecter un espace horizontal au dévers près, inférieur ou égal à 2%</p>
            </div>
          </div>

          <div className="content-section implementation">
            <TabView>
              <TabPanel header="Liste des places existantes">
                <div>
                  <Fieldset legend="En cours">
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


              <TabPanel header="Ajouter un emplacement GIG-GIC">
                <div>
                  <Fieldset legend="Remplir les champs">
<NewParking />
                  </Fieldset>
                </div>
              </TabPanel>

              <TabPanel header="Modifier emplacement GIG-GIC">
                <div>
                  <Fieldset legend="Ajouter">
<NewParking />
                  </Fieldset>
                </div>
              </TabPanel>
    


            </TabView>
          </div>
          </React.Fragment>
    );
  }
}






