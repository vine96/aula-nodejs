const express = require('express')

const app = express();

app.get('/home', (req, res) => {
    res.contentType('.html');
    res.status(200).send('<h1>Hello World NodeJS!</h1>');
});

app.get('/users', (req, res) => {
    const users = [
        {
            name: 'Alfredo Menezes',
            email: 'amtrosul@hotmail.com'
        },
        {
            name: 'Jurema Bittencurt',
            email: 'juremarosario@hotmail.com'
        }
    ];
    res.status(200).json(users);
});

const port = 8080;
app.listen(port, () => console.log(`Rodando o servidor com Express na porta ${port}`));