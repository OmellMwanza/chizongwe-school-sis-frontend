import { PlaceholderPage } from "@/components/PlaceholderPage";
import { School } from "lucide-react";

export function About() {
  return (
    <PlaceholderPage
      title="About Us"
      description="Learn about our school's rich history, mission, vision, and the dedicated staff who make excellence in education possible at Chizongwe School."
      icon={<School className="h-16 w-16 text-school-blue mx-auto mb-4" />}
    />
  );
}
