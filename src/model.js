
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
  try {
    const consulta = await query("select * from categrorias where id=?", [req.params.id]);
    if (consulta.length == 0) {
      res.send({message: "no existe la categoria indicada"});
    } else {
      const borrado = await query("delete from categrorias where id=?", [req.params.id]);
      res.json({mensaje: "se borro correctamente"})
      return borrado;
    }
  } catch (e) {
    res.status(403).send({ message: e.message});
  }
}
async function persona_agregar(req, res) {
  try {
    if (!req.body.nombre || !req.body.apellido || !req.body.alias || !req.body.mail) {
      throw new Error("faltan datos");
    }
    const validacion = await query("select * from persona where mail=?", [req.body.mail]);
    if (validacion.length > 0) {
      throw new Error("el email ya se encuentra registrado");
    }
    await query("insert into persona (nombre, apellido, mail, alias) values (?, ?, ?, ?)",
    [req.body.nombre, req.body.apellido, req.body.mail, req.body.alias ]);
    res.send({message: "persona agregada con exito"});
    }catch (e) {
    //res.send("error fatal");
    res.status(403).send({ message: e.message});
    }
  }
async function personas_mostrar(req, res) {
  try {
    const consulta = await query("select * from persona");
    return consulta;
  } catch (e) {
    res.status(403).send({ message: e.message});
  }
}
async function persona_mostrar(req, res) {
  try {
    const consulta = await query("select * from persona where id=?", [req.params.id]);
    if (consulta.length == 0) {
      res.send({message: "la persona no existe"});
    }else {
      return consulta[0];
    }
  } catch (e) {
    res.status(403).send({ message: e.message});
  }
}
async function persona_modificar(req, res) {
  try {
    const consulta = await query("select * from persona where id=?", [req.params.id]);
    const email = await query("select mail from persona where id=?", [req.params.id]);
    if (consulta.length == 0) {
      res.send({message: "no se encuentra esa persona"});
      //falta validar que no se cambie el mail
    }else {
      await query("UPDATE persona SET nombre = ?, apellido = ?, alias = ? WHERE id = ?", [req.body.nombre, req.body.apellido, req.body.alias, req.params.id]);
      const actualizado = await query("select * from persona where id=?", [req.params.id]);
      return actualizado[0];
    }
  } catch (e) {
    res.status(403).send({ message: e.message});
  }
}
async function persona_borrar(req, res) {
  try {
    const consulta = await query("select * from persona where id=?", [req.params.id]);
    const libro = await query("select * from libros where persona_id=?", [req.params.id]);
    if (consulta.length == 0) {
      res.send({message: "no existe la persona indicada"});
    }
    if (libro.length > 0) {
      res.send({message: "esa persona tiene libros asociados, no se puede eliminar"});
    } else {
      const borrado = await query("delete from persona where id=?", [req.params.id]);
      res.json({mensaje: "se borro correctamente"})
      return borrado;
    }
  } catch (e) {
    res.status(403).send({ message: e.message});
  }
}
async function libro_agregar(req, res) {
  try {
    if (!req.body.nombre || !req.body.categoria_id) {
      throw new Error("nombre y categoria son datos obligatorios");
    }
    const validacion = await query("select * from libros where nombre=?", [req.body.nombre]);
    if (validacion.length > 0) {
      throw new Error("ese libro ya existe");
    }
    if (req.body.persona_id) {
      const gente = await query("select * from persona where id=?", [req.body.persona_id]);
      if (gente.length == 0) {
        throw new Error("no existe la persona indicada");
      }
    }
    const categoria = await query("select * from categrorias where id=?", [req.body.categoria_id]);
    if (categoria.length == 0) {
      throw new Error("no existe la categoria indicada");
    }
    await query("insert into libros (nombre, descripcion, categoria_id, persona_id) values (?, ?, ?, ?)",
    [req.body.nombre, req.body.descripcion, req.body.categoria_id, req.body.persona_id]);
    res.send({message: "libro agregado con exito"});
    }catch (e) {
    //res.send("error fatal");
    res.status(403).send({ message: e.message});
    }
}
async function libros_mostrar(req, res) {
  try {
    const consulta = await query("select * from libros");
    return consulta;
  } catch (e) {
    res.status(403).send({ message: e.message});
  }
}
async function libro_mostrar(req, res) {
  try {
    const consulta = await query("select * from libros where id=?", [req.params.id]);
    if (consulta.length == 0) {
      res.send({message: "el libro no existe"});
    }else {
      return consulta[0];
    }
  } catch (e) {
    res.status(403).send({ message: e.message});
  }
}
async function libro_modificar(req, res) {
  try {
    const consulta = await query("select * from libros where id=?", [req.params.id]);
    if (consulta.length == 0) {
      res.send({message: "no se encuentra ese libro"});
    }
    if (req.body.nombre || req.body.categoria_id || req.body.persona_id ) {
      res.send({message: "solo se puede modificar la descripcion del libro"});
    } else {
      await query("UPDATE libros SET descripcion = ? WHERE id = ?", [req.body.descripcion, req.params.id]);
      const actualizado = await query("select * from libros where id=?", [req.params.id]);
      return actualizado[0];
    }
  } catch (e) {
    res.status(403).send({ message: e.message});
  }
}
async function libro_prestar(req, res) {
  try {
    const consulta = await query("select * from libros where id=?", [req.params.id]);
    const prestado = await query("select persona_id from libros where id=?", [req.params.id]);
    const persona = await query("select * from persona where id=?", [req.body.persona_id]);
    if (consulta.length == 0) {
       return res.send({message: "no se encuentra ese libro"});
    }
    if (prestado[0].persona_id != null) {
       return res.send({message: "el libro ya se encuentra prestado, no se puede prestar hasta que no se devuelva"});

    }
    if (persona.length == 0) {
      return res.send({message: "no se encontro la persona a la que se quiere prestar el libro"});
    }else {
      await query("UPDATE libros SET persona_id = ? WHERE id = ?", [req.body.persona_id, req.params.id]);
       return res.send({message: "se presto correctamente"});
    }
  } catch (e) {
    res.status(403).send({ message: e.message});
  }
}
async function libro_devolver(req, res) {
  try {
    const consulta = await query("select * from libros where id=?", [req.params.id]);
    const prestado = await query("select persona_id from libros where id=?", [req.params.id]);
    if (consulta.length == 0) {
       return res.send({message: "ese libro no existe"});
    }
    if (prestado[0].persona_id == null) {
       return res.send({message: "ese libro no estaba prestado!"});

    }else {
      await query("UPDATE libros SET persona_id = ? WHERE id = ?", [null, req.params.id]);
       return res.send({message: "se realizo la devolucion correctamente"});
    }
  } catch (e) {
    res.status(403).send({ message: e.message});
  }
}
async function libro_borrar(req, res) {
  try {
    const consulta = await query("select * from libros where id=?", [req.params.id]);
    const prestado = await query("select persona_id from libros where id=?", [req.params.id]);
    if (consulta.length == 0) {
       return res.send({message: "no se encuentra ese libro"});
    }
    if (prestado[0].persona_id != null) {
       return res.send({message: "ese libro esta prestado no se puede borrar"});

    }else {
      await query("delete from libros where id=?", [req.params.id]);
       return res.send({message: "se borro correctamente"});
    }
  } catch (e) {
    res.status(403).send({ message: e.message});
  }
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
