import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { 
  GraduationCap, 
  Target, 
  Eye, 
  Award, 
  Users, 
  BookOpen, 
  Trophy,
  Star,
  Heart,
  Globe,
  X
} from "lucide-react";

export function About() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { id: 1, title: "Main School Building", description: "Our beautiful main academic building" },
    { id: 2, title: "Science Laboratory", description: "State-of-the-art science facilities" },
    { id: 3, title: "Library & Study Hall", description: "Quiet spaces for learning and research" },
    { id: 4, title: "Sports Complex", description: "Modern facilities for physical education" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-school-gray/30">
      {/* Header Section */}
      <motion.section 
        className="relative overflow-hidden bg-gradient-to-r from-school-blue to-school-blue-dark text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border border-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 border border-white rounded-full"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8"
            >
              <GraduationCap className="w-10 h-10" />
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              About Chizongwe<br />
              <span className="text-school-blue-light">Secondary School</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              For over three decades, Chizongwe Secondary School has stood as a beacon of academic excellence, 
              fostering intellectual growth, character development, and community leadership. Our commitment to 
              nurturing tomorrow's leaders remains unwavering.
            </motion.p>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 fill-white">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </motion.section>

      {/* Mission Statement Section */}
      <motion.section 
        className="py-20 lg:py-32"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div variants={fadeInUp}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-school-blue rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To provide quality, holistic education that empowers learners with academic excellence, 
                integrity, and community responsibility. We strive to create an environment where every 
                student can discover their potential and develop the skills necessary for lifelong success.
              </p>
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-school-blue-light/20 rounded-full flex items-center justify-center mb-2">
                    <BookOpen className="w-8 h-8 text-school-blue" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Academic Excellence</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-school-blue-light/20 rounded-full flex items-center justify-center mb-2">
                    <Heart className="w-8 h-8 text-school-blue" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Character Building</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-school-blue-light/20 rounded-full flex items-center justify-center mb-2">
                    <Users className="w-8 h-8 text-school-blue" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">Community Focus</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-school-blue-light/20 to-school-blue/10 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-school-blue/5 to-transparent"></div>
                <Target className="w-32 h-32 text-school-blue/40" />
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/50 rounded-full flex items-center justify-center">
                  <Star className="w-10 h-10 text-school-blue" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Vision Statement Section */}
      <motion.section 
        className="py-20 lg:py-32 bg-school-gray/30"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              variants={fadeInUp}
              className="relative lg:order-1"
            >
              <div className="aspect-square bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-school-blue/5 to-transparent"></div>
                <Eye className="w-32 h-32 text-school-blue/40" />
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/50 rounded-full flex items-center justify-center">
                  <Globe className="w-12 h-12 text-school-blue" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                To be a leading academic institution recognized for nurturing disciplined, innovative, 
                and globally competitive students. We envision a future where our graduates become 
                transformative leaders who contribute meaningfully to society and the global community.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  <Trophy className="w-8 h-8 text-yellow-500 mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">Leadership</h4>
                  <p className="text-sm text-gray-600">Developing future leaders</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  <Globe className="w-8 h-8 text-blue-500 mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">Global Impact</h4>
                  <p className="text-sm text-gray-600">International perspective</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Motto Section */}
      <motion.section 
        className="py-20 lg:py-32 relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-school-blue/5 to-school-blue-light/5"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-school-blue/5 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-school-blue-light/5 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-school-blue/5 to-transparent rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-24 h-24 bg-school-blue rounded-full mb-8"
          >
            <Award className="w-12 h-12 text-white" />
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-school-blue mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'serif' }}
          >
            "Discipline and Excellence"
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our motto embodies the twin pillars upon which our educational philosophy stands. 
            Through discipline, we build character; through excellence, we reach our highest potential.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-school-blue rounded-full"></div>
              <span className="text-lg font-medium text-gray-700">Discipline</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-school-blue-light rounded-full"></div>
              <span className="text-lg font-medium text-gray-700">Excellence</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-school-blue-dark rounded-full"></div>
              <span className="text-lg font-medium text-gray-700">Success</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Image Gallery Section */}
      <motion.section 
        className="py-20 lg:py-32 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Campus</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our beautiful campus facilities designed to provide the best learning environment for our students.
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {galleryImages.map((image, index) => (
              <motion.div key={image.id} variants={fadeInUp}>
                <Card 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="aspect-square bg-gradient-to-br from-school-blue-light/20 to-school-blue/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-school-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-school-blue/40">
                        {index === 0 && <GraduationCap className="w-20 h-20" />}
                        {index === 1 && <BookOpen className="w-20 h-20" />}
                        {index === 2 && <Users className="w-20 h-20" />}
                        {index === 3 && <Trophy className="w-20 h-20" />}
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-semibold mb-1">{image.title}</h3>
                      <p className="text-sm text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <VisuallyHidden.Root>
            <DialogTitle>Campus Gallery</DialogTitle>
          </VisuallyHidden.Root>
          {selectedImage !== null && (
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-school-blue-light/20 to-school-blue/10 flex items-center justify-center">
                <div className="text-school-blue/40">
                  {selectedImage === 0 && <GraduationCap className="w-32 h-32" />}
                  {selectedImage === 1 && <BookOpen className="w-32 h-32" />}
                  {selectedImage === 2 && <Users className="w-32 h-32" />}
                  {selectedImage === 3 && <Trophy className="w-32 h-32" />}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {galleryImages[selectedImage]?.title}
                </h3>
                <p className="text-gray-600">
                  {galleryImages[selectedImage]?.description}
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 bg-black/20 text-white hover:bg-black/40"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Wave Separator */}
      <div className="relative">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 fill-school-blue-light/10">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </div>
  );
}
