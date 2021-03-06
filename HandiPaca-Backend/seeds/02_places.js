const models = require('../models');
const Place = models.Place;

Place.create({
    streetNumber: '1',
    streetName: 'Wild',
    postalCode: '13200',
    city: 'Marseille',
    numberOfPlaces: '3',
    longitude: '5.400000',
    latitude: '43.300000',
    categoryId: '1',
    facilityId: null,
})
.then((place) => { console.log(place); })
.catch((error) => { console.log(error); });

Place.create({
    streetNumber: '2',
    streetName: 'code',
    postalCode: '13200',
    city: 'Marseille',
    numberOfPlaces: '2',
    longitude: '5.400050',
    latitude: '43.300050',
    categoryId: '2',
    facilityId: null,
})
.then((place) => { console.log(place); })
.catch((error) => { console.log(error); });

Place.create({
    streetNumber: '3',
    streetName: 'school',
    postalCode: '13200',
    city: 'Marseille',
    numberOfPlaces: '1',
    longitude: '5.400025',
    latitude: '43.300025',
    categoryId: '3',
    facilityId: null,
})
.then((place) => { console.log(place); })
.catch((error) => { console.log(error); });