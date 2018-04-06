var express = require('express');
var app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(process.env.PORT || 4040, () => {
    console.log(`server is running`);
});