const express = require('express');
const app = express();
const port = 8000;

const Vigenere = require('caesar-salad').Vigenere;
const password = `Hello`;

// Vigenere.Cipher('password').crypt('abc-0123456789@example.com');
// Vigenere.Decipher('password').crypt('pbu-0123456789@wtodsae.ugi');

app.get('/', (req, res) => {
    return res.send('Home page');
})

app.get('/:response', (req, res) => {
    return res.send(`${req.params.response}`);
});

app.get(`/encode/:password`, (req, res) => {
    return res.send(Vigenere.Cipher(`${password}`).crypt(`${req.params.password}`))
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


