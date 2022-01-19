const Project = require('../models/project');
const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
	res.json({
		message: 'Hello World from Projects'
	});
});

router.post('/', async (req, res) => {
	const { name, image, url, github, technologies, description, milestones } = req.body;
	try {
		const newProject = new Project(req.body);
		await newProject.save();
		res.json({
			message: 'Project created successfully',
			data: newProject
		});
	} catch (e) {
		console.log('🚀 ~ file: projects.js ~ line 22 ~ router.post ~ e', e);
		res.json({
			message: 'Something went wrong'
		});
	}
});

module.exports = router;
