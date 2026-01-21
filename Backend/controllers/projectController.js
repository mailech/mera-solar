const db = require('../config/db');

exports.getAllProjects = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM projects');
        res.status(200).json({
            success: true,
            data: rows
        });
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({
            success: false,
            message: 'Server Error fetching projects'
        });
    }
};

exports.getProjectById = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM projects WHERE id = ?', [req.params.id]);
        if (rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Project not found' });
        }
        res.status(200).json({
            success: true,
            data: rows[0]
        });
    } catch (error) {
        console.error('Error fetching project:', error);
        res.status(500).json({
            success: false,
            message: 'Server Error fetching project'
        });
    }
};

exports.createProject = async (req, res) => {
    const { title, location, category, capacity, completion_date, description, co2_offset, homes_powered } = req.body;
    const image_url = req.file ? `/uploads/${req.file.filename}` : null;

    try {
        const sql = `INSERT INTO projects (title, location, category, capacity, completion_date, image_url, description, co2_offset, homes_powered) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const [result] = await db.query(sql, [title, location, category, capacity, completion_date, image_url, description, co2_offset, homes_powered]);

        res.status(201).json({ success: true, data: { id: result.insertId, ...req.body, image_url } });
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        await db.query('DELETE FROM projects WHERE id = ?', [req.params.id]);
        res.status(200).json({ success: true, message: 'Project deleted' });
    } catch (error) {
        console.error('Error deleting project:', error);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};
