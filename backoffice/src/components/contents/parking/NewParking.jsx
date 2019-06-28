
import React, { Component } from 'react';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from 'primereact/dropdown';
import { InputSwitch } from 'primereact/inputswitch';
import { Form } from 'reactstrap';
import axios from 'axios';


export class NewParking extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            avatarUrl: '',
            isAdmin: false,
            isActive: false,
            isBanned: false,
            invitationCode: '',
            job: '',
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange = e => this.setState({
        [e.target.name]: e.target.value
    })
    submitForm = event => {
        event.preventDefault();

        const user = { ...this.state }

        axios.post('http://localhost:3000/users', { ...user } )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    fileChangedHandler = event => {
        // console.log(event.target);
         this.setState({ avatarUrl: event.target.files[0] })
       }
       
       uploadHandler = () => {
         const formData = new FormData()
         formData.append('avatar', this.state.avatarUrl,  this.state.avatarUrl.name );
         formData.append('firstname', 'John' );
         axios.post('/auth/signup', formData,   
          {onUploadProgress: progressEvent => {
               console.log(progressEvent.loaded / progressEvent.total)
             } 
         })
           .then(res =>{
             console.log(res);
         });
           }


    render() {
        const jobSelectItems = [
            { label: 'rampe', value: 'Coiffeur' },
            { label: 'Ascenceur', value: 'Estheticienne' },
            { label: 'Parking', value: 'Photographe' }
        ];
        console.log(this.state)
        return (
            <div>
                <div className="content-section implementation inputgrid-demo">
                    <Form onSubmit={this.submitForm} >

                        <div className="p-grid p-fluid">
                       
                            <div className="p-col-4 p-md-4">
                                <div className="p-inputgroup">
                                    <InputText placeholder="Adresse" name="password" type="text" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="p-col-4 p-md-4">
                                <div className="p-inputgroup">
                                    <InputText placeholder="Adresse 2" name="password2" type="text" onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>

                        <div className="p-grid p-fluid">
                            <div className="p-col-4 p-md-4">
                                <div className="p-inputgroup">
                                    <InputText placeholder="Code postal" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="p-col-4 p-md-4">
                                <div className="p-inputgroup">
                                    <InputText placeholder="Ville" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="p-col-4 p-md-4">
                                <div className="p-inputgroup">
                                    <Dropdown value={this.state.job} name="job" options={jobSelectItems} onChange={(e) => { this.setState({ job: e.value }) }} placeholder="Selectionner une catégorie" />
                                </div></div>
                        </div>

                      

                        <div className="p-grid p-fluid">
                            <div className="p-col-4 p-md-4">
                                <p>Archiver</p>
                                <InputSwitch name="isAdmin" value={this.state.isAdmin} checked={this.state.isAdmin} onChange={(e) => this.setState({ isAdmin: e.target.value })} />
                            </div>
                      
                        </div>



                        <div className="p-grid p-fluid">
                            <div className="p-col-12 p-md-4" >
                            <Button label="Soumettre la demande" icon="pi pi-times" className="p-button-warning" />
                          
                            </div>
                        </div>



                    </Form>
                </div>
            </div>

        );
    }
}