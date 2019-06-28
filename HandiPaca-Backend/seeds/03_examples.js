const models = require('../models');
const Example = models.Example;

Example.create({
    anExample: 'rampe d`acces manquante'
})
.then((example) => { console.log(example); })
.catch((error) => { console.log(error); });

Example.create({
    anExample: 'ascenseur inexistant'
})
.then((example) => { console.log(example); })
.catch((error) => { console.log(error); });

Example.create({
    anExample: 'Chaussée ou troittoir déformé'
})
.then((example) => { console.log(example); })
.catch((error) => { console.log(error); });