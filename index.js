const express = require('express');
const app = express();
const port = 8000;


app.get('/:response', (req, res) => {
    return res.send(`${req.params.response}`);
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

