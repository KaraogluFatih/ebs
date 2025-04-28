import React from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { Article } from "@/types/article";
import ArticlePreviewItem from "./article-preview-item";
import Link from "next/link";

interface ArticlesPreviewContentProps {
  articles: Article[];
}

export default function ArticlesPreview({
  articles,
}: ArticlesPreviewContentProps) {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24 bg-primary/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/10 -ml-48 -mb-48"></div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block bg-accent/20 text-primary font-semibold px-4 py-1 rounded-full text-sm mb-2">
              Wissen & Einsichten
            </div>
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-primary">
                Aktuelle Artikel
              </h2>
              <p className="text-lg text-muted-foreground md:text-xl">
                Lesen Sie unsere neuesten Beiträge zu Glauben, Gesellschaft und
                Bildung
              </p>
            </div>
          </div>
          <div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 3).map((article) => (
              <ArticlePreviewItem key={article.id} article={article} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href={"/articles"} passHref>
              <Button className="text-base">
                Alle Artikel anzeigen
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
