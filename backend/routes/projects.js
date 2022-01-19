const Project = require('../models/project');
const Milestone = require('../models/Milestones');
const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
	const projects = await Project.find({ deleted: false }).populate('milestones');
	res.json(projects);
});

router.post('/', async (req, res) => {
	const ids = [];
	try {
		for (const milestone of req.body.milestones) {
			const newMilestone = new Milestone(milestone);
			const result = await newMilestone.save();
			ids.push(result._id);
		}
		const newProject = new Project({ ...req.body, milestones: ids });
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
