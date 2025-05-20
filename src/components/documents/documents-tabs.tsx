"use client";

import { Tabs } from "@radix-ui/react-tabs";
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Calendar } from "lucide-react";
import DocumentsPagination from "./documents-pagination";
import type { Document } from "@/types/document";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface DocumentsTabsProps {
  documents: Document[];
  currentPage: number;
  totalPages: number;
  search: string;
}

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

export default function DocumentsTabs({
  documents,
  currentPage,
  totalPages,
  search,
}: DocumentsTabsProps) {
  const categories = [
    "Gemeindebrief",
    "Bericht",
    "Gottesdienst",
    "Formular",
    "Flyer",
    "Fotos",
  ];

  return (
    <div className="mt-8">
      <Tabs defaultValue="all">
        <TabsList className="mb-6 flex flex-wrap gap-2">
          <TabsTrigger value="all">Alle</TabsTrigger>
          {categories.map((cat) => (
            <TabsTrigger key={cat} value={cat.toLowerCase()}>
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((document) => (
              <DocumentCard key={document.id} document={document} />
            ))}
          </div>
        </TabsContent>

        {categories.map((cat) => (
          <TabsContent
            key={cat.toLowerCase()}
            value={cat.toLowerCase()}
            className="mt-0"
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {documents
                .filter(
                  (document) =>
                    document.category.toLowerCase() === cat.toLowerCase()
                )
                .map((document) => (
                  <DocumentCard key={document.id} document={document} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <DocumentsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        search={search}
      />
    </div>
  );
}

function DocumentCard({ document }: { document: Document }) {
  const getFileIcon = () => {
    const fileType =
      document.document.mimeType?.split("/")[1]?.toLowerCase() || "";

    switch (fileType) {
      case "pdf":
        return "/pdf-icon.svg"; // You could use a better PDF icon if you have one
      case "doc":
      case "docx":
        return "/doc-icon.svg"; // Same here
      default:
        return "/file-icon.svg"; // Generic file icon
    }
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg hover:-translate-y-1 border border-primary/20">
      <Link
        href={`/documents/${document.id}`}
        className="aspect-video relative overflow-hidden bg-primary/10 block"
      >
        {document.document.thumbnailURL ? (
          <Image
            src={document.document.thumbnailURL}
            alt={document.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <Image
              src={getFileIcon()}
              alt={document.title}
              width={64}
              height={64}
              className="opacity-70"
            />
          </div>
        )}
      </Link>
      <div className="flex flex-col space-y-3 p-5 flex-grow">
        <div className="space-y-1">
          <div className="flex items-center text-sm text-accent font-medium mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            <span>
              {new Date(document.createdAt).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
            <span className="mx-2">•</span>
            <span>{(document.document.filesize / 1024).toFixed(1)} KB</span>
          </div>
          <h3 className="text-xl font-bold leading-tight text-primary group-hover:text-accent transition-colors">
            {document.title}
          </h3>
        </div>
        <p className="text-base text-muted-foreground flex-grow">
          {document.description || document.document.mimeType?.toUpperCase()}
        </p>
        <div className="flex justify-between items-center">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0 capitalize">
            {document.category}
          </Badge>
        </div>
      </div>
    </div>
  );
}
