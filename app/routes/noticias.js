module.exports = function(app){

  app.get('/noticias', function(req,res){
    let connection = app.config.dbConnection()
    let model = app.app.models.noticiasModel

    model.getNoticias(connection, function(error, result){
      res.render('noticias/noticias', {noticias: result})
    })

  })
}
