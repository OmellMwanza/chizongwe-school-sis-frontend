import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Award,
  Users,
  BookOpen,
  Trophy,
  ChevronRight,
} from "lucide-react";

export function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { duration: 0.8, delay: 0.2 }
  };
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-school-blue to-school-blue-dark text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.h1
                className="text-4xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Welcome to{" "}
                <span className="block text-yellow-300">Chizongwe School</span>
              </motion.h1>
              <motion.p
                className="text-xl lg:text-2xl mb-8 text-blue-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Excellence in Education - Shaping Tomorrow's Leaders
              </motion.p>
              <motion.p
                className="text-lg mb-8 text-blue-200 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Access your academic results quickly and securely. Our digital
                results system provides instant access to grades, progress
                reports, and academic achievements.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
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
                  size="lg"
                  className="bg-school-blue-light hover:bg-school-blue-dark text-white font-semibold text-lg px-8 py-4 h-auto"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <GraduationCap className="h-20 w-20 text-yellow-300 mx-auto mb-4" />
                    </motion.div>
                    <p className="text-white/80 text-lg">
                      School Building Image
                    </p>
                    <p className="text-white/60 text-sm">Coming Soon</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="py-16 bg-school-gray"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
          >
            <motion.div
              className="text-center"
              variants={fadeInUp}
            >
              <motion.div
                className="bg-school-blue text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4"
                variants={scaleIn}
              >
                <Users className="h-8 w-8" />
              </motion.div>
              <h3 className="text-3xl font-bold text-school-blue">1,200+</h3>
              <p className="text-school-gray-dark">Students</p>
            </motion.div>
            <motion.div
              className="text-center"
              variants={fadeInUp}
            >
              <motion.div
                className="bg-school-blue text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4"
                variants={scaleIn}
              >
                <BookOpen className="h-8 w-8" />
              </motion.div>
              <h3 className="text-3xl font-bold text-school-blue">50+</h3>
              <p className="text-school-gray-dark">Teachers</p>
            </motion.div>
            <motion.div
              className="text-center"
              variants={fadeInUp}
            >
              <motion.div
                className="bg-school-blue text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4"
                variants={scaleIn}
              >
                <Award className="h-8 w-8" />
              </motion.div>
              <h3 className="text-3xl font-bold text-school-blue">15</h3>
              <p className="text-school-gray-dark">Years Excellence</p>
            </motion.div>
            <motion.div
              className="text-center"
              variants={fadeInUp}
            >
              <motion.div
                className="bg-school-blue text-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4"
                variants={scaleIn}
              >
                <Trophy className="h-8 w-8" />
              </motion.div>
              <h3 className="text-3xl font-bold text-school-blue">98%</h3>
              <p className="text-school-gray-dark">Pass Rate</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-20 bg-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <motion.h2
              className="text-3xl lg:text-4xl font-bold text-school-blue mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Why Choose Chizongwe School?
            </motion.h2>
            <motion.p
              className="text-xl text-school-gray-dark max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We provide quality education with modern facilities and dedicated
              teachers committed to nurturing every student's potential.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
          >
            <motion.div variants={fadeInUp}>
              <Card className="border-2 border-school-blue/20 hover:border-school-blue/40 transition-colors h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="bg-school-blue/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6"
                    variants={scaleIn}
                  >
                    <BookOpen className="h-8 w-8 text-school-blue" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-school-blue mb-4">
                    Quality Education
                  </h3>
                  <p className="text-school-gray-dark">
                    Comprehensive curriculum designed to meet international
                    standards and prepare students for higher education.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-2 border-school-blue/20 hover:border-school-blue/40 transition-colors h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="bg-school-blue/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6"
                    variants={scaleIn}
                  >
                    <Users className="h-8 w-8 text-school-blue" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-school-blue mb-4">
                    Experienced Teachers
                  </h3>
                  <p className="text-school-gray-dark">
                    Dedicated and qualified educators committed to providing
                    personalized attention to every student.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-2 border-school-blue/20 hover:border-school-blue/40 transition-colors h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <motion.div
                    className="bg-school-blue/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6"
                    variants={scaleIn}
                  >
                    <Trophy className="h-8 w-8 text-school-blue" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-school-blue mb-4">
                    Excellence Record
                  </h3>
                  <p className="text-school-gray-dark">
                    Proven track record of academic excellence with outstanding
                    results in national examinations.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-school-blue text-white"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Check Your Results?
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Access your academic progress instantly through our secure results
            portal.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4 h-auto hover:scale-105 transition-transform duration-300"
            >
              <Link to="/results">
                Access Results Portal
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
