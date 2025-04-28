import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getEvents } from "@/data-access/collections/events";
import ArticlesPreview from "@/components/articles/articles-preview";
import { getArticles } from "@/data-access/collections/articles";
import { RefreshRouteOnSave } from "@/components/RefreshRouteOnSave";
import { getVideos } from "@/data-access/collections/videos";
import EventsPreview from "@/components/events/events-preview";
import MediaLibraryPreview from "@/components/media-library/media-library-preview";
import Link from "next/link";

export default async function Home() {
  const events = await getEvents(1, 9, "");
  const articles = await getArticles(1, 9, "");
  const videos = await getVideos(1, 9, "");
  return (
    <div className="flex min-h-screen flex-col">
      <RefreshRouteOnSave />
      <main className="flex-1 h-full">
        <section className="w-full relative overflow-hidden h-[70vh]">
          <div className="absolute inset-0">
            <Image
              src="/Kempten.jpg"
              alt="Kempten Aerial View"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-primary/40"></div>
          </div>
          <div className="flex justify-center min-h-screen">
            <div className="container relative px-2 md:px-4 py-14 md:py-14 lg:py-16 ">
              <div className="max-w-3xl mx-auto text-center text-white space-y-6">
                <div className="inline-block bg-accent text-primary font-semibold px-4 py-1 rounded-full text-sm md:text-base mb-2">
                  Bildung • Gemeinschaft • Glaube
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Willkommen beim Evangelischen Bildungswerk Kempten
                </h1>
                <p className="text-lg md:text-xl font-semibold text-white/90 max-w-2xl mx-auto">
                  Entdecken Sie unsere Veranstaltungen, Artikel und
                  Medienangebote für lebenslanges Lernen und Gemeinschaft.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                  <Link href={"/events"} passHref>
                    <Button
                      size="lg"
                      className="text-base bg-accent hover:bg-accent/90 text-primary"
                    >
                      Aktuelle Veranstaltungen
                    </Button>
                  </Link>
                  <Link href={"/about-us"} passHref>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-base border-white text-primary  hover:bg-white/90"
                    >
                      Über uns erfahren
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              className="text-white fill-current"
            >
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
            </svg>
          </div>
        </section>

        <EventsPreview events={events.events} />
        <ArticlesPreview articles={articles.articles} />
        <MediaLibraryPreview videos={videos.videos} />
      </main>
    </div>
  );
}
