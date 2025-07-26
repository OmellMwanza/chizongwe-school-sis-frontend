import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  GraduationCap, 
  Award, 
  Users, 
  BookOpen, 
  Trophy,
  ChevronRight
} from "lucide-react";

export function Home() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-school-blue to-school-blue-dark text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Welcome to{" "}
                <span className="block text-yellow-300">
                  Chizongwe School
                </span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Excellence in Education - Shaping Tomorrow's Leaders
              </p>
              <p className="text-lg mb-8 text-blue-200 max-w-2xl">
                Access your academic results quickly and securely. Our digital 
                results system provides instant access to grades, progress reports, 
                and academic achievements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4 h-auto"
                >
                  <Link to="/results">
                    View Results
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-school-blue font-semibold text-lg px-8 py-4 h-auto"
                >
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <GraduationCap className="h-20 w-20 text-yellow-300 mx-auto mb-4" />
                    <p className="text-white/80 text-lg">School Building Image</p>
                    <p className="text-white/60 text-sm">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-school-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-school-blue text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-school-blue">1,200+</h3>
              <p className="text-school-gray-dark">Students</p>
            </div>
            <div className="text-center">
              <div className="bg-school-blue text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-school-blue">50+</h3>
              <p className="text-school-gray-dark">Teachers</p>
            </div>
            <div className="text-center">
              <div className="bg-school-blue text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-school-blue">15</h3>
              <p className="text-school-gray-dark">Years Excellence</p>
            </div>
            <div className="text-center">
              <div className="bg-school-blue text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8" />
              </div>
              <h3 className="text-3xl font-bold text-school-blue">98%</h3>
              <p className="text-school-gray-dark">Pass Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-school-blue mb-4">
              Why Choose Chizongwe School?
            </h2>
            <p className="text-xl text-school-gray-dark max-w-3xl mx-auto">
              We provide quality education with modern facilities and dedicated teachers 
              committed to nurturing every student's potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-school-blue/20 hover:border-school-blue/40 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-school-blue/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-8 w-8 text-school-blue" />
                </div>
                <h3 className="text-xl font-semibold text-school-blue mb-4">
                  Quality Education
                </h3>
                <p className="text-school-gray-dark">
                  Comprehensive curriculum designed to meet international standards 
                  and prepare students for higher education.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-school-blue/20 hover:border-school-blue/40 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-school-blue/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-school-blue" />
                </div>
                <h3 className="text-xl font-semibold text-school-blue mb-4">
                  Experienced Teachers
                </h3>
                <p className="text-school-gray-dark">
                  Dedicated and qualified educators committed to providing 
                  personalized attention to every student.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-school-blue/20 hover:border-school-blue/40 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-school-blue/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-8 w-8 text-school-blue" />
                </div>
                <h3 className="text-xl font-semibold text-school-blue mb-4">
                  Excellence Record
                </h3>
                <p className="text-school-gray-dark">
                  Proven track record of academic excellence with outstanding 
                  results in national examinations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-school-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Check Your Results?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Access your academic progress instantly through our secure results portal.
          </p>
          <Button 
            asChild 
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4 h-auto"
          >
            <Link to="/results">
              Access Results Portal
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
