const { Comment, Blog, User } = require('../models');

exports.createComment = async (req, res) => {
  try {
    const { blogId, content } = req.body;
    const comment = await Comment.create({
      content,
      BlogId: blogId,
      UserId: req.user.id,
    });
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: 'Error creating comment', error: err.message });
  }
};

exports.getCommentsForBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const comments = await Comment.findAll({
      where: { BlogId: blogId },
      include: [User],
    });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching comments' });
  }
};
