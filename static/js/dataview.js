$(document).ready(() => {

    const resultDivTableID = 'dataInTableView'; 
    const resultDivCardID = 'dataInCardView'; 
    $('#tableView').click(async()=>{
        await $(`#${resultDivTableID}`).show();
        console.log('Tabular View Requested');
        
        //$('#'+resultDivID).html('<p>Place Table Here Here </p>');
        $(`#${resultDivCardID}`).hide();
    });


    //When you click on card view, you make table view dissapear
    $('#cardView').click(async ()=>{
        $(`#${resultDivCardID}`).show();
        
        //console.log('Aggregated View Requested');
        
        var stackHtml = `` ;
        for (var i = 0 ; i < allTransactions.length ; i++) {
            var t = await JSON.parse(JSON.stringify(allTransactions[i])) ;
            stackHtml += `\n`;
            stackHtml += `\t<div class="row">\n`;
            stackHtml += `\t\t<div class="col-sm-12">\n`;
            stackHtml += `\t\t\t<div class="card">\n`;

            stackHtml += `\t\t\t\t<div class="card-header">\n`;
            stackHtml += `
            \n\t\t\t\t\t<svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1">
            \n\t\t\t\t\t\t<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            \n\t\t\t\t\t</svg>
            Account Name: ${t["accountName"]}
            \n`;
            stackHtml += `
                \n<ul class="list-group list-group-flush">
                <li class="list-group-item">Bank Name: ${t["bankName"] } </li>
                <li class="list-group-item">Routing No: ${t["routingNumber"]} </li>
                <li class="list-group-item">Account No: ${t["accountNumber"]} </li>
                <li class="list-group-item">Transaction Type:  ${ t["type"] }</li>
                </ul>\n`;
           
            stackHtml += `\t\t\t\t</div>\n`;
            
            stackHtml += `\t\t\t\t<div class="card-footer">\n`;
            stackHtml += `\t\t\t\t\tTransaction Amount: ${t["amount"]}\n`;
            stackHtml += `\t\t\t\t</div>\n`;
            stackHtml += `\t\t\t</div>\n`;
            stackHtml += `\t\t</div>\n`;
            stackHtml += `\t</div>\n`;

            //Add a horizontal line 
            stackHtml += 
            `<div class="row">\n
                <div class="col-md-12">\n
                    \t<hr>\n
                </div>\n
            </div>\n`;
            
        } ;

        await $(`#${resultDivCardID}`).html(`${stackHtml}`);
        
        $(`#${resultDivTableID}`).hide();
    });
});