const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

let app = express();
app.use(morgan('dev'));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

let db = require('./database/mongoConn');  //DB Connection

let routes = require('./app/routes/mainRoute'); //Adding Routes
app.use(routes);

app.listen(9000, function () {
    console.log('Server listening on port ' + 9000);
});