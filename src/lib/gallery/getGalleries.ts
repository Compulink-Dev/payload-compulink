import dbConnect from "../dbConnect";
import Gallery from "../models/(gallery)/gallery";

export default async function getGalleries() {
    await dbConnect()
    const gallery = await Gallery.find()
    return gallery;
}