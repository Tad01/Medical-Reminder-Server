module.exports = (sequelize, DataTypes) => {
  const Medicine = sequelize.define('medicines', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    code: DataTypes.STRING
  }, {
    underscored: true
  });
  Medicine.associate = (models) => {
    Medicine.belongsToMany(models.Prescription, {
      through: models.MedicinePrescription,
      foreignKey: 'medicine_id',
      otherKey: 'prescription_id'
    });
  };
  return Medicine;
};
  