const proffys = [
  {
    name: "Pedro Henrique",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "64981074459",
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Química",
    cost: "20",
    weekday: [0],
    time_from: [720],
    time_to: [1220],

  },
  {
    name: "Daniela Nunes Lima",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "64981074459",
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    subject: "Marketing",
    cost: "200",
    weekday: [1],
    time_from: [720],
    time_to: [1220],

  }
]

function pageLanding(req, res) {
  return res.render("index.html")
}

function pageStudy(req, res) {
  return res.render("study.html", { proffys })
}

function pageGiveClasses(req, res) {
  return res.render("give-classes.html")
}

//Configurar Nunjucks
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// Configuração de arquivos estáticos
server.use(express.static("public"))
  // Rotas da aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .listen(5500)