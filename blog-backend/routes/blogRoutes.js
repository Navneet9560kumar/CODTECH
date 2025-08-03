const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authMiddleware');
const { createBlog, getAllBlogs } = require('../controllers/blogController');

router.post('/', authenticateUser, createBlog);
router.get('/', getAllBlogs);

module.exports = router;
