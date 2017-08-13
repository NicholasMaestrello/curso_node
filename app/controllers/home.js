module.exports.index = function (app, req, res) {
    let connection = app.config.dbConnection()
    let noticiasModel = new app.app.models.NoticiasDAO(connection)

    noticiasModel.get5UltimasNoticias(function (err, result) {
        res.render('home/index', {noticias: result})
    })
}