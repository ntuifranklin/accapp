const express = require('express');
const router = express.Router();
const error404Route = require('./error404');
const {FakeData} = require('../utilities/fake');

module.exports = () => {

    router.get('/', async(request, response) => {
        const fakeData = new FakeData();
        const transactions = await fakeData.getTransactions(10);
        response.render('layout', {
            template: 'index',
            page_title: 'Hi There! Accounting App',
            transactions: transactions,
        });

    });

    router.use('/*', error404Route());

    return router ;
} ;