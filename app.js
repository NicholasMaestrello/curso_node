let app = require('./config/server.js')

let rotaNoticia = require('./app/routes/noticias')
let rotaHome = require('./app/routes/home')
let rotaFormularioInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')

rotaHome(app)
rotaNoticia(app)
rotaFormularioInclusaoNoticia(app)

app.listen(3000, function(){
  console.log('Servidor funcionandfaceo na 3000')
})
