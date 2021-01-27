import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { getCustomRepository } from "typeorm";

import { Image } from "../models";
import { IImagePayload, createImage, getImage } from "../repositories";

@Route("images")
@Tags("Image")
export default class ImageController {
    @Post("/")
    public async createImage(@Body() body: IImagePayload): Promise<Image> {
        return createImage(body);
    }

    @Get("/:id")
    public async getImage(@Path() id: string): Promise<Image | null> {
        return getImage(id);
    }
}