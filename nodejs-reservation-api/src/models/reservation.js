module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    guests: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    contactInfo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'reservations',
    timestamps: true,
  });

  return Reservation;
};