const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.ksjulnz.mongodb.net/database?retryWrites=true&w=majority`)
    .then(console.log("Conexão efetuada com sucesso!"))
    .catch(error => {
        console.log('Ocorreu um erro ao realizar a conexão! Erro: ', error)
    })};

module.exports = connectToDatabase;