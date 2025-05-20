import { Suspense } from "react";
import { getDocuments } from "@/data-access/collections/documents";
import { RefreshRouteOnSave } from "@/components/RefreshRouteOnSave";
import DocumentsFilter from "@/components/documents/documents-filter";
import DocumentsTabs from "@/components/documents/documents-tabs";

export default async function DocumentsPage({
  searchParams,
}: {
  searchParams: { page?: string; search?: string };
}) {
  const page = Number.parseInt(searchParams.page || "1");
  const search = searchParams.search || "";

  const { documents, totalPages, currentPage } = await getDocuments(
    page,
    9,
    search
  );

  return (
    <div className="flex min-h-screen flex-col">
      <RefreshRouteOnSave />
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6 md:py-12">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-primary">
                Dokumente
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl max-w-[700px] mx-auto">
                Wichtige Dokumente, Formulare und Informationsmaterial zum
                Herunterladen
              </p>
            </div>
          </div>

          <Suspense fallback={<div>Lade Suchfilter...</div>}>
            <DocumentsFilter defaultSearch={search} />
          </Suspense>

          <Suspense
            fallback={
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            }
          >
            {documents.length > 0 ? (
              <DocumentsTabs
                documents={documents}
                currentPage={currentPage}
                totalPages={totalPages}
                search={search}
              />
            ) : (
              <div className="text-center py-20">
                <h3 className="text-xl font-medium text-muted-foreground">
                  Keine Dokumente gefunden
                </h3>
                <p className="mt-2">
                  Versuchen Sie es mit anderen Suchbegriffen oder Kategorien.
                </p>
              </div>
            )}
          </Suspense>
        </div>
      </main>
    </div>
  );
}
