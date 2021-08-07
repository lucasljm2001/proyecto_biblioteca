var express = require('express');
const service = require('./service');
const app = express.Router();
app.post('/', async (req, res) =>{
  await service.categoria_agregar(req, res);
});
app.get('/', async (req, res) =>{
  const consulta = await service.categorias_mostrar(req, res);
  res.json(consulta);
});
app.get('/:id', async (req, res) =>{
  const consulta = await service.categoria_mostrar(req, res);
  res.json(consulta);
});
module.exports = app;
