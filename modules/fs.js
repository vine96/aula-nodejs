const { error } = require('console');
const fs = require('fs')
const path = require('path')

// Criar uma pasta
// fs.mkdir(path.join(__dirname, '/test'), (error) => {
//     if(error){
//         return console.log("Ocorreu o erro: ", error);
//     }
//     console.log("Pasta criada com sucesso!");
// })

// Criar um arquivo
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'hello node!', (error) => {
    if(error){
        return console.log("Ocorreu o erro: ", error);
    }
    console.log("Arquivo criado com sucesso!");

    // Adicionar conteúdo a um arquivo
    fs.appendFile(path.join(__dirname, '/test', 'test.txt'), ' hello word!', (error) => {
        if(error){
            return console.log("Erro encontrado: ", error);
        }
        console.log("Conteúdo adicionado com sucesso ao arquivo!");
    })

    // Ler arquivo
    fs.readFile(path.join(__dirname, '/test', 'test.txt'), 'utf8', (error, data) => {
        if(error){
            return console.log("Erro encontrado: ", error);
        }
        console.log("Conteúdo lido com sucesso!", data);
    })
})