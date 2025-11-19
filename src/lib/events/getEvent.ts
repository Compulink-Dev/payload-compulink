//@ts-ignore
export default async function getEvent(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/api/events/${id}`, {
        cache: "no-store",
    });
    const event = await res.json();
    return event;
}