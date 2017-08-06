module.exports = function(app){

  app.get('/noticia', function(req,res){
    let connection = app.config.dbConnection()
    let model = app.app.models.noticiasModel

    model.getNoticia(connection, function(error, result){
      res.render('noticias/noticia', {noticia: result})
    })

  })
}
