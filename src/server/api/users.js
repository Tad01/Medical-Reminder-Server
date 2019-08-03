
const router = require('express').Router();
const UserService = require('../services/user');

router.post('/login', async (req, res) => {
  const { email, password } = req.body; // destructing - { a,b,c } = object
  const user = await UserService.login(email, password);
  if (user) {
    req.session.user = user;
    return req.session.save(() => {
      res.send({ ok: user != null });
    });
  }
  return res.send({ ok: user != null });
});

router.post('/login-patient', async (req, res) => {
  const { patientCode, password } = req.body; // destructing - { a,b,c } = object
  const user = await UserService.loginPatient(patientCode, password);
  if (!user) {
    return res.send({ ok: false });
  }
  req.session.user = user;
  return req.session.save(() => {
    res.send({ user });
  });
});

router.get('/logout', async (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

module.exports = router;
