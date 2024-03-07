const express = require('express');
const router = express.Router();

module.exports = () => {

    router.get('/*', (request, response) => {

        response.render('layout', {
            template: 'error404',
            page_title: 'Error 404.'
        });

    });

    
    router.post('/*', (request, response) => {

        response.render('layout', {
            template: 'error404',
            page_title: 'Error 404.'
        });

    });

    return router ;
} ;