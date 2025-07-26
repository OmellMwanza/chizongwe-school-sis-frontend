import { PlaceholderPage } from "@/components/PlaceholderPage";
import { Camera } from "lucide-react";

export function Gallery() {
  return (
    <PlaceholderPage
      title="School Gallery"
      description="Explore our school through photos - from classroom activities and sports events to graduations and special celebrations. See what makes Chizongwe School special."
      icon={<Camera className="h-16 w-16 text-school-blue mx-auto mb-4" />}
    />
  );
}
