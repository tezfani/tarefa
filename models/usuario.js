const {DataTypes, Model} = require ('sequelize')
const sequelize = require('../bd')
class usuario extends Model{}
usuario.init({
    nome: {
        type: DataTypew.STRING(50),
        allowNull:false
    },
    email: {
        type: DataTypew.STRING(50),
        allowNull:false
    },
    senha: {
        type: DataTypew.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName:'usuario'
})
sequelize.sync()
module.exports = usuario