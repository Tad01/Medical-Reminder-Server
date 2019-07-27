const router = require('express').Router();
const UserRoute = require('./users');
const PatientsRoute = require('./patients');
const PrescriptionRoute = require('./prescriptions');

router.get('/', async (req, res) => {
  res.send('hello API');
});

router.use('/users', UserRoute);
router.use('/patients', PatientsRoute);
router.use('/prescriptions', PrescriptionRoute);

module.exports = router;
