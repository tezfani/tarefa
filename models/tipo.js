const {DataTypes, Model} = require ('sequelize')
const sequelize = require('../bd')
class tipo extends Model{}
tipo.init({
    nome: {
        type: DataTypew.STRING(50),
        allowNull:false
    },
    andamento: {
        type: DataTypew.STRING(50),
        allowNull:false
    },
    concluido: {
        type: DataTypew.STRING,
        allowNull:false
    }
},{
    sequelize,
    modelName:'tipo'
})
sequelize.sync()
module.exports = tipo