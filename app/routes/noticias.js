let dbConnection = require('../../config/dbConnection')
module.exports = function(app){
  app.get('/noticias', function(req,res){

    dbConnection().query('SELECT * FROM noticias', function(error, result){
      res.render('noticias/noticias', {noticias: result})
    });

  })
}
