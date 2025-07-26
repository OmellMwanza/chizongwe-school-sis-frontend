import { PlaceholderPage } from "@/components/PlaceholderPage";
import { Shield } from "lucide-react";

export function Admin() {
  return (
    <PlaceholderPage
      title="Admin Dashboard"
      description="Administrative portal for managing student records, academic results, and school data. This secure area is for authorized school staff only."
      icon={<Shield className="h-16 w-16 text-school-blue mx-auto mb-4" />}
    />
  );
}
