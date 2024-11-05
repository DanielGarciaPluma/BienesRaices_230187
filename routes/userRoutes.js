import express, { Router } from "express";
import { formularioLogin, formularioRegister,formularioPasswordRecovery } from "../controllers/userController.js";
const router = express.Router();

//GET
//EndPoints - Son las rutas para acceder alas secciones o funciones de nuestra apliacion web
//2 componente de una peticion ruta (a donde voy), funcion calback (que hago)
// ":" en una ruta define de manera posicional los parametros de entradas  
router.get("/findByID/:id",function (request, response){
    response.send(`Se estasolicitando buscar al usuario con ID: ${request.params.id}`);
})

//POST-  se utiliza para el envio de datos e informacion del cliente al servidor
router.post("/newUser/:name/:email/:password", function(req,res){
    res.send(`Se ha soliciatdo la creacion de un nuevo usuariode nombre: ${req.params.name}, asociado al correo electronico ${req.params.email} con la contraseña: ${req.params.password}`);
});

//PUT - Se utiliza para la actualizacion total de informacion  del cliente al servidor
router.put("/replaceUser/:name/:email/:password", function(a,b){
    b.send(`Se ha soliciatdo el remplazo de toda la informacion del usuario  ${a.params.name}, con correo: ${a.params.email} y contraseña: ${a.params.password}`)
})

//PATCH - Se utiliza para la actualizacion parcial
router.patch(
    "/updatePassword/:email/:newPassword/:newPasswordConfirm",
    function (req, res) {
      const { email, newPassword, newPasswordConfirm } = req.params; // Desestructuramos correctamente
  
      // Comparamos las contraseñas
      if (newPassword === newPasswordConfirm) {
        res.send(`Se ha solicitado la actualizacion de la contraseña del usuario con correo: ${email}, se aceptan los cambios ya que la contrasena y confirmacion son la misma.`);
      } else {
        res.send(`Se ha solicitado la actualización de contraseña del usuario con correo: ${email}, con la nueva contraseña: ${newPasswordConfirm}, pero se rechaza el cambio dado que la nueva contrasena y su confirmacion no coincide`);
      }
    }
  );

//DELETE - 
router.delete("/deleteUser/:email", function(request, response){
    response.send(`Se ha soliciatdo la eliminacion del usuario asociado al correo ${request.params.email}`)
})

router.get('/login',formularioLogin/*middleware*/)
router.get('/createAccount', formularioRegister)
router.get('/passwordRecovery',formularioPasswordRecovery)

export default router;
