module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    gender: DataTypes.BOOLEAN,
    patient_code: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    avatar: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.INTEGER,
    specialist: DataTypes.STRING
  }, {
    underscored: true
  });
  User.associate = (models) => {
    User.hasMany(models.Prescription, { foreignKey: 'doctor_id' });
    User.hasMany(models.Prescription, { foreignKey: 'patient_id' });
    User.hasMany(models.User, { foreignKey: 'doctor_id', as: 'patient' });
  };
  return User;
};
