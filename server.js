const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const routes = require('./api/routes/netoListRoutes');
routes(app); 


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('myapp listening on port ' + port);
});