import express, { Application } from "express";

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(express.static("public"))

app.get("/", async (_req, res) => {
    return res.send("Hello world");
});

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});

