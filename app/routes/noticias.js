module.exports = function(app){

  app.get('/noticias', function(req,res){
    let connection = app.config.dbConnection()
    let model = new app.app.models.NoticiasDAO(connection)

    model.getNoticias(function(error, result){
      res.render('noticias/noticias', {noticias: result})
    })

  })
}
