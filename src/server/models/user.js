module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    avatar: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    access_token: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.INTEGER,
    address: DataTypes.STRING,
    birthday: DataTypes.DATE
  }, {
    underscored: true
  });
  User.associate = (models) => {
    User.hasMany(models.Prescription, { foreignKey: 'doctor_id' });
    User.hasMany(models.Prescription, { foreignKey: 'patient_id' });
  };
  return User;
};
