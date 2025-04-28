import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Video } from "@/types/video";
import MediaLibraryPreviewItem from "./media-library-preview-item";
import { Button } from "../ui/button";

interface MediaLibraryPreviewContentProps {
  videos: Video[];
}

export default function MediaLibraryPreview({
  videos,
}: MediaLibraryPreviewContentProps) {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 relative">
      <div className="absolute inset-0">
        <Image
          src="/Panorma.jpg"
          alt="Kempten Panorama"
          sizes="100vw"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white/90"></div>
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="container px-4 md:px-6 relative">
          {/*Header*/}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block bg-primary text-primary-foreground font-semibold px-4 py-1 rounded-full text-sm mb-2">
              Entdecken & Erfahren
            </div>
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
                Unsere Mediathek
              </h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                Entdecken Sie Vorträge, Predigten und andere Medieninhalte
              </p>
            </div>
          </div>
          {/*Media-Library Items */}
          <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {videos.slice(0, 3).map((video) => (
              <MediaLibraryPreviewItem key={video.id} video={video} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href={"/media-library"} passHref>
              <Button
                variant="outline"
                className="text-base border-primary text-primary hover:bg-primary/10"
              >
                Zur Mediathek
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
