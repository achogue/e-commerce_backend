const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: Product, ProductTag
  })
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: Product, ProductTag
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {id: req.params.id}
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {id: req.params.id}
  })
});

module.exports = router;
