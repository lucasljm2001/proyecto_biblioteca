var mysql = require('mysql');
const util = require('util');
var conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "biblioteca",
});
conexion.connect();
const query = util.promisify(conexion.query).bind(conexion);
function categoria_agregar() {

}
function categorias_mostrar() {

}
function categoria_mostrar() {

}
function categoria_borrar() {

}
function persona_agregar() {

}
function personas_mostrar() {

}
function persona_mostrar() {

}
function persona_modificar() {

}
function persona_borrar() {
}
function libro_agregar() {

}
function libros_mostrar() {

}
function libro_mostrar() {

}
function libro_modificar() {

}
function libro_prestar() {

}
function libro_devolver() {

}
function libro_borrar() {

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
