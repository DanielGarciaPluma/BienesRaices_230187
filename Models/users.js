import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import db from '../db/config.js';

const User = db.define('Users', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    birthDate: { 
        type: DataTypes.DATE,
        allowNull: true, 
    },
    token: DataTypes.STRING,
    confirm: DataTypes.BOOLEAN,
}, {
    hooks: {
        beforeCreate: async (user) => {
            // Encriptar la contraseña antes de crear el usuario
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
        },
        beforeUpdate: async(user) => {
            if (user.password && user.password.trim() !== ''){
                user.password = await bcrypt.hash(user.password, 10);
            }
            
        } 
    }
});

export default User;
