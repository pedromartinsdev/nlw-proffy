//servidor
const express = require('express')
const server = express()

const {
  pageLanding,
  pageStudy,
  pageGiveClasses,
  saveClasses  
} = require('./pages')

//Configurar Nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// Início e configuração do servidor
server
  // Receber dados do req.body
  .use(express.urlencoded({ extended: true }))
  // Configuração de arquivos estáticos (css, scripts, imagens)
  .use(express.static("public"))
  // Rotas da aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .post("/save-classes", saveClasses)
  //start do servidor
  .listen(5500)