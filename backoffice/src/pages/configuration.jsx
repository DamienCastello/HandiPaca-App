import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Fieldset } from 'primereact/fieldset';
import MenuDemo from '../components/contents/Menu';
import { HandiService } from '../components/HandiService';
import {InputText} from 'primereact/inputtext';

export default class Ficheconfig extends Component {
  constructor() {
    super();
    this.state = {
    };
    this.handiservice = new HandiService();
  }


  componentDidMount() {
    this.handiservice.getUsers().then(data => this.setState({ users: data }));
  }

  actionTemplate(rowData, column) {
    return <div>
      <Button type="button" icon="pi pi-search" className="p-button-success" style={{ marginRight: '.5em' }}></Button>
      <Button type="button" icon="pi pi-pencil" className="p-button-warning" style={{ marginRight: '.5em' }}></Button>
      <Button type="button" icon="pi pi-times" className="p-button-danger"></Button>
    </div>;
  }

  render() {
    return (
      <div className="layout-wrapper">
        <div className="layout-topbar">
        </div>
        <div className="layout-sidebar">
          <MenuDemo />
        </div>

        <div className="layout-content">

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


                  <div>
            
                <div className="content-section implementation">
                    <h3>Filtering</h3>
                    <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-4">
                            <InputText keyfilter="int" placeholder="Integers"/>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <InputText keyfilter="num" placeholder="Numbers"/>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <InputText keyfilter="money" placeholder="Money"/>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <InputText keyfilter="hex" placeholder="Hex"/>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <InputText keyfilter="alpha" placeholder="Alphabetic"/>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <InputText keyfilter="alphanum" placeholder="Alphanumberic"/>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <InputText keyfilter={/^[^<>*!]+$/} placeholder="Block < > * !"/>
                        </div>
                        <div className="p-col-12 p-md-4">
                            <InputText keyfilter={/[^\s]/} placeholder="Block space key"/>
                        </div>
                    </div>
                </div>
            </div>




                  </Fieldset>
                                </div>
              </TabPanel>


                              <TabPanel header="attente de validation">
                                <div>
                                  <Fieldset legend="En cours">







                                  </Fieldset>
                                </div>
                              </TabPanel>

         


            </TabView>
                          </div>

                        </div>
                      </div>
                      );
                    }
                  }
                  
                  
                  
                  
                  
                  
