var express = require('express');
const service = require('./service');
const app = express.Router();
app.post('/', async (req, res) =>{
  await service.persona_agregar(req, res);
});
app.get('/', async (req, res) =>{
  const consulta = await service.personas_mostrar(req, res);
  res.json(consulta);
});
app.get('/:id', async (req, res) =>{
  const consulta = await service.persona_mostrar(req, res);
  res.json(consulta);
});
app.put('/:id', async (req, res) =>{
  const consulta = await service.persona_modificar(req, res);
  res.json(consulta);
});
app.delete('/:id', async (req, res) =>{
  await service.persona_borrar(req, res);

});
module.exports = app;
