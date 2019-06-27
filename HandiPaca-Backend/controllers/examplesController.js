const models = require('../models');
const Example = models.Example;

module.exports = {
    index: function (req, res, next) {
        Example.findAll()
            .then((examples) => { res.json({ examples }); })
            .catch((error) => { console.log(error); });
    },
    show: function (req, res, next) {
        Example.findByPk(req.params.id)
            .then((example) => { res.json({ example }); })
            .catch((error) => { console.log(error); });
    },
    create: function (req, res, next) {
        Example.create({ ...req.body })
            .then((example) => { res.json({ example }); })
            .catch((error) => { console.log(error); });
    },
    update: function (req, res, next) {
        Example.findByPk(req.params.id)
            .then((example) => {
                example.update({ ...req.body })
                    .then((example) => { res.json({ example }); })
                    .catch((error) => { console.log(error); });
            })
            .catch((error) => { console.log(error); });
    },
    delete: function (req, res, next) {
        Example.findByPk(req.params.id)
            .then((example) => {
                example.destroy()
                    .then((example) => { res.json({ example }); })
                    .catch((error) => { console.log(error); });
            })
            .catch((error) => { console.log(error); });
    }
}