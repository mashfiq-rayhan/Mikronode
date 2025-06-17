const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/', adminController.getAdminPage);

router.get('/userlist', adminController.getUserList);

router.get('/userlist/:uId', adminController.getUserInformation);

router.get('/profilelist', adminController.getProfileList);

router.get('/adduser', adminController.getAddUser);

router.post('/adduser', adminController.postAddUser);

router.get('/edituser/:uId', adminController.getEditUser);

router.post('/edituser', adminController.postEditUser);

router.post('/removeuser', adminController.postRemoveUser); 


module.exports = router;