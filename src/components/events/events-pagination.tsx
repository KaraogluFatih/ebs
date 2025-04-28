import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export interface EventsPaginationProps {
  currentPage: number;
  totalPages: number;
  search?: string;
}

export default function EventsPagination({
  currentPage,
  totalPages,
  search,
}: EventsPaginationProps) {
  return (
    <div className="mt-12 flex justify-center">
      <div className="flex flex-wrap items-center gap-2">
        <Button
          className={currentPage >= 1 ? "invisible" : "visible"}
          variant="outline"
          size="icon"
          disabled={currentPage <= 1}
          asChild
        >
          <Link href={`/articles?page=${currentPage + 1}&search=${search}`}>
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>

        {Array.from({ length: totalPages }, (_, i) => (
          <Button
            key={i}
            variant="outline"
            size="sm"
            className={currentPage === i + 1 ? "bg-primary text-white" : ""}
            asChild
          >
            <Link href={`/events?page=${i + 1}&search=${search}`}>{i + 1}</Link>
          </Button>
        ))}

        <Button
          className={currentPage >= totalPages ? "invisible" : "visible"}
          variant="outline"
          size="icon"
          disabled={currentPage >= totalPages}
          asChild
        >
          <Link href={`/events?page=${currentPage + 1}&search=${search}`}>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
