import mongoose from "mongoose";
import {authorSchema} from "./Author.js"

const mangasSchema = new mongoose.Schema(
    {
        id: {type: mongoose.Schema.Types.ObjectId },
        title: {type: String, required: true},
        author: authorSchema,
        desc: {type: String}
    }, {versionKey: false}
)

const manga = mongoose.model("mongos", mangasSchema);

export default manga;