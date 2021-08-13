var express = require('express');
const service = require('./service');
const app = express.Router();
app.post('/', async (req, res) =>{
  await service.libro_agregar(req, res);
});
app.get('/', async (req, res) =>{
  const consulta = await service.libros_mostrar(req, res);
  res.json(consulta);
});
app.get('/:id', async (req, res) =>{
  const consulta = await service.libro_mostrar(req, res);
  res.json(consulta);
});
app.put('/:id', async (req, res) =>{
  const consulta = await service.libro_modificar(req, res);
  res.json(consulta);
});
app.put('/prestar/:id', async (req, res) =>{
  await service.libro_prestar(req, res);
});
app.put('/devolver/:id', async (req, res) =>{
  await service.libro_devolver(req, res);

});
app.delete('/:id', async (req, res) =>{
  await service.libro_borrar(req, res);

});
module.exports = app;
