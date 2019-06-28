const models = require('../models');
const Example = models.Example;

Example.create({
    anExample: 'the example 1'
})
.then((example) => { console.log(example); })
.catch((error) => { console.log(error); });

Example.create({
    anExample: 'the example 2'
})
.then((example) => { console.log(example); })
.catch((error) => { console.log(error); });

Example.create({
    anExample: 'the example 3'
})
.then((example) => { console.log(example); })
.catch((error) => { console.log(error); });