const Sequelize = require('sequelize');

const sequelize = new Sequelize("pedidos", "root", "",{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticaate()
.then(function(){
    console.log("Conexao banco de dados realizado com sucesso!!");
}).cath(function(){
    console.log("Erro conexao banco de dados nao realizado com sucesso :(");
})

module.exports = sequelize;