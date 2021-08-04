const model = require('./model');
function categoria_agregar() {
  return model.categoria_agregar();
}
function categorias_mostrar(){
  return model.categorias_mostrar();
}
function categoria_mostrar() {
  return model.categoria_mostrar();
}
function categoria_borrar() {
  return model.categoria_borrar();
}
function persona_agregar() {
  return model.persona_agregar();
}
function personas_mostrar() {
  return model.personas_mostrar();
}
function persona_mostrar() {
  return model.persona_mostrar();
}
function persona_modificar() {
  return model.persona_modificar();
}
function persona_borrar() {
  return model.persona_borrar();
}
function libro_agregar() {
  return model.libro_agregar();
}
function libros_mostrar() {
  return model.libros_mostrar();
}
function libro_mostrar() {
  return model.libro_mostrar();
}
function libro_modificar() {
  return model.libro_modificar();
}
function libro_prestar() {
  return model.libro_prestar();
}
function libro_devolver() {
  return model.libro_devolver();
}
function libro_borrar() {
  return model.libro_borrar(); 
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
