
const { User } = require('../models');
const { USER_TYPE } = require('../../shared/constants');

module.exports = class {
  static async getPatient(patientId) {
    return User.findOne({
      where: {
        id: patientId
      }
    })
      .then(patient => JSON.parse(JSON.stringify(patient)));
  }

  static async getPatientsByDoctor(doctorId) {
    return User.findAll({
      where: {
        id: doctorId
      },
      include: [
        { model: User, as: 'patient' }
      ]
    })
      .then(patients => JSON.parse(JSON.stringify(patients)));
  }

  static async createPatient({
    doctorId,
    name, 
    birthday, 
    gender, 
    patientCode,
    diagnose,
    phone, 
    address, 
    avatar, 
    password
  }) {
    return User.create({
      doctor_id: doctorId,
      name,
      birthday,
      gender,
      patient_code: patientCode,
      diagnose,
      phone,
      address,
      avatar,
      password,
      type: USER_TYPE.patient
    });
  }
};
