import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { 
  Camera, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Users, 
  BookOpen, 
  Trophy, 
  Microscope, 
  Music, 
  Palette, 
  MapPin, 
  Heart,
  GraduationCap,
  Calendar,
  Award,
  Globe
} from "lucide-react";

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  color: string;
}

export function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState(9);

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      title: "Main Campus Building",
      description: "Our beautiful main academic building where students attend daily classes",
      category: "Campus",
      icon: <GraduationCap className="w-16 h-16" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Science Laboratory",
      description: "State-of-the-art laboratory for chemistry, physics, and biology experiments",
      category: "Facilities",
      icon: <Microscope className="w-16 h-16" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      title: "Students in Classroom",
      description: "Interactive learning sessions with dedicated teachers and engaged students",
      category: "Academic Life",
      icon: <BookOpen className="w-16 h-16" />,
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 4,
      title: "Sports Day Event",
      description: "Annual sports day showcasing athletic talents and team spirit",
      category: "Events",
      icon: <Trophy className="w-16 h-16" />,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Music Performance",
      description: "Students performing at our annual cultural festival",
      category: "Arts & Culture",
      icon: <Music className="w-16 h-16" />,
      color: "from-pink-500 to-rose-600"
    },
    {
      id: 6,
      title: "Art Exhibition",
      description: "Creative works displayed by our talented art students",
      category: "Arts & Culture",
      icon: <Palette className="w-16 h-16" />,
      color: "from-yellow-500 to-amber-600"
    },
    {
      id: 7,
      title: "Library Study Hall",
      description: "Quiet spaces for reading, research, and collaborative learning",
      category: "Facilities",
      icon: <Users className="w-16 h-16" />,
      color: "from-teal-500 to-cyan-600"
    },
    {
      id: 8,
      title: "Graduation Ceremony",
      description: "Celebrating the achievements of our graduating class",
      category: "Events",
      icon: <Award className="w-16 h-16" />,
      color: "from-indigo-500 to-blue-600"
    },
    {
      id: 9,
      title: "International Day",
      description: "Cultural diversity celebration with traditional performances",
      category: "Events",
      icon: <Globe className="w-16 h-16" />,
      color: "from-emerald-500 to-green-600"
    },
    {
      id: 10,
      title: "Community Service",
      description: "Students participating in community outreach programs",
      category: "Community",
      icon: <Heart className="w-16 h-16" />,
      color: "from-red-500 to-pink-600"
    },
    {
      id: 11,
      title: "Field Trip Adventure",
      description: "Educational excursions to expand learning beyond the classroom",
      category: "Academic Life",
      icon: <MapPin className="w-16 h-16" />,
      color: "from-violet-500 to-purple-600"
    },
    {
      id: 12,
      title: "Annual Prize Giving",
      description: "Recognizing academic excellence and outstanding achievements",
      category: "Events",
      icon: <Calendar className="w-16 h-16" />,
      color: "from-blue-600 to-indigo-700"
    }
  ];

  const categories = ["All", "Campus", "Facilities", "Academic Life", "Events", "Arts & Culture", "Community"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const displayedImages = filteredImages.slice(0, visibleImages);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;
    
    if (direction === 'prev') {
      setSelectedImageIndex(selectedImageIndex === 0 ? filteredImages.length - 1 : selectedImageIndex - 1);
    } else {
      setSelectedImageIndex(selectedImageIndex === filteredImages.length - 1 ? 0 : selectedImageIndex + 1);
    }
  };

  const loadMoreImages = () => {
    setVisibleImages(prev => Math.min(prev + 6, filteredImages.length));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-school-gray/20">
      {/* Header Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-school-blue to-school-blue-dark text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-24 h-24 border border-white rounded-full"></div>
          <div className="absolute top-20 right-20 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 border border-white rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8"
          >
            <Camera className="w-10 h-10" />
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our School in Pictures
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explore moments from our classrooms, events, and everyday life at Chizongwe. 
            Discover the vibrant community that makes our school special.
          </motion.p>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 fill-white">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex flex-wrap justify-center gap-2 md:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-full transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-school-blue hover:bg-school-blue-dark text-white" 
                    : "border-school-blue text-school-blue hover:bg-school-blue hover:text-white"
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleImages(9);
                }}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {displayedImages.map((image, index) => (
              <motion.div
                key={`${selectedCategory}-${image.id}`}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card 
                  className="overflow-hidden cursor-pointer group h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
                  onClick={() => openLightbox(index)}
                >
                  <CardContent className="p-0">
                    <div className="aspect-square relative overflow-hidden">
                      {/* Image Placeholder with Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${image.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                      </div>
                      
                      {/* Icon */}
                      <div className="absolute inset-0 flex items-center justify-center text-white/90 group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform duration-300">
                        {image.icon}
                      </div>

                      {/* Overlay with hover effect */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs font-medium text-white">{image.category}</span>
                      </div>

                      {/* Zoom Icon */}
                      <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Camera className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base line-clamp-2 group-hover:text-school-blue transition-colors duration-300">
                        {image.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          {visibleImages < filteredImages.length && (
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                onClick={loadMoreImages}
                className="bg-school-blue hover:bg-school-blue-dark text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg"
              >
                View More Photos
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <Dialog open={true} onOpenChange={closeLightbox}>
            <DialogContent className="max-w-6xl w-full h-full md:h-auto p-0 bg-black border-none">
              <VisuallyHidden.Root>
                <DialogTitle>Gallery Image Viewer</DialogTitle>
              </VisuallyHidden.Root>
              
              <motion.div 
                className="relative w-full h-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full w-10 h-10 p-0"
                  onClick={closeLightbox}
                >
                  <X className="w-5 h-5" />
                </Button>

                {/* Navigation Arrows */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full w-12 h-12 p-0"
                  onClick={() => navigateLightbox('prev')}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 text-white hover:bg-white/20 rounded-full w-12 h-12 p-0"
                  onClick={() => navigateLightbox('next')}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>

                {/* Image Display */}
                <div className="w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
                  <div className="w-full max-w-4xl">
                    <div className={`aspect-video bg-gradient-to-br ${filteredImages[selectedImageIndex].color} rounded-lg overflow-hidden relative`}>
                      <div className="absolute inset-0 flex items-center justify-center text-white">
                        <div className="scale-150">
                          {filteredImages[selectedImageIndex].icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Caption */}
                    <div className="mt-6 text-center text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        {filteredImages[selectedImageIndex].title}
                      </h3>
                      <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        {filteredImages[selectedImageIndex].description}
                      </p>
                      <div className="mt-4 flex justify-center">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                          {filteredImages[selectedImageIndex].category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 text-sm">
                  {selectedImageIndex + 1} of {filteredImages.length}
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Bottom Wave */}
      <div className="relative">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 fill-school-blue-light/10">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </div>
  );
}
