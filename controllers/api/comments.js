const router = require('express').Router();
const { Group, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        console.log("awaiting comment")
      const newComment = await Comment.create({
        content: req.body.contents,
        user_id: req.session.user_id,
        group_id: req.body.group_id
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;