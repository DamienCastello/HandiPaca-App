import React from 'react';
import {Menu} from 'primereact/menu';


  export default class MenuLeft extends React.Component {
 constructor() {
        super();
        this.state = {
            items: [
                {
                    label: 'GENERAL',
                    items: [{label: 'Home', icon: 'pi pi-fw pi-home', url: './'},
                    {label: 'Signalement', icon: 'pi pi-fw pi-calendar', url: './signalement'},
               
                ]
                }, 
                {
                    label: 'Categories',
                    items: [
                      
                        {label: 'Place Handicapé', icon: 'pi pi-fw pi-user', url: './place'},
                        {label: 'ERP', icon: 'pi pi-fw pi-user', url: './'},
                        {label: 'Transport', icon: 'pi pi-fw pi-user', url: './'},
                        {label: 'Intineraire', icon: 'pi pi-fw pi-user', url: './'},
                                         
                    ]
                },

                {
                    label: 'Partenaire',
                    items: [
                        {label:'Association',icon:'pi pi-fw pi-filter',url: './partenaire'},
                        {label:'Administration',icon:'pi pi-fw pi-user',url: './correspondant'},
                        {label:'Membres',icon:'pi pi-fw pi-filter'},
                            ]
                },
         
                {
                    label: 'Autres',
                    items: [{label: 'Pharmancies Numero UTILE', icon: 'pi pi-fw pi-cog',url: './configuration' },
                            {label: 'Article de lois', icon: 'pi pi-fw pi-power-off', url: './index.html'},
                            {label: 'Actualites', icon: 'pi pi-fw pi-power-off', url: './index.html'},
                        ]
                },

                {
                    label: 'Api',
                    items: [{label: 'Documentation', icon: 'pi pi-fw pi-file', url: './api'}
                      ]
                },
                {
                    label: 'Account',
                    items: [{label: 'Configuration', icon: 'pi pi-fw pi-cog',url: './configuration' },
                            {label: 'Sign Out', icon: 'pi pi-fw pi-power-off', url: './index.html'} ]
                }
            ]
        };
    }

    render() {
        return (

            
     

                <div className="layout-menu">
                
                    <Menu model={this.state.items}/>

                    
                </div>

                
       
        )
    }
}