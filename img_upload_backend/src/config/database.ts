import { ConnectionOptions } from "typeorm";

import { Image } from "../models";

const config: ConnectionOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "localhost",
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || "postgres",
    database: process.env.POSTGRES_PASSWORD || "postgres",
    entities: [Image],
    synchronize: true,
}

export default config;