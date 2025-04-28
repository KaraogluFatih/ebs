import React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { Video } from "@/types/video";
import Link from "next/link";
import { Button } from "../ui/button";

interface MediaLibraryPreviewItemContentProps {
  video: Video;
}

export default function MediaLibraryPreviewItem({
  video,
}: MediaLibraryPreviewItemContentProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg hover:-translate-y-1 border border-primary/20">
      <div className="aspect-video relative overflow-hidden bg-primary/10">
        <Image
          src={video.thumbnail.url}
          alt={video.title}
          sizes="100vw"
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-accent p-3 shadow-lg group-hover:bg-accent/80 transition-all transform group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-3 p-5 flex-grow">
        <div className="space-y-1">
          <div className="flex items-center text-sm text-accent font-medium">
            <Calendar className="h-4 w-4 mr-1" />
            <span>
              {new Date(video.date).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
          </div>
          <h3 className="text-xl font-bold leading-tight text-primary group-hover:text-accent transition-colors">
            {video.title}
          </h3>
        </div>
        <p className="text-base flex-grow">{video.description}</p>
        <div className="pt-3">
          <Link href={`media-library`} passHref>
            <Button className="w-full text-base bg-primary hover:bg-primary/90">
              Ansehen
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
