module.exports = function (app) {
  app.get('/formulario_inclusao_noticia', function (req, res) {
    res.render('admin/form_add_noticia', {validacao : {}, noticia: {}})
  })

  app.post('/noticias/salvar', function (req, res) {
    let noticia = req.body

    req.assert('titulo', 'Título é obrigatorio').notEmpty()
    req.assert('resumo', 'Resumo é obrigatorio').notEmpty()
    req.assert('resumo', 'Título deve conter entre 10 e 100 caracteres').len(10, 100)
    req.assert('autor', 'Autor é obrigatorio').notEmpty()
    req.assert('data_noticia', 'Data é obrigatorio').notEmpty().isDate({ format: 'YYYY-MM-DD' })
    req.assert('noticia', 'Noticia é obrigatorio').notEmpty()

    let errors = req.validationErrors()
    console.log(errors)
    if (errors) {
      res.render('admin/form_add_noticia', {validacao: errors, noticia: noticia})
      return
    }

    let connection = app.config.dbConnection()
    let model = new app.app.models.NoticiasDAO(connection)

    model.salvarNoticia(noticia, function (error, result) {
      res.redirect('/noticias')
    })
  })

}
