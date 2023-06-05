const fs = require('fs')
const path = require('path')

// Criar uma pasta
fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if(error){
        return console.log("Ocorreu o erro: ", error);
    }
    console.log("Pasta criada com sucesso!");
})

// Criar um arquivo
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'hello node!', (error) => {
    if(error){
        return console.log("Ocorreu o erro: ", error);
    }
    console.log("Arquivo criado com sucesso!");
})