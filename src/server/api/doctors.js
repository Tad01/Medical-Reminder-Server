
const router = require('express').Router();
const DoctorService = require('../services/doctors');


router.get('/:doctorId?', async (req, res) => {
  const doctorId = req.params.doctorId || (req.session.user ? req.session.user.id : null);
  const doctor = await DoctorService.getDoctor(doctorId);
  return res.send({ doctor });
});

router.get('/list', async (req, res) => {
  if (!req.session.user) {
    return res.send({ ok: false });
  }
  const doctorId = req.session.user.id;
  const doctors = await DoctorService.getDoctor(doctorId);
  return res.send({ doctors });
});

router.post('/', async (req, res) => {
  if (!req.session.user) {
    return res.send({ ok: false });
  }
  const { name, birthday, phone, address, avatar, email,specialist } = req.body;
  const createDoctor = await DoctorService.createDoctor({
    doctorId: req.session.user.id,
    name, 
    birthday, 
    phone, 
    address, 
    avatar, 
    email,
    specialist
  });
  return res.send({ ok: createDoctor != null });
});

module.exports = router;
