const express = require('express');
const server = express();

const body_parser = require('body-parser');

const port = 5000;

const db = require('./')

server.listen(port, () => {
   console.log(`Server listening at ${port}`);
});