// Import
const fastify = require("fastify")();
require("dotenv/config");
const path = require('path');

// Import local modules
require("./db/conn");

// const port = process.env.PORT || 5000;

// plugins
// fastify.register(require('fastify-static'), {
//     root: path.join(__dirname, '/public/html')
// })

fastify.register(require("./routes/userroute"));
fastify.register(require('fastify-cors'));


// Listen
fastify.listen(process.env.PORT, (err) => {
    if(err)
        fastify.log.error(err);
    else
        console.log(`Listening at port no ${process.env.PORT}`);
})