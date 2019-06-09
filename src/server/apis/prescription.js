
const router = require('express').Router();
// const AuthService = require('../services/authenticator');
const PrescriptionService = require('../services/prescription');

router.get('/get', async (req, res) => {
//   const { username, password, token } = req.headers;
//   const user = await AuthService.authenticate(username, password, token);
//   if (!user) {
//     return res.send([]);
//   }
//   const gardens = await GardenInfoService.getGardensByOwner(user.id);
//   return res.send(gardens);
  const prescriptions = await PrescriptionService.getAll();
  return res.send(prescriptions);
});

module.exports = router;
