module.exports = {
    noticias: function (app, req, res) {
        let connection = app.config.dbConnection()
        let model = new app.app.models.NoticiasDAO(connection)

        model.getNoticias(function (error, result) {
            res.render('noticias/noticias', { noticias: result })
        })
    },
    noticia: function (app, req, res) {
        let connection = app.config.dbConnection()
        let model = new app.app.models.NoticiasDAO(connection)

        model.getNoticia(function (error, result) {
            res.render('noticias/noticia', { noticia: result })
        })

    }
}