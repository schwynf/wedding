var express = require('express');
var app = express();
const PORT = process.env.PORT || 8000;
const path = require('path');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
})

app.listen(PORT, () => {
    console.log('Process ' + process.pid + ' is listening to all incoming requests on port: ' + PORT)
})
