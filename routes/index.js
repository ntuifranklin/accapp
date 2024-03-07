const express = require('express');
const router = express.Router();
const error404Route = require('./error404');
const {FakeData} = require('../utilities/fake');

module.exports = () => {

    router.get('/', async(request, response) => {
        const fakeData = new FakeData();
        const transactions = await fakeData.getTransactions(100);
        response.render('layout', {
            template: 'index',
            page_title: "AccApp: The World's Best Accounting App",
            transactions: transactions,
        });

    });

    router.use('/*', error404Route());

    return router ;
} ;