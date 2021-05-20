const router = require('express').Router();
const { Group, Comment,User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newGroup = await Group.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newGroup);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});


router.put('/:id', withAuth, async (req, res) => {
    Group.update(req.body, {
    where: {
      id: req.params.id,
      user_id: req.session.user_id,
    },
  })
  .then((updatedGroup) => res.json(updatedGroup))
  .catch((err) => {
    console.error(err);
    res.status(400).json(err);
  })
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const groupData = await Group.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!groupData) {
      res.status(404).json({ message: 'No group found!' });
      return;
    }

    res.status(200).json(groupData);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;