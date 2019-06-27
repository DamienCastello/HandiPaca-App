const models = require('../models');
const Facility = models.Facility;

module.exports = {
    index: function (req, res, next) {
        Facility.findAll()
            .then((facilities) => { res.json({ facilities }); })
            .catch((error) => { console.log(error); });
    },
    create: function (req, res, next) {
        Facility.create({ ...req.body })
            .then((facility) => { res.json({ facility }); })
            .catch((error) => { console.log(error); });
    },
    update: function (req, res, next) {
        Facility.findByPk(req.params.id)
            .then((facility) => {
                facility.update({ ...req.body })
                    .then((facility) => { res.json({ facility }); })
                    .catch((error) => { console.log(error); });
            })
            .catch((error) => { console.log(error); });
    },
    delete: function (req, res, next) {
        Facility.findByPk(req.params.id)
            .then((facility) => {
                facility.destroy()
                    .then((facility) => { res.json({ facility }); })
                    .catch((error) => { console.log(error); });
            })
            .catch((error) => { console.log(error); });
    }
}