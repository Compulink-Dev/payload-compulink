//@ts-ignore
export default async function getGallery(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/gallery/${id}`, {
        cache: "no-store",
    });
    const gallery = await res.json();
    return gallery;
}