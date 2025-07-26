import { PlaceholderPage } from "@/components/PlaceholderPage";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <PlaceholderPage
      title="Contact Us"
      description="Get in touch with Chizongwe School. Find our contact information, send us a message, or visit us in person. We're here to help with any questions you may have."
      icon={<Mail className="h-16 w-16 text-school-blue mx-auto mb-4" />}
    />
  );
}
