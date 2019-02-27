const express = require('express');

const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

const server = express();
const port = 8500;

server.use(express.json());

server.get('/project/:id', (req, res) => {
    //query the projects table to get a specific project
    db("projects")
    .where({id: req.params.id})
    .first()
    //query the actions table to get all actions associated with that specific project
    .then(banana => {
        if (banana) {
            db("actions")
            .where({project_id: id})
            .then()
        } else {
            res.status(404).json({message: "no project found with that id"})
        }
    })
    
    //add the actions onto the project -> project.actions = actions
   
    //res
});

server.listen(port, () => console.log(`\nAPI running on http://localhost:${port}\n`));
