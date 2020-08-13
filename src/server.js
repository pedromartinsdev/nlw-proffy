//servidor
const express = require('express')
const server = express()

const {
  pageLanding,
  pageStudy,
  pageGiveClasses
} = require('./pages')

//Configurar Nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// Início e configuração do servidor
server

// Configuração de arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))
  // Rotas da aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .listen(5500)