import express, { Router } from "express";
import bcrypt from "bcryptjs";
import UsersModel from "../models/UsersModel.js";

const router = express.Router();

router.get("/index", (req, res) => {
  res.render("index", { msg: "pepe" });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  const name = req.body.name;
  const user = req.body.user;
  const rol = req.body.rol;
  const pass = req.body.pass;
  let passwordHash = await bcrypt.hash(pass, 8);
  try {
    const crearUsuario = await UsersModel.create({
      name: name,
      user: user,
      rol: rol,
      pass: passwordHash
    });

    console.log(name, user, rol, pass, passwordHash);
    console.log("User:", JSON.stringify(user, null, 2));
    console.log("fin");
    
    res.render("register", {
      alert: true,
      alertTitle: "Registración",
      alertMessage: "Registración exitosa",
      alertIcon: "success",
      showConfirmButton: false,
      timer: 2500,
      ruta: "",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post("/auth", async (req, res) => {
  const user = req.body.user;
  const pass = req.body.pass;
  let passwordHash = await bcrypt.hash(pass, 8);
  // if (user && pass) { 
  //   connection.query('SELECT * FROM users WHERE user = ?', [user], async(error, results)=>{
  //     if (results.length ==0 || !(await bcrypt.compare(pass, results[0].pass))){
  //       res.send("USUARIO O PASSWORD INCORRECTA")
  //     }
  //   })
  // }

  if (user && pass) { 
    const usuario = await UsersModel.findAll({
      where: {
        user: req.body.user,
        //pass: passwordHash
      },
    });
 res.send("hola mundo")
  } else if (pass != passwordHash) {
    
    res.send("hola hola hola")
  }

})



/*
    try {
      const usuario = await UsersModel.findAll({
        where: {
          user: req.body.user,
          pass: req.body.pass
        },
      });
      if(!(await bcrypt.compare(pass, usuario.pass))) { 
        res.send("USUARIO O PASSWORD INCORRECTA")
      } else {
        res.send("login correcto " + user)
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
});
*/

export default router;
