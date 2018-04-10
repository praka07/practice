var express = require('express');
var https = require('https');
var app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
    
     var options = {
        host: 'www.klm.com',
        port: 443,
        path: '/flightstatus/api/flight-status-fn/20180407+KL+1001',
        method: 'GET',


    };
    console.log(`before call execution` + options);

    var req = https.request(options, function (res) {
        res.setEncoding('utf8');
        var returnData = "";

        console.log(`res.statusCode :: ${res.statusCode}`);
        res.on('data', chunk => { returnData += chunk; });
        res.on('end', () => {
            console.log("Response:::" + returnData);
         //  callback(returnData);

        }).on("error", (err) => { console.log(`error :::::::${err.message}`) });
        console.log(`after call execution`);

    });
    req.end();
 
    
});
app.listen(process.env.PORT || 4040, () => {
    console.log(`server is running`);
});
