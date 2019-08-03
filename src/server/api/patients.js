
const router = require('express').Router();
const PatientsService = require('../services/patients');

router.get('/:patientId(\\d+)', async (req, res) => {
  const { patientId } = req.params;
  const patient = await PatientsService.getPatient(patientId);
  return res.send({ patient });
});

router.get('/list', async (req, res) => {
  if (!req.session.user) {
    return res.send({ ok: false });
  }
  const doctorId = req.session.user.id;
  const doctors = await PatientsService.getPatientsByDoctor(doctorId);
  return res.send({ patients: doctors[0].patient });
});

router.post('/', async (req, res) => {
  if (!req.session.user) {
    return res.send({ ok: false });
  }
  const { name, birthday, gender, patientCode,diagnose, phone, address, avatar, password } = req.body;
  const createdPatient = await PatientsService.createPatient({
    doctorId: req.session.user.id,
    name, 
    birthday, 
    gender, 
    patientCode,
    diagnose,
    phone, 
    address, 
    avatar, 
    password
  });
  return res.send({ ok: createdPatient != null });
});

module.exports = router;
