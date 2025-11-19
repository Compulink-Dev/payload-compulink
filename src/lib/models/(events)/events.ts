import mongoose, { Schema, models } from "mongoose";

const eventsSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
        },
        venue: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        link: {
            type: String,
        },
    },
    { timestamps: true }
);

const Event = models.Event || mongoose.model("Event", eventsSchema);
export default Event;
