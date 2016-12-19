const micro  = require('micro');

function serverListener(req, res) {
  res.writeHead(200);
  res.end('Hello');

};

const microSrv = micro(serverListener);

module.exports = microSrv.listen(4000);
