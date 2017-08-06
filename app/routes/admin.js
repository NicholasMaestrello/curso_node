module.exports = function (app) {
  app.get('/formulario_inclusao_noticia', function (req, res) {
    res.render('admin/form_add_noticia')
  })

  app.post('/noticias/salvar', function (req, res) {
    let noticia = req.body

    let connection = app.config.dbConnection()
    let model = app.app.models.noticiasModel

    model.salvarNoticia(noticia, connection, function (error, result) {
      res.redirect('/noticias')
    })
  })

}
