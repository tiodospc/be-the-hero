const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

/*
Query params: Paramentros nomeados enviados na rota apos "?" (Filtros, paginacao)
Route params: Paramentros utilizados para identificar recursos
Request Body: Corpo da requisição utilizado para criar e alterar
*/
