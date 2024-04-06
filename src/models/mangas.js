import mongoose from "mongoose";

const mangasSchema = new mongoose.Schema(
    {
        id: {type: mongoose.Schema.Types.ObjectId },
        title: {type: String, required: true},
        author: {type: String, required: true},
        desc: {type: String}
    }, {versionKey: false}
)

const manga = mongoose.model("mongos", mangasSchema);

export default manga;