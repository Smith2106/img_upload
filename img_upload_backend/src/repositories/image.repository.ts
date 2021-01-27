import { getRepository } from "typeorm";
import path from "path";

import { Image } from "../models";

interface IImagePayload {
    img_path: string;
    img_name: string;
}

export const createImage = async (payload: IImagePayload): Promise<Image> => {
    const imageRepository = getRepository(Image);
    const image = new Image();
    return imageRepository.save({
        ...image,
        ...payload,
    });
};

export const getImage = async (id: string): Promise<Image | null> => {
    const imageRepository = getRepository(Image);
    const image = await imageRepository.findOne({ id: id });
    if (!image) return null;
    return image;
};