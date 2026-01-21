const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

const upload = require('../middleware/uploadMiddleware');

router.get('/', projectController.getAllProjects);
router.get('/:id', projectController.getProjectById);
router.post('/', upload.single('image'), projectController.createProject);
router.delete('/:id', projectController.deleteProject);

module.exports = router;
