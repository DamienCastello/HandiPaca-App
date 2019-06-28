import axios from 'axios';
const data = require('../json/data.json');
const association = require('../json/association.json');
export class HandiService {
    
    getPlaces() {
        return  axios
        .get('http://localhost:3000/')
    .then(res => res.data.users);
    }


    async getJson() {
     return await data
   
  }


 
 getAddress (id) {
  return this.http.get("http://opendata.nicecotedazur.org/data/storage/f/2014-06-06T12%3A26%3A02.912Z/sign-ig-ig-base-localisation.json")
  .map(res => res.json());
  }

  getAdd() {
      axios
    .get('http://opendata.nicecotedazur.org/data/storage/f/2014-06-06T12%3A26%3A02.912Z/sign-ig-ig-base-localisation.json',
    {headers:("Access-Control-Allow-Methods: GET")}
  )
  
.then(res => res.data.docs)
.catch((error) => {console.log('heeeere',error);})
 }

 getd() {
  return axios
 .get('http://opendata.nicecotedazur.org/data/storage/f/2014-06-06T12%3A26%3A02.912Z/sign-ig-ig-base-localisation.json', {
     method: 'GET',
     mode: 'cors',
     headers:("Access-Control-Allow-Methods: GET"),
 })
 .then(res => res.data.docs)

 .catch(err => console.log('err', err));
 }


   getAdmin() {
        return  axios
        .get('https://opendata.paris.fr/api/datasets/1.0/search/?q=handicap&rows=100'
      )
    .then(res => res.data);
     }

     getParticipants() {
        return  axios
        .get('http://localhost:3000/participants', {headers: {Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLWRvZUBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NTkyMzY2Mjh9.6jcK8-WPUqcpmdwnf3nbTAhmYWeNddEeYJeIoQyF9rs'}
      })
    .then(res => res.data.participants);
     }
     getPictures() {
        return  axios
        .get('http://localhost:3000/pictures', {headers: {Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huLWRvZUBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NTkyMzY2Mjh9.6jcK8-WPUqcpmdwnf3nbTAhmYWeNddEeYJeIoQyF9rs'}
      })
    .then(res => res.data.participants);
     }




}


