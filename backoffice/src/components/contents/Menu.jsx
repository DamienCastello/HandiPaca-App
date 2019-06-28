import React from 'react';
import {Menu} from 'primereact/menu';


  export default class MenuLeft extends React.Component {
 constructor() {
        super();
        this.state = {
            items: [
                {
                    label: 'GENERAL',
                    items: [{label: 'Acceuil', icon: 'pi pi-fw pi-home', url: './'},
                    {label: 'Signalements', icon: 'pi pi-fw pi-calendar', url: './signalement'},
               
                ]
                }, 
                {
                    label: 'Categories',
                    items: [
                      
                        {label: 'Places Handicapés', icon: 'pi pi-fw pi-tags', url: './place'},
                        {label: 'ERP', icon: 'pi pi-fw pi-user', url: './'},
                        {label: 'Transports', icon: 'pi pi-fw pi-user', url: './'},
                        {label: 'Intineraires accessibles', icon: 'pi pi-fw pi-user', url: './'},
                                         
                    ]
                },

                {
                    label: 'Interlocuteurs',
                    items: [
                        {label:'Associations',icon:'pi pi-fw pi-filter',url: './correspondant'},
                        {label:'Administrations',icon:'pi pi-fw pi-user',url: './correspondant'},
                   
                            ]
                },
         
                {
                    label: 'Autres',
                    items: [{label: 'Numeros utiles ', icon: 'pi pi-fw pi-cog',url: './configuration' },
                            {label: 'Articles de loi', icon: 'pi pi-fw pi-power-off', url: './index.html'},
                          
                        ]
                },

             
                {
                    label: 'Account',
                    items: [{label: 'Configuration', icon: 'pi pi-fw pi-cog',url: './configuration' },
                    {label:'Utilisateurs',icon:'pi pi-fw pi-filter', url: '/partenaire'},
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