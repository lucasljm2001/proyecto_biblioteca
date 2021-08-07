
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
async function categoria_agregar(req, res) {
  try {
    if (!req.body.categoria) {
      throw new Error("Debe ingresar una categoria");
    }
    const validacion = await query("select * from categrorias where categoria=?", [req.body.categoria]);
    if (validacion.length > 0) {
      throw new Error("Ya existe la categoria");
    }
    await query("insert into categrorias (categoria) values (?)",
    [req.body.categoria]);
    res.send({message: "categoria agregada con exito"});
    }catch (e) {
    //res.send("error fatal");
    res.status(403).send({ message: e.message});
    }
  }
async function categorias_mostrar(req, res) {
  try {
    const consulta = await query("select * from categrorias");
    return consulta;
  } catch (e) {
    res.status(403).send({ message: e.message});
  }
}
async function categoria_mostrar(req, res) {
  try {
    const consulta = await query("select * from categrorias where id=?", [req.params.id]);
    if (consulta.length == 0) {
      res.send({message: "la categoria no existe"});
    }else {
      return consulta[0];
    }
  } catch (e) {
    res.status(403).send({ message: e.message});
  }
}
async function categoria_borrar(req, res) {

}
async function persona_agregar(req, res) {

}
async function personas_mostrar(req, res) {

}
async function persona_mostrar(req, res) {

}
async function persona_modificar(req, res) {

}
async function persona_borrar(req, res) {
}
async function libro_agregar(req, res) {

}
async function libros_mostrar(req, res) {

}
async function libro_mostrar(req, res) {

}
async function libro_modificar(req, res) {

}
async function libro_prestar(req, res) {

}
async function libro_devolver(req, res) {

}
async function libro_borrar(req, res) {

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
