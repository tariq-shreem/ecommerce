
const router = require('express').Router();
const registerController = require('./controller/registeration.js');
router.post('/signup',registerController.signup);
router.get('/confirmEmail/:token',registerController.confirmEmail);
router.get('/login',registerController.login);
module.exports = router;