const router = require('express').Router();
const EnvironmentRoute = require('./environment');
const AuthRoute = require('./auth');
const GardenRoute = require('./garden');
const PrescriptionRoute = require('./prescription');

router.get('/', async (req, res) => {
  res.send('hello API');
});

router.use('/environment', EnvironmentRoute);
router.use('/auth', AuthRoute);
router.use('/garden', GardenRoute);
router.use('/prescription', PrescriptionRoute);

module.exports = router;
