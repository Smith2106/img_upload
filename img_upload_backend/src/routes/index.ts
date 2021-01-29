import express from "express";

import ImageRouter from "./image.router";

const router = express.Router();

router.use("/images", ImageRouter);

export default router;