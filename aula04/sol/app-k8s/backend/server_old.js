const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Olá do backend via Kubernetes!');
});

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});
