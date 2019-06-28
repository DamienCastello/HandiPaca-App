const models = require('../models');
const Facility = models.Facility;

Facility.create({
    streetNumber: '1',
    streetName: 'rue Git',
    postalCode: '13200',
    city: 'Nice',
    longitude: '7.250000',
    latitude: '43.700000',
    other: 'Other',
    exempleId: '2',
    validate: false,
    archive: false
})
.then((facility) => { console.log(facility); })
.catch((error) => { console.log(error); });

Facility.create({
    streetNumber: '2',
    streetName: 'rue IsA',
    postalCode: '13200',
    city: 'Nice',
    longitude: '7.250050',
    latitude: '43.700050',
    other: 'Other',
    exempleId: '3',
    validate: false,
    archive: false
})
.then((facility) => { console.log(facility); })
.catch((error) => { console.log(error); });

Facility.create({
    streetNumber: '3',
    streetName: 'rue Kraken',
    postalCode: '13200',
    city: 'Nice',
    longitude: '7.250025',
    latitude: '43.700025',
    other: 'Other',
    exempleId: '1',
    validate: false,
    archive: false
})
.then((facility) => { console.log(facility); })
.catch((error) => { console.log(error); });

Facility.create({
    streetNumber: '1',
    streetName: 'Avenue des sudistes',
    postalCode: '13200',
    city: 'Nice',
    longitude: '7.250075',
    latitude: '43.700075',
    other: 'Other',
    exempleId: '3',
    validate: false,
    archive: false
})
.then((facility) => { console.log(facility); })
.catch((error) => { console.log(error); });

Facility.create({
    streetNumber: '1',
    streetName: 'boulevard canicule',
    postalCode: '13200',
    city: 'Nice',
    longitude: '7.250100',
    latitude: '43.700100',
    other: 'Other',
    exempleId: '2',
    validate: false,
    archive: false
})
.then((facility) => { console.log(facility); })
.catch((error) => { console.log(error); });