import express from "express";
import multer from "multer";
import { fileURLToPath } from "url";

import { ImageController } from "../controllers";
import { storeImage } from "../util/imageStorage";
import upload from "../config/upload";

const router = express.Router();

router.post("/", upload.single('image'), async (req, res) => {
    const controller = new ImageController();
    //const path = await storeImage();
    //const response = await controller.createImage(req.body);
    console.log(req.file);
    return res.send("Hello");
});

export default router;