const model = require('./model');
function categoria_agregar(req, res) {
  return model.categoria_agregar(req, res);
}
function categorias_mostrar(req, res){
  return model.categorias_mostrar(req, res);
}
function categoria_mostrar(req, res) {
  return model.categoria_mostrar(req, res);
}
function categoria_borrar(req, res) {
  return model.categoria_borrar(req, res);
}
function persona_agregar(req, res) {
  return model.persona_agregar(req, res);
}
function personas_mostrar(req, res) {
  return model.personas_mostrar(req, res);
}
function persona_mostrar(req, res) {
  return model.persona_mostrar(req, res);
}
function persona_modificar(req, res) {
  return model.persona_modificar(req, res);
}
function persona_borrar(req, res) {
  return model.persona_borrar(req, res);
}
function libro_agregar(req, res) {
  return model.libro_agregar(req, res);
}
function libros_mostrar(req, res) {
  return model.libros_mostrar(req, res);
}
function libro_mostrar(req, res) {
  return model.libro_mostrar(req, res);
}
function libro_modificar(req, res) {
  return model.libro_modificar(req, res);
}
function libro_prestar(req, res) {
  return model.libro_prestar(req, res);
}
function libro_devolver(req, res) {
  return model.libro_devolver(req, res);
}
function libro_borrar(req, res) {
  return model.libro_borrar(req, res);
}
module.exports ={
  categoria_agregar,
  categorias_mostrar,
  categoria_mostrar,
  categoria_borrar,
  persona_agregar,
  personas_mostrar,
  persona_mostrar,
  persona_modificar,
  persona_borrar,
  libro_agregar,
  libros_mostrar,
  libro_mostrar,
  libro_modificar,
  libro_prestar,
  libro_devolver,
  libro_borrar
};
