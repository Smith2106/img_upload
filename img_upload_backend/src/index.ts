import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

import dbConfig from "./config/database";
import { createImage } from "./util/seedDb";

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"))

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        },
    })
);

app.get("/", async (_req, res) => {
    return res.send("Hello world");
});

createConnection(dbConfig)
    .then((_connection) => {
        app.listen(PORT, () => {
            console.log("Server is running on port", PORT);
            createImage();
        });
    })
    .catch((err) => {
        console.log("Unable to connect to db", err);
        process.exit(1);
    })


