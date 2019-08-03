
const router = require('express').Router();
const PatientsService = require('../services/patients');
const PrescriptionService = require('../services/prescription');

router.get('/list', async (req, res) => {
  const { patientId } = req.query;
  const patient = await PatientsService.getPatient(patientId);
  return res.send({ prescriptions: patient.prescriptions });
});

router.get('/:prescriptionId(\\d+)', async (req, res) => {
  const { prescriptionId } = req.params;
  const prescription = await PrescriptionService.get(prescriptionId);
  return res.send({ prescription });
});

module.exports = router;
