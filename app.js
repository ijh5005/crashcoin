//bring in express to start the serve
const express = require('express');
const app = express();
const port = 3001;
app.listen(port, () => {
  console.log('server started on port' + port);
});

//other
const path = require('path');
const bodyParser = require('body-parser');
const cookParser = require('cookie-parser');

//routes
const routes = require('./routes/index');

// set view engine -> "views" folder is checked by default
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', routes);
app.use(express.static(path.join(__dirname, './public')));

module.exports = app;
