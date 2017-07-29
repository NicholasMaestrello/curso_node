var http = require('http');

http.createServer( function(req, res) {
  var categoria = req.url

  if(categoria == '/tecnologia'){
    res.end('<html><body>Tecnologia</body></html>')
  } else if (categoria == '/moda'){
    res.end('<html><body>moda</body></html>')
  } else {
    res.end('<html><body>Default</body></html>')
  }

}).listen(3000)
