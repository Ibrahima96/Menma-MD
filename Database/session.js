const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const config = require('../config');

const Session = sequelize.define('Session', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    tableName: 'Session',
    timestamps: true,
});

(async () => {
    await Session.sync();
    console.log("Table 'Session' synchronisée avec succès.");

})();

module.exports = { session: Session };