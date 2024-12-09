const express = require('express');
const routes = require('../routes/routes');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
