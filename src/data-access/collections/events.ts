import { getPayload } from "payload";
import config from "@payload-config";
import { Event } from "@/types/event";

export async function getEvents(
  page: number = 1,
  limit: number = 9,
  search: string
): Promise<{
  events: Event[];
  totalPages: number;
  currentPage: number;
}> {
  const payload = await getPayload({ config });

  const whereQuery = search
    ? {
        title: {
          like: search,
        },
      }
    : undefined;

  const result = await payload.find({
    collection: "events",
    depth: 1,
    limit,
    page,
    where: whereQuery,
  });

  const events: Event[] = result.docs.map((event: any) => ({
    id: event.id,
    title: event.title || "Untitled",
    descriptionShort: event.descriptionShort,
    descriptionLong: event.descriptionLong,
    tags: event.tags || [],
    date: event.date,
    time: event.time,
    location: event.location,
    organizer: event.organizer,
    cost: event.cost,
    category: event.category,
    maxParticipants: event.maxParticipants,
    currentParticipants: event.currentParticipants,
    createdAt: event.createdAt,
    updatedAt: event.updatedAt,
    image: event.image
      ? {
          url: event.image.url,
          alt: event.image.alt || "",
        }
      : undefined,
  }));

  return {
    events,
    totalPages: result.totalPages,
    currentPage: result.page,
  };
}

export async function getEventById(id: string): Promise<Event | null> {
  const payload = await getPayload({ config });

  try {
    const result = await payload.findByID({
      collection: "events",
      id,
      depth: 1,
    });

    const event: Event = {
      id: result.id,
      title: result.title || "Untitled",
      descriptionShort: result.descriptionShort,
      descriptionLong: result.descriptionLong,
      tags: result.tags || [],
      date: result.date,
      category: result.category,
      time: result.time,
      location: result.location,
      organizer: result.organizer,
      cost: result.cost,
      maxParticipants: result.maxParticipants,
      currentParticipants: result.currentParticipants,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
      image: result.image
        ? {
            url: result.image.url,
            alt: result.image.alt || "",
          }
        : undefined,
    };

    return event;
  } catch (error) {
    console.error(`Error fetching event with id ${id}:`, error);
    return null;
  }
}
