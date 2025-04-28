import { getVideoById, getVideos } from "@/data-access/collections/videos";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Link from "next/link";
import { VideoPlayer } from "@/components/videoplayer";
import MediaLibraryTabs from "@/components/media-library/media-library-tabs";
import { redirect } from "next/navigation";
import MediaLibraryPagination from "@/components/media-library/media-library-pagination";
import MediaLibraryFilter from "@/components/media-library/media-library-filter";
import { MAX_PAGE_SIZE } from "./media-library.definitions";

interface MediaLibraryPageProps {
  searchParams?: {
    page?: string;
    search?: string;
    selectedVideoId?: string;
  };
}

export default async function MediathekPage({
  searchParams,
}: MediaLibraryPageProps) {
  const selectedVideoId = (await searchParams?.selectedVideoId) ?? "";

  const currentPage = Number((await searchParams?.page) ?? "1");
  const searchQuery = (await searchParams?.search) ?? "";

  if (currentPage < 1) redirect("/events");

  const videos = await getVideos(currentPage, MAX_PAGE_SIZE, searchQuery);
  const selectedVideo = selectedVideoId
    ? await getVideoById(selectedVideoId).catch(() => null)
    : null;

  console.log("Here is the selected Video: ", selectedVideo);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-primary">
                Mediathek
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl max-w-[700px] mx-auto">
                Entdecken Sie unsere Vorträge, Predigten und andere
                Medieninhalte
              </p>
            </div>
          </div>

          <MediaLibraryFilter defaultSearch={searchQuery} />

          <MediaLibraryTabs
            videos={videos.videos}
            currentPage={currentPage}
            totalPages={videos.totalPages}
            search={searchQuery}
          />

          <MediaLibraryPagination
            currentPage={currentPage}
            totalPages={videos.totalPages}
          />
        </div>
      </main>

      {selectedVideo && (
        <Dialog defaultOpen>
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black">
            <div className="relative">
              <VideoPlayer
                src={selectedVideo.videoFile?.url || ""}
                title={selectedVideo.title}
                poster={selectedVideo.thumbnail?.url}
              />
              <div className="absolute top-2 right-2 z-10">
                <Link href="/media-library">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20"
                  >
                    Schließen
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-white p-4">
              <h2 className="text-xl font-bold text-primary">
                {selectedVideo.title}
              </h2>
              <p className="text-muted-foreground mt-1">
                {selectedVideo.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-primary/10 text-primary">
                    {selectedVideo.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {new Date(selectedVideo.date).toLocaleDateString("de-DE", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <Link href={`/media-library/${selectedVideo.id}`}>
                  <Button size="sm">Zur Detailseite</Button>
                </Link>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
