const express = require('express');
const cors = require('cors');  // Adicionado
const app = express();
const port = 3000;

app.use(cors());  // Permite todas as origens

app.get('/', (req, res) => {
  res.send('Olá do backend via Kubernetes!');
});

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});

