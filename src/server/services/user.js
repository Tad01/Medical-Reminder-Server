
const { User } = require('../models');

module.exports = class {
  static async login(email, password) {
    return User.findOne({
      where: {
        email,
        password
      }
    });
  }

  static async loginPatient(patientCode, password) {
    return User.findOne({
      where: {
        patient_code: patientCode,
        password
      }
    });
  }
};
