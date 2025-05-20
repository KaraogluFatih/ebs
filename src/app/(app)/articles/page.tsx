import { getArticles } from "@/data-access/collections/articles";
import ArticlesFilter from "@/components/articles/articles-filter";
import ArticlesTabs from "@/components/articles/articles-tabs";
import { redirect } from "next/navigation";

type ArticlesPageProps = {
  searchParams: Promise<{
    page?: string;
    search?: string;
  }>;
};

export default async function ArticlesPage({
  searchParams,
}: ArticlesPageProps) {
  const { page, search } = await searchParams;

  const currentPage = Number(page ?? "1");
  const searchQuery = search ?? "";

  if (currentPage < 1) redirect("/articles");

  const articles = await getArticles(1, 9, searchQuery);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-primary">
                Artikel
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl max-w-[700px] mx-auto">
                Lesen Sie unsere neuesten Beiträge zu Glauben, Gesellschaft und
                Bildung
              </p>
            </div>
          </div>

          <ArticlesFilter defaultSearch={searchQuery} />

          <ArticlesTabs
            articles={articles.articles}
            currentPage={currentPage}
            totalPages={articles.totalPages}
            search={searchQuery}
          />
        </div>
      </main>
    </div>
  );
}
