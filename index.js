const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = new express();
const logger = require('./utils/logger');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('*', (req, res) => {
    res.send('Test App');
});

const port = process.env.PORT || 3000;
app.listen(port, ()=>logger.info(`app listening on port ${port}`));
