//Sachi Sabijon Reyes
//301266968
//OCT 1,2023
var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

module.exports = function () {
    var app = express();

    // Set up middleware based on the environment
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    // Set up routes
    app.use('/', require('../app/routes/index.server.routes.js'));
    // Alternatively, you can use: require('../app/routes/index.server.routes.js')(app);

    // Serve static files
    app.use(express.static('./public'));
    app.use(express.static("./node_modules"));

    return app;
};
