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
export default class Partenaire extends Component {
  constructor() {
    super();
    this.state = {
   
    };
    this.handiservice = new HandiService();
  }

  componentDidMount() {
    this.handiservice.getd().then(
      (data) => {
        console.log('okkrrrrrrrrrrrrkkkkkkkkkkkkkkk'.data)
        this.setState({ users: data })
console.log('okkkkkkkkkkkkkkkkkkkkkkk'.data)
      });

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
              <h1>Les Coiffeurs</h1>
              <p>Mise en place d'un texte de présentation...</p>
            </div>
          </div>

          <div className="content-section implementation">
            <TabView>
              <TabPanel header="Derniers Inscrits">
                <div>
                  <Fieldset legend="En cours">
                    <p>Fiche Update coiffeur, Lien vers Particpants, </p>

                    <DataTable value={this.state.users}>
                      <Column field="IDENT_NCA" header="Nom Prenom" />
                      <Column field="firstName" header="Administration" />
                      <Column field="email" header="mail" />
                      <Column field="suivi" header="ville" />
                      <Column body={this.actionTemplate} style={{ textAlign: 'center', width: '12em' }}  header="action" />
                      <Column body={this.actionValid} style={{ textAlign: 'center', width: '5em' }}  header="actif"/>
                    </DataTable>

                  </Fieldset>
                </div>
              </TabPanel>


              <TabPanel header="attente de validation">
                <div>
                  <Fieldset legend="En cours">
                  </Fieldset>
                </div>
              </TabPanel>

              <TabPanel header="Coiffeurs bannis">
                <div>
                  <Fieldset legend="En cours">
                  </Fieldset>
                </div>
              </TabPanel>
              <TabPanel header="Ajouter">
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






