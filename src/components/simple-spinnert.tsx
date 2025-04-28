import { Loader2 } from "lucide-react";

export function SimpleSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <Loader2 className="h-12 w-12 animate-spin text-primary" />
      <p className="mt-4 text-primary font-medium">Wird geladen...</p>
    </div>
  );
}
