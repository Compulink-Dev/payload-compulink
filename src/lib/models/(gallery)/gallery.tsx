import mongoose, { Schema, models } from "mongoose";

const gallerySchema = new Schema(
    {
        projectName: {
            type: String,
            required: true,
        },
        company: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },

    { timestamps: true }
);

const Gallery = models.Gallery || mongoose.model("Gallery", gallerySchema);
export default Gallery;
