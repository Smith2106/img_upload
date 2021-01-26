import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
} from "typeorm";

@Entity()
export class Image {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    img_path!: string;

    @Column()
    img_name!: string;

    @CreateDateColumn()
    uploadedAt!: Date;
}