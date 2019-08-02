module.exports = (sequelize, DataTypes) => {
  const MedicinePrescription = sequelize.define('medicine_prescriptions', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    amount: DataTypes.DECIMAL,
    time: DataTypes.ARRAY(DataTypes.JSON)
    /**
     * [
     *  {
     *    "amount": 1
     *    "time": "7:00"
     *    "description": "Uống ít thôi"
     *  },
     *  {
     *    "amount": 2
     *    "time": "18:00"
     *    "description": "Ngủ trước khi uống"
     *  }
     * ]
     */
  }, {
    underscored: true
  });
  MedicinePrescription.associate = (models) => {
    MedicinePrescription.belongsTo(models.Medicine, { foreignKey: 'medicine_id' });
    MedicinePrescription.belongsTo(models.Prescription, { foreignKey: 'prescription_id' });
  };
  return MedicinePrescription;
};
  