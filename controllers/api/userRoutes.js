const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// CREATE NEW USER
router.post('/', withAuth, async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    if (err) {
      console.error(err);
      res.status(400).json(err);
    }
  }
});

// VALIDATE, THEN LOGIN
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    console.log(userData);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.user_name = userData.first_name;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update User info.
router.put("/:id", withAuth, async (req, res) => {
  try {
      const userData = await User.update(req.body, {
          where: {
              id: req.params.id,
          }
      })

      if (!userData) {
          res.status(404).json({ message: "No user found with this ID."});
          return;
      }

      res.status(200).json(userData);
  } catch (err) {
      res.status(500).json(err);
  }
})

// Delete User Info.
router.delete("/:id", withAuth, async (req, res) => {
  try {
      const userData = await User.destroy({
          where: {
              id: req.params.id,
          },
      });

      if (!userData) {
          res.status(404).json({ message: "No user fonud with this ID."});
          return;
      }

      res.status(200).json(userData);
  } catch (err) {
      res.status(500).json(err);
  }
});

// LOGOUT
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;