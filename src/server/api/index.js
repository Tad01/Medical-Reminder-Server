const router = require('express').Router();
const UserRoute = require('./users');
const PatientsRoute = require('./patients');
const PrescriptionsRoute = require('./prescriptions');
const DoctorsRoute = require('./doctors');
const MedicinesRoute = require('./medicines');

router.get('/', async (req, res) => {
  res.send('hello API');
});

router.use('/users', UserRoute);
router.use('/patients', PatientsRoute);
router.use('/prescriptions', PrescriptionsRoute);
router.use('/doctors', DoctorsRoute);
router.use('/medicines', MedicinesRoute);

module.exports = router;
