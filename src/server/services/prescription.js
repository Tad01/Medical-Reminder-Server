
const { Prescription, Medicine, User } = require('../models');
const SerializerFactory = require('../serializers/serializer-factory');

module.exports = class {
  static async getAll() {
    return Prescription.findAll({
      include: [
        { model: Medicine },
        { model: User, as: 'doctor' },
        { model: User, as: 'patient' }
      ]
    })
      .then(prescriptions => SerializerFactory.get('prescriptions').serialze(prescriptions));
  }
};
