// Import
const fastify = require("fastify")();
require("dotenv/config");
const path = require('path');

// Import local modules
require("./db/conn");

fastify.register(require("./routes/userroute"));
fastify.register(require('fastify-cors'));


// Listen
fastify.listen(5000, '0.0.0.0' , (err) => {
    if(err)
        fastify.log.error(err);
    else
        console.log(`Listening at port no ${5000}`);
})