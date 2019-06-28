const models = require('../models');
const Category = models.Category;

Category.create({
    categoryName: 'Places de parking pour handicapés'
})
.then((category) => { console.log(category); })
.catch((error) => { console.log(error); });

Category.create({
    categoryName: 'Restauration'
})
.then((category) => { console.log(category); })
.catch((error) => { console.log(error); });

Category.create({
    categoryName: 'Acces aux transports publics'
})
.then((category) => { console.log(category); })
.catch((error) => { console.log(error); });

Category.create({
    categoryName: 'Hebergement'
})
.then((category) => { console.log(category); })
.catch((error) => { console.log(error); });
