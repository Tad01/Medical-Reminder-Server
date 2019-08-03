
const router = require('express').Router();
const PrescriptionService = require('../services/prescription');


router.post('/:patientId', async (req, res) => {
  if (!req.session.user) {
    return res.send({ ok: false });
  }
  const { diagnose, medicines, description } = req.body;
  const { patientId } = req.params;

  const doctorId = req.session.user.id;

  const createdPrescription = await PrescriptionService.createPrescription({
    patientId,
    doctorId,
    diagnose,
    description,
    medicines
  });
  return res.send({ prescription: createdPrescription });
});

module.exports = router;
