var express = require('express');
var router = express.Router();
var {registerUser,loginUser,logoutUser} = require('../../controllers/apiControllers/userApiControllers');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.delete('/logout', logoutUser);

module.exports = router;