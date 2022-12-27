const { createCategory, getCategories, getCategory } = require('./category.service');


const router = require('express').Router();



router.route('/').post(createCategory).get(getCategories);
router.route('/:id').get(getCategory);

module.exports = router;