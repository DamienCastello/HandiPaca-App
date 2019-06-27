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
                      {label: 'PlacesParking', icon: 'pi pi-fw pi-user', url: './place'},
                      {label:'Correspondant',icon:'pi pi-fw pi-users',url: './correspondant'}
                
                ]
                }, 

                {
                    label: 'Partenaire??',
                    items: [
                      
                        {label:'Association',icon:'pi pi-fw pi-filter'},
                        {label:'Membres',icon:'pi pi-fw pi-filter'},
                    
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
                },
                {
                    label: 'Autres',
                    items: [{label: 'Pharmancies Numero UTILE', icon: 'pi pi-fw pi-cog',url: './configuration' },
                            {label: 'Trottoir', icon: 'pi pi-fw pi-power-off', url: './index.html'},
                            {label: 'Canicule', icon: 'pi pi-fw pi-power-off', url: './index.html'}

                        
                        
                        
                        
                        
                        ]
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