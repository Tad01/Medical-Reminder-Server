
const router = require('express').Router();
// const AuthService = require('../services/authenticator');
const PrescriptionService = require('../services/prescription');

router.get('/get', async (req, res) => {
  const prescriptions = await PrescriptionService.getAll();
  return res.send(prescriptions);
});

module.exports = router;
