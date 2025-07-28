import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Target,
  Eye,
  Award,
  Users,
  BookOpen,
  Microscope,
} from "lucide-react";

export function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Introduction Block */}
      <motion.section
        className="relative py-20 lg:py-32 bg-gradient-to-r from-school-blue to-school-blue-dark text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
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
            <GraduationCap className="w-10 h-10" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            About Chizongwe Secondary School
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Committed to academic excellence and character development,
            Chizongwe Secondary School has been nurturing disciplined,
            innovative students for over three decades. We provide quality
            education that empowers learners with integrity, knowledge, and
            community responsibility.
          </motion.p>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-12 fill-white"
          >
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </motion.section>

      {/* Mission, Vision, Motto Section */}
      <motion.section
        className="py-20 lg:py-24"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Mission */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-school-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-school-blue" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Mission
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    To provide quality, holistic education that empowers
                    learners with academic excellence, integrity, and community
                    responsibility.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Vision
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    To be a leading academic institution recognized for
                    nurturing disciplined, innovative, and globally competitive
                    students.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Motto */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-gradient-to-br from-school-blue/5 to-school-blue-light/5">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-school-blue rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Our Motto
                  </h2>
                  <p
                    className="text-2xl font-bold text-school-blue"
                    style={{ fontFamily: "serif" }}
                  >
                    "Discipline and Excellence"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Image Section */}
      <motion.section
        className="py-20 lg:py-24 bg-gray-50"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Learning Environment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern facilities designed to foster academic excellence and
              personal growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Image 1 - Students */}
            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-500 to-blue-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-20 h-20" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Student Life
                  </h3>
                  <p className="text-gray-600">
                    Engaged learning and collaborative activities
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Image 2 - Classroom */}
            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-500 to-emerald-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-20 h-20" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Modern Classrooms
                  </h3>
                  <p className="text-gray-600">
                    Interactive learning spaces with modern technology
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Image 3 - Science Lab */}
            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-500 to-indigo-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <Microscope className="w-20 h-20" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Science Laboratories
                  </h3>
                  <p className="text-gray-600">
                    State-of-the-art facilities for hands-on learning
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
