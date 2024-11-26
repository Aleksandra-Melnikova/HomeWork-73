const express = require('express');
const app = express();
const port = 8000;

const Vigenere = require('caesar-salad').Vigenere;
const password = `Hello`;

app.get('/', (req, res) => {
    return res.send('Home page');
});

app.get('/:response', (req, res) => {
    return res.send(`${req.params.response}`);
});

app.get(`/encode/:password`, (req, res) => {
    return res.send(Vigenere.Cipher(`${password}`).crypt(`${req.params.password}`));
});

app.get(`/decode/:password`, (req, res) => {
    return res.send(Vigenere.Decipher(`${password}`).crypt(`${req.params.password}`));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


