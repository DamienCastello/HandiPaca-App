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



export default class Correspondant extends Component {
  constructor() {
    super();
    this.state = {
   
    };
    this.handiservice = new HandiService();
  }


  componentDidMount() {
    this.handiservice.getAdmin().then(data => this.setState({ users: data.datasets}));

  }

  actionTemplate(rowData, column) {
    return <div>
       <Button type="button" icon="pi pi-envelope" className="p-button-success" style={{ marginRight: '.5em' }}></Button>
    

    <Link to={'/newusager/'}><Button type="button" icon="pi pi-pencil" className="p-button-warning" style={{ marginRight: '.5em' }}></Button></Link>
      <Button type="button" icon="pi pi-times" className="p-button-danger"></Button>
    </div>;
  }

  actionValid(rowData, column) {
    return <div>


<InputSwitch onLabel="Yes" offLabel="No" checked="true" />
    </div>;
  }

  render() {

    return (



      <React.Fragment>

          <div className="content-section introduction">
            <div className="feature-intro">
              <h1>Liste des interlocuteurs de proximité</h1>
              <p></p>
            </div>
          </div>

          <div className="content-section implementation">
            <TabView>
              <TabPanel header="Les plus actifs">
                <div>
                  <Fieldset legend="">
                    <p>
 </p>


                    <DataTable value={this.state.users}>
                      <Column field="metas.publisher" header="Nom" />
                      <Column field="metas.theme" header="Domaine" />
                   
                      <Column field="metas.keyword" header="Description" />
                      
                      <Column body={this.actionTemplate} style={{ textAlign: 'center', width: '12em' }}  header="action" />
                      <Column body={this.actionValid} style={{ textAlign: 'center', width: '5em' }}  header="actif"/>
                    </DataTable>

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





