const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)





//sempre start no mongo com comando mongod