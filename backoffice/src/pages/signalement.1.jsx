import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Fieldset } from 'primereact/fieldset';
import { HandiService } from '../components/HandiService';
import {InputSwitch} from 'primereact/inputswitch';
import {
  Link
} from 'react-router-dom';



export default class Signalement extends Component {
  constructor() {
    super();
    this.state = {
   
    };
    this.handiservice = new HandiService();
  }


  componentDidMount() {
    this.handiservice.getJson().then(datas => this.setState({ users: datas.docs }));

  }

  actionTemplate(rowData, column) {
    return <div>
      <Button type="button" icon="pi pi-search" className="p-button-success" style={{ marginRight: '.5em' }}></Button>

    <Link to={'/newusager/'}><Button type="button" icon="pi pi-pencil" className="p-button-warning" style={{ marginRight: '.5em' }}></Button></Link>
      <Button type="button" icon="pi pi-times" className="p-button-danger"></Button>
    </div>;
  }

  actionValid(rowData, column) {
    return <div>

<InputSwitch onLabel="Yes" />
    </div>;
  }

  render() {

    return (

  

      <React.Fragment>
        <div className="content-section introduction">
            <div className="feature-intro">
              <h1>Demande d'une place de stationnement </h1>
              <p>Une place de stationnement pour personne handicapée ou à mobilité réduite est une place de stationnement répondant à des caractéristiques techniques facilitant l’accessibilité de la voirie et des espaces publics à toute personne en situation de handicap.

Vous êtes en situation de handicap et aucune place de stationnement spécifique n’est prévue à proximité de votre domicile ? Nous vous indiquons la démarche à effectuer pour demander la création d’une place de stationnement au maire de votre commune.</p>
            </div>
          </div>

          <div className="content-section implementation">
            <TabView>
              <TabPanel header="Emplacements Signalés">
                <div>
                  <Fieldset legend="En cours">
                    <p> </p>

                    <DataTable value={this.state.users}>
                    <Column field="NUM" header="N° " />
                      <Column field="NOM_VOIE" header="Adresse " />
                   
                      <Column field="NB_PLACE" header="Thematique" />
                      <Column field="CONFORMITE" header="Conformité" />
                      <Column body={this.actionTemplate} style={{ textAlign: 'center', width: '12em' }}  header="action" />
                      <Column body={this.actionValid} style={{ textAlign: 'center', width: '5em' }}  header="actif"/>
                    </DataTable>

                  </Fieldset>
                </div>
              </TabPanel>


              <TabPanel header="Emplacements Validés">
                <div>
                  <Fieldset legend="En cours">
                  </Fieldset>
                </div>
              </TabPanel>


              <TabPanel header="Signalement > 6 mois">
                <div>
                  <Fieldset legend="En cours">
            
                  </Fieldset>
                </div>
              </TabPanel>
      
              <TabPanel header="Demandes Refusées">
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






