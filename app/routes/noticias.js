module.exports = function(app){

  app.get('/noticias', function(req,res){

    app.config.dbConnection().query('SELECT * FROM noticias', function(error, result){
      res.render('noticias/noticias', {noticias: result})
    })

  })
}
