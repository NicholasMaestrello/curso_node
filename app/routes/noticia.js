module.exports = function(app){

  app.get('/noticia', function(req,res){

    app.config.dbConnection().query('SELECT * FROM noticias WHERE id_noticia = 1;', function(error, result){
      res.render('noticias/noticia', {noticia: result})
    })

  })
}
