module.exports = (sequelize, DataTypes) => {
  const Prescription = sequelize.define('prescriptions', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    diagnose: DataTypes.TEXT,
    description: DataTypes.STRING
  }, {
    underscored: true
  });
  Prescription.associate = (models) => {
    Prescription.belongsToMany(models.Medicine, {
      through: models.MedicinePrescription,
      foreignKey: 'prescription_id',
      otherKey: 'medicine_id'
    });
    Prescription.belongsTo(models.User, { foreignKey: 'doctor_id', as: 'doctor' });
    Prescription.belongsTo(models.User, { foreignKey: 'patient_id', as: 'patient' });
  };
  return Prescription;
};
  