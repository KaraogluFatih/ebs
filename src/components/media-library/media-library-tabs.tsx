"use client";

import { Tabs } from "@radix-ui/react-tabs";
import React from "react";
import { TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Play } from "lucide-react";
import { Badge } from "../ui/badge";
import { Video } from "@/types/video";

interface MediaLibraryTabsProps {
  videos: Video[];
  currentPage: number;
  totalPages: number;
  search: string;
}

export default function MediaLibraryTabs({ videos }: MediaLibraryTabsProps) {
  const categories = ["geschichte", "theologie", "gemeinde", "musik"];

  return (
    <div className="mt-8">
      <Tabs defaultValue="all">
        <TabsList className="mb-6 flex flex-wrap gap-2">
          <TabsTrigger value="all">Alle</TabsTrigger>
          {categories.map((cat) => (
            <TabsTrigger key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <MediaLibraryCard key={video.id} video={video} />
            ))}
          </div>
        </TabsContent>

        {categories.map((cat) => (
          <TabsContent key={cat} value={cat} className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos
                .filter(
                  (video) => video.category?.toLowerCase() === cat.toLowerCase()
                )
                .map((video) => (
                  <MediaLibraryCard key={video.id} video={video} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function MediaLibraryCard({ video }: { video: Video }) {
  return (
    <div
      key={video.id}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg hover:-translate-y-1 border border-primary/20"
    >
      <Link
        href={`/media-library?selectedVideoId=${video.id}`}
        className="aspect-video relative overflow-hidden bg-primary/10 block"
      >
        <Image
          src={video.thumbnail?.url || "/placeholder.svg"}
          alt={video.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-accent p-3 shadow-lg group-hover:bg-accent/80 transition-all transform group-hover:scale-110">
            <Play className="h-6 w-6 text-primary" />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </Link>
      <div className="flex flex-col space-y-3 p-5 flex-grow">
        <div className="space-y-1">
          <div className="flex items-center text-sm text-accent font-medium mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            <span>
              {new Date(video.date).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
            <span className="mx-2">•</span>
            <span>{video.views} Aufrufe</span>
          </div>
          <h3 className="text-xl font-bold leading-tight text-primary group-hover:text-accent transition-colors">
            {video.title}
          </h3>
        </div>
        <p className="text-base text-muted-foreground flex-grow">
          {video.description}
        </p>
        <div className="flex justify-between items-center">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
            {video.category}
          </Badge>
        </div>
      </div>
    </div>
  );
}
