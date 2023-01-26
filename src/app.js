const express = require('express');

// ...
const { routeLogin, routeUser } = require('./routes');

const app = express();

app.use(express.json());
app.use('/login', routeLogin);
app.use('/user', routeUser);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
