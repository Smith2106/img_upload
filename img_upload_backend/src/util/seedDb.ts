import { getRepository } from "typeorm";
import path from "path";

import { Image } from "../models";

interface IImagePayload {
    img_path: string;
    img_name: string;
}

export const createImage = async (): Promise<Image> => {
    const payload: IImagePayload = {
        img_path: path.resolve("../assets/images/4A62C8BE-3E70-43B9-908C-825AC512ED3B_1_105_c.jpeg"),
        img_name: "Patagonia Landscape"
    }
    const imageRepository = getRepository(Image);
    const image = new Image();
    return imageRepository.save({
        ...image,
        ...payload,
    });
};