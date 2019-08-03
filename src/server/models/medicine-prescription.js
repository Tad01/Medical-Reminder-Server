module.exports = (sequelize, DataTypes) => {
  const MedicinePrescription = sequelize.define('medicine_prescriptions', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    amount: DataTypes.INTEGER,
    time: DataTypes.ARRAY(DataTypes.JSON) // [1,2,3]
  }, {
      underscored: true
    });
  MedicinePrescription.associate = (models) => {
    MedicinePrescription.belongsTo(models.Medicine, { foreignKey: 'medicine_id' });
    MedicinePrescription.belongsTo(models.Prescription, { foreignKey: 'prescription_id' });
  };
  return MedicinePrescription;
};
