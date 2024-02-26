const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const server = express();
const mongoose = require("mongoose");
require("dotenv").config();
const teacherroute = require("./Route/teacherroute");
const classroute = require("./Route/classroute");
const childroute = require("./Route/childroute");
const loginroute = require("./Route/Authentication");
const authmw = require("./MW/AuthMw");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');



// Middleware


// Connect to MongoDB
const port = process.env.PORT || 8080;
mongoose.connect(process.env.db_URL)
    .then(() => {
        console.log("DB connected .... ");
        server.listen(port, () => {
            console.log("Server is running on port", port);
    });
    })
    .catch((error) => {
        console.log("DB connection Problem " + error);
    });
    const corsoption = {
        origin: "*",
        methods: "*",
        allowedHeaders: ["content-Type", "Authorization"]
    }
    
    const options = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'Your API Name',
                description: 'Description of your API',
                version: '1.0.0',
            },
        },
        
        apis: ['./Route/*.js'],
    };
    
    const specs = swaggerJsdoc(options);
    server.use(cors(corsoption));
    server.use((req, res, next) => {
        
        if (false) {
                throw new Error("hjkjhvcvbn");
        } else {
                next();
        }
});
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

server.use(morgan("dev"));
server.use(express.json());

// Authentication Middleware
server.use(authmw);


server.use(loginroute);
server.use(childroute);
server.use(teacherroute);
server.use(classroute);

// Swagger UI


// Not Found
server.use((request, response) => {
    response.status(404).json({ message: "Not Found" });
});

// Error Handling
server.use((error, request, response, next) => {
    response.status(500).json({ message: error + "" });
});

// Listen to port

// server.listen(port, () => {
//     console.log("Server is running on port", port);
// });
