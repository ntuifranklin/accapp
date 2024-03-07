const express = require('express');

const server = express();

server.set('view engine', 'ejs');
const path = require('path');
server.set('views', path.join(__dirname, './views'));
const routes = require('./routes');
const PORT = 8080;

const template_folder = 'static';
server.use(express.static(path.join(__dirname, `./${template_folder}`)));
server.use((request, response, next) => {



    return next();
});


server.use('/', routes());


server.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});
