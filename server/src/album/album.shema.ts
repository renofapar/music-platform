import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';
import * as mongoose from 'mongoose'
import {Track} from "../shemas/track.shema";

export type AlbumDocument = Album & Document;

@Schema()
export class Album {
    @Prop()
    name: string;

    @Prop()
    author: string;

    @Prop()
    picture: string;


    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Track'}]})
    track: Track[]
}

export const AlbumSchema = SchemaFactory.createForClass(Album);