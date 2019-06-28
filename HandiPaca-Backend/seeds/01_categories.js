const models = require('../models');
const Category = models.Category;

Category.create({
    categoryName: 'ramp'
})
.then((category) => { console.log(category); })
.catch((error) => { console.log(error); });

Category.create({
    categoryName: 'elevator'
})
.then((category) => { console.log(category); })
.catch((error) => { console.log(error); });

Category.create({
    categoryName: 'parking'
})
.then((category) => { console.log(category); })
.catch((error) => { console.log(error); });