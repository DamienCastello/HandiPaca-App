import React from 'react';

import {Menu} from 'primereact/menu';

import logo from './marseillee.png';



  export default class MenuLeft extends React.Component {

 constructor() {

        super();

        this.state = {

            items: [

                {

                    label: 'GENERAL',

                    items: [{label: 'Accueil', icon: 'pi pi-fw pi-home', url: './'},

                    {label: 'Signalements', icon: 'pi pi-fw pi-calendar', url: './signalement'},

               

                ]

                }, 

                {

                    label: 'Catégories',

                    items: [

                      

                        {label: 'Places Handicapés', icon: 'pi pi-fw pi-chevron-circle-right', url: './place'},

                        {label: 'ERP', icon: 'pi pi-fw pi-chevron-circle-right'},

                        {label: 'Transports', icon: 'pi pi-fw pi-chevron-circle-right'},

                        {label: 'Itinéraires accessibles', icon: 'pi pi-fw pi-chevron-circle-right'},

                                         

                    ]

                },



                {

                    label: 'Interlocuteurs',

                    items: [

                        {label:'Associations',icon:'pi pi-fw pi-chevron-circle-right',url: './correspondant'},

                        {label:'Administrations',icon:'pi pi-fw pi-chevron-circle-right'},

                   

                            ]

                },

         

                {

                    label: 'Autres',

                    items: [{label: 'Numéros utiles ', icon: 'pi pi-fw pi-info-circle' },

                            {label: 'Articles de loi', icon: 'pi pi-fw pi-pencil'},

                          

                        ]

                },



             

                {

                    label: 'Account',

                    items: [{label: 'Configuration', icon: 'pi pi-fw pi-cog' },

                    {label:'Utilisateurs',icon:'pi pi-fw pi-user'},





                            {label: 'Sign Out', icon: 'pi pi-fw pi-sign-out'} ]

                }

            ]


        };

    }



    render() {

        return (



            

     



                <div className="layout-menu">

<img src={logo} alt="Logo" />

                    <Menu model={this.state.items}/>

               

                    

                </div>



                

       

        )

    }

}