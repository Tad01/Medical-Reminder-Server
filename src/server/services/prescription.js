
const { Prescription, Medicine, User, MedicinePrescription } = require('../models');
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

  static async createPrescription({
    doctorId = null,
    patientId = null,
    diagnose = '',
    description = '',
    medicines = []
  }) {
    const prescription = await Prescription.create({
      doctor_id: +doctorId,
      patient_id: +patientId,
      diagnose,
      description
    });

    const medPres = await Promise.all(
      medicines.map(async (med) => {
        const med1 = await Medicine.findOne({
          where: {
            code: med.code
          }
        });
        return MedicinePrescription.create({
          medicine_id: med1.id,
          prescription_id: prescription.id,
          amount: +med.amount,
          time: [+med.time1, +med.time2, +med.time3]
        });
      })
    );
    prescription.medicine_prescriptions = medPres;

    return prescription;
  }
};
