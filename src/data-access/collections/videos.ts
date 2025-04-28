import { getPayload } from "payload";
import config from "@payload-config";
import { Video } from "@/types/video";

export async function getVideos(
  page: number = 1,
  limit: number = 9,
  search: string
): Promise<{
  videos: Video[];
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
    collection: "videos",
    depth: 1,
    limit,
    page,
    where: whereQuery,
  });

  console.log(result);

  const videos: Video[] = result.docs.map((video: any) => ({
    id: video.id,
    title: video.title,
    description: video.description,
    category: video.category,
    date: video.date,
    views: video.views,
    duration: video.duration,
    thumbnail: video.thumbnail
      ? {
          url: process.env.API_BASEURL + video.thumbnail.url,
          alt: video.thumbnail.alt || video.title,
        }
      : undefined,
  }));

  return {
    videos,
    totalPages: result.totalPages,
    currentPage: result.page,
  };
}

export async function getVideoById(id: string): Promise<Video> {
  const payload = await getPayload({ config });

  const video = await payload.findByID({
    collection: "videos",
    id,
    depth: 1,
  });

  const result: Video = {
    id: video.id,
    title: video.title,
    description: video.description,
    category: video.category,
    date: video.date,
    views: video.views,
    duration: video.duration,
    thumbnail: video.thumbnail
      ? {
          url: process.env.API_BASEURL + video.thumbnail.url,
          alt: video.thumbnail.alt || video.title,
        }
      : undefined,
    videoFile: video.videoFile
      ? {
          url: process.env.API_BASEURL + video.videoFile.url,
          alt: video.videoFile.alt || video.title,
        }
      : undefined,
  };

  return result;
}
