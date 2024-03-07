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
                "date":faker.date.past(),
                "routingNumber": faker.finance.routingNumber(),
                "accountNumber" : faker.finance.accountNumber(),
                "accountName" : faker.finance.accountName(),
                "amount":faker.finance.amount({symbol:'$', autoFormat:true}),
                "type":faker.finance.transactionType(),
                "description": faker.finance.transactionDescription(),
                "transactionID": faker.number.int({ min: 10000, max: 99999 }),
                "bankName": faker.company.name() + " Bank",

            });
            //console.log(`${transactions[i].type}`);
            i++;
        };

        return transactions ;
        
        
    };
};
exports.FakeData = FakeData ;