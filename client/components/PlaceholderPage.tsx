import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Construction, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function PlaceholderPage({ title, description, icon }: PlaceholderPageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Card className="text-center">
        <CardContent className="py-16">
          <div className="mb-8">
            {icon || <Construction className="h-16 w-16 text-school-blue mx-auto mb-4" />}
            <h1 className="text-3xl font-bold text-school-blue mb-4">{title}</h1>
            <p className="text-lg text-school-gray-dark max-w-2xl mx-auto">
              {description}
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-school-gray-dark">
              This page is currently under development. We're working hard to bring you 
              amazing content and features. Please check back soon!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-school-blue hover:bg-school-blue-dark">
                <Link to="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/results">
                  View Results
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
