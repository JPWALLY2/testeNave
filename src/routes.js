// IMPORTAÇÃO DOS MÓDULOS
// importa o express
const express = require("express");
// inportar o método Router do express
const router = express.Router();
//inportar o UserController
const UserController = require("./app/controller/UserController");
//inportar o NaverController
const NaverController = require("./app/controller/NaverController");
//inportar o ProjectController
const ProjectController = require("./app/controller/ProjectController");
//impotar o middleware
const authMiddleware = require('./middlewares/auth');

//ROTAS USERS
//rota POST que adiciona dados ao banco que terá a função store
router.post("/signup", UserController.store);
//rota GET que busca os dados do banco que terá a função index
router.get("/users", UserController.index);
//rota POST que busca os dados do banco que terá a função index
router.post("/login", UserController.login);

//chama o middleware
router.use(authMiddleware);

// //ROTAS NAVERS
//rota POST que adiciona dados ao banco que terá a função store
router.post("/store", NaverController.store);
//rota GET que adiciona dados ao banco que terá a função show
router.get("/show/:id", NaverController.show);
//rota GET que busca os dados do banco que terá a função index
router.get("/index/:name", NaverController.index);
//rota PUT que busca os dados do banco que terá a função update
router.put("/update/:id", NaverController.update);
//rota DELETE que busca os dados do banco que terá a função delete
router.delete("/delete/:id", NaverController.delete);


//ROTAS PROJECTS
//rota POST que adiciona dados ao banco que terá a função store
router.post("/project/store", ProjectController.store);
//rota GET que adiciona dados ao banco que terá a função show
router.get("/project/show/:id", ProjectController.show);
//rota GET que busca os dados do banco que terá a função index
router.get("/project/index/:name", ProjectController.index);
//rota PUT que busca os dados do banco que terá a função update
router.put("/project/update/:id", ProjectController.update);
//rota DELETE que busca os dados do banco que terá a função delete
router.delete("/project/delete/:id", ProjectController.delete);

//exportando o modulo
module.exports = router;
