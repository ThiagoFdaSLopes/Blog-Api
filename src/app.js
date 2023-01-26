const express = require('express');

// ...
const { routeLogin } = require('./routes');

const app = express();

app.use(express.json());
app.use('/login', routeLogin);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
