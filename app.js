const express = require('express');
const app = express();
const router = require('./routes');
const log = require('./middlewares/logger');
const cors = require('cors');

// app.use(express.json());
app.use(cors());

app.use(log);

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(router);

app.use((req, res, next) => {
    res.status(404)
    res.send({ 
        status: 'Failed',
        message: 'Not Found' });
  });

// app.listen(3000, () => {
//   console.log(`Server: http://localhost:3000`);
// });
module.exports = app;