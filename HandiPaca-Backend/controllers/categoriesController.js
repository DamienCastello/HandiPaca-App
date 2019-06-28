const models = require('../models');
const Category = models.Category;

module.exports = {
    index: function (req, res, next) {
        Category.findAll()
            .then((categories) => { res.json({ categories }); })
            .catch((error) => { console.log(error); });
    },
    show: function (req, res, next) {
        Category.findByPk(req.params.id)
            .then((category) => { res.json({ category }); })
            .catch((error) => { console.log(error); });
    },
    create: function (req, res, next) {
        Category.create({ ...req.body })
            .then((category) => { res.json({ category }); })
            .catch((error) => { console.log(error); });
    },
    update: function (req, res, next) {
        Category.findByPk(req.params.id)
            .then((category) => {
                category.update({ ...req.body })
                    .then((category) => { res.json({ category }); })
                    .catch((error) => { console.log(error); });
            })
            .catch((error) => { console.log(error); });
    },
    delete: function (req, res, next) {
        Category.findByPk(req.params.id)
            .then((category) => {
                category.destroy()
                    .then((category) => { res.json({ category }); })
                    .catch((error) => { console.log(error); });
            })
            .catch((error) => { console.log(error); });
    }
}