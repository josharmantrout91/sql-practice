const express = require('express');

const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

const server = express();
const port = 8500;

server.use(express.json());

server.get('/project/:id', (req, res) => {
    
});

server.listen(port, () => console.log(`\nAPI running on http://localhost:${port}\n`));