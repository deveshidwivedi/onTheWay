const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const userController= require('../controllers/user.controller');

//registration route
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min:3}).withMessage('First name must be atleast 3 characters long'),
    body('password').isLength({min: 6}).withMessage('Password must be atleast 6 characters long')
], userController.registerUser)

//login route
router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').notEmpty().withMessage('Password is required')
], userController.loginUser );
module.exports = router;