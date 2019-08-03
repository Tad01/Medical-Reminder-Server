const { User } = require('../models');
// const { USER_TYPE } = require('../../shared/constants');

module.exports = class {
  static async getDoctor(doctorId) {
    if (!doctorId) return null;
    return User.findOne({
      where: {
        id: +doctorId
      }
    })
      .then(doctor => JSON.parse(JSON.stringify(doctor)));
  }
};