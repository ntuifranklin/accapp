const { faker } = require('@faker-js/faker');


class FakeData {

    constructor(){

    }
    


    async getTransactions() {
        return await this.getTransactions(number=20);
    }

    async getTransactions(number=1) {
        var transactions = [];
        var M = number ;
        if (M < 0)
            M=1 ;
        var i = 0 ;
        while (i < M) {
            transactions.push({
                "routingNumber": faker.finance.routingNumber(),
                "accountNumber" : faker.finance.accountNumber(),
                "accountName" : faker.finance.accountName(),
                "amount":faker.finance.amount({symbol:'$', autoFormat:true}),
                "transactionType":faker.finance.transactionType(),

            });
            i++;
        };

        return transactions ;
        
        
    };
};
exports.FakeData = FakeData ;