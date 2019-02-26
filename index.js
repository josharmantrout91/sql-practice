const express = require('express');

const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

const server = express();
const port = 8500;

server.use(express.json());

server.get('/project/:id', (req, res) => {
    //query the projects table to get a specific project
    
    //query the actions table to get all actions associated with that specific project
    
    //add the actions onto the project -> project.actions = actions
    
    //response should have the following object shape
    //{
    //"id": 1,
    //"name": "sprint",
    //"description": "complete MVP by 12",
    //"completed": 0,
    //"actions": [
    //    {
    //        "id": 1,
    //        "description": "add post to action",
    //        "notes": null,
    //        "completed": 0,
    //        "project_id": 1
    //    },
    //    {
    //        "id": 2,
    //        "description": "return project",
    //        "notes": null,
    //        "completed": 0,
    //        "project_id": 1
    //    }
    //  ]
    //}
});

server.listen(port, () => console.log(`\nAPI running on http://localhost:${port}\n`));
