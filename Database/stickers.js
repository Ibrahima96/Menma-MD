const { DataTypes } = require('sequelize');
const sequelize = require('./db');
const config = require('../config');

const StickerCommand = sequelize.define('StickerCommand', {
    hash: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    cmdName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'StickerCommands',
    timestamps: false,
});

(async () => {
    await StickerCommand.sync();
    console.log("Table 'StickerCommand' synchronisée avec succès.");
})();

module.exports = { StickerCommand };
