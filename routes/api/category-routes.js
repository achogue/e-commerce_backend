const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/', (req, res) => {
 Category.findAll({
  include: [Product]
 })
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: { id: req.params.id },
    include: [Product],
  })
});

router.post('/', (req, res) => {
  Category.create(req.body)
  .then((category) => res.status(200).json(category))
  .catch((err) => res.status(400).json(err));
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: { id: req.params.id, },
  })
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: { id: req.params.id, },
  })
});

module.exports = router;
