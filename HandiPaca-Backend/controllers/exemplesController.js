const models = require('../models');
const Exemple = models.Exemple;

module.exports = {
    index: function (req, res, next) {
        Exemple.findAll()
            .then((exemples) => { res.json({ exemples }); })
            .catch((error) => { console.log(error); });
    },
    create: function (req, res, next) {
        Exemple.create({ ...req.body })
            .then((exemple) => { res.json({ exemple }); })
            .catch((error) => { console.log(error); });
    },
    update: function (req, res, next) {
        Exemple.findByPk(req.params.id)
            .then((exemple) => {
                exemple.update({ ...req.body })
                    .then((exemple) => { res.json({ exemple }); })
                    .catch((error) => { console.log(error); });
            })
            .catch((error) => { console.log(error); });
    },
    delete: function (req, res, next) {
        Exemple.findByPk(req.params.id)
            .then((exemple) => {
                exemple.destroy()
                    .then((exemple) => { res.json({ exemple }); })
                    .catch((error) => { console.log(error); });
            })
            .catch((error) => { console.log(error); });
    }
}