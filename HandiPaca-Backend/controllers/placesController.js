const models = require('../models');
const Place = models.Place;

module.exports = {
    index: function (req, res, next) {
        Place.findAll()
            .then((places) => { res.json({ places }); })
            .catch((error) => { console.log(error); });
    },
    show: function (req, res, next) {
        Place.findByPk(req.params.id)
            .then((place) => { res.json({ place }); })
            .catch((error) => { console.log(error); });
    },
    create: function (req, res, next) {
        Place.create({ ...req.body })
            .then((place) => { res.json({ place }); })
            .catch((error) => { console.log(error); });
    },
    update: function (req, res, next) {
        Place.findByPk(req.params.id)
            .then((place) => {
                place.update({ ...req.body })
                    .then((place) => { res.json({ place }); })
                    .catch((error) => { console.log(error); });
            })
            .catch((error) => { console.log(error); });
    },
    delete: function (req, res, next) {
        Place.findByPk(req.params.id)
            .then((place) => {
                place.destroy()
                    .then((place) => { res.json({ place }); })
                    .catch((error) => { console.log(error); });
            })
            .catch((error) => { console.log(error); });
    }
}