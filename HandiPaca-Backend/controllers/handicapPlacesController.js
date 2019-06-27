const models = require('../models');
const HandicapPlace = models.HandicapPlace;

module.exports = {
    index: function (req, res, next) {
        HandicapPlace.findAll()
            .then((handicapPlaces) => { res.json({ handicapPlaces }); })
            .catch((error) => { console.log(error); });
    },
    create: function (req, res, next) {
        HandicapPlace.create({ ...req.body })
            .then((handicapPlace) => { res.json({ handicapPlace }); })
            .catch((error) => { console.log(error); });
    },
    update: function (req, res, next) {
        HandicapPlace.findByPk(req.params.id)
            .then((handicapPlace) => {
                handicapPlace.update({ ...req.body })
                    .then((handicapPlace) => { res.json({ handicapPlace }); })
                    .catch((error) => { console.log(error); });
            })
            .catch((error) => { console.log(error); });
    },
    delete: function (req, res, next) {
        HandicapPlace.findByPk(req.params.id)
            .then((handicapPlace) => {
                handicapPlace.destroy()
                    .then((handicapPlace) => { res.json({ handicapPlace }); })
                    .catch((error) => { console.log(error); });
            })
            .catch((error) => { console.log(error); });
    }
}