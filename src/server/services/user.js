
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
};
