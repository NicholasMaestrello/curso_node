module.exports = function(app){

  app.get('/noticia', function(req,res){
    let connection = app.config.dbConnection()
    let model = new app.app.models.NoticiasDAO(connection)

    model.getNoticia(function(error, result){
      res.render('noticias/noticia', {noticia: result})
    })

  })
}
