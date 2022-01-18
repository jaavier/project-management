const { Router } = require('express');
const projects = require('./projects');
const notifications = require('./notifications');
const router = Router();

router.use('/projects', projects);
router.use('/notifications', notifications);

module.exports = router;
