// IMPORTAÇÃO DOS MÓDULOS
// importa o express
const express = require('express');
// importa a o config do banco
const db = require("./database/config");
//inporta o mongoose
const mongoose = require("mongoose");
// instancia o express e associa a variável app
const app = express();
//importa as rotas
const routes = require('./routes');


//CONFIGURAÇÔES
//config mongoose
mongoose.Promise = global.Promise;

app.use(express.urlencoded({extended:true}))
app.use(express.json());

mongoose.set('useCreateIndex', true);

//conectando ao banco de dados
mongoose.connect(db.uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
    //se conectar aparecerá mensagem de conectado
}).then(() => {
    console.log("Conectado ao MongoDB...")
    //se não conectar aparecerá mensagem de erro e com o erro
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao mongoDB: "+err)
});

//ROTAS
//grupo de rotas com prefixo / e const routes
app.use('/', routes);



//constante com a porta 8080
const PORT = 8080;
//faz a conexão
	app.listen(PORT, () => {
	    console.log("API Rodando na porta 8080! ");
	});

