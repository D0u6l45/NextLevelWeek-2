
//Servidor
const express = require("express");
const server = express();

const {pageLanding,pageStudy,pageGiveClasses, saveClasses, sucess} = require("./pages")

const nunjucks = require("nunjucks")
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
 })

 


 
server
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//receber os dados do req.body
.use(express.urlencoded({extended: true}))


.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/saveClasses", saveClasses)
.get("/sucess", sucess)
.listen(5500)