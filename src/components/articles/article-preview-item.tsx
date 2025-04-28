import { Article } from "@/types/article";
import { Calendar } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

interface ArticlePreviewItemContentProps {
  article: Article;
}

export default function ArticlePreviewItem({
  article,
}: ArticlePreviewItemContentProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg hover:-translate-y-1 border-t-4 border-t-accent">
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={article.image?.url || "/placeholder.svg"}
          alt={article.image?.alt || article.title}
          sizes="100vw"
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col space-y-3 p-5 flex-grow">
        <div className="space-y-1">
          <div className="flex items-center text-sm text-accent font-medium">
            <Calendar className="h-4 w-4 mr-1" />
            <span>
              {new Date(article.date).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
          </div>
          <h3 className="text-xl font-bold leading-tight text-primary group-hover:text-accent transition-colors">
            {article.title}
          </h3>
          <p>{article.shortDescription}</p>
        </div>
        <p className="text-base flex-grow">{article.excerpt}</p>
        <div className="pt-3">
          <Link href={`/articles/${article.id}`} passHref>
            <Button
              variant="outline"
              className="w-full text-base border-primary text-primary hover:bg-primary/10"
            >
              Weiterlesen
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
