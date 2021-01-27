import express from "express";
import { fileURLToPath } from "url";

import { ImageController } from "../controllers";
import { storeImage } from "../util/imageStorage";

const router = express.Router();

router.post("/", async (req, res) => {
    const controller = new ImageController();
    //const path = await storeImage();
    const response = await controller.createImage(req.body);
    return res.send(response);
});