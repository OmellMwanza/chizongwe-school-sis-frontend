import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Search, FileText, Download, Mail, Settings } from "lucide-react";

interface ResultData {
  subject: string;
  marks: number;
  grade: string;
  position: number;
}

interface StudentResult {
  studentName: string;
  studentNumber: string;
  class: string;
  year: string;
  term: string;
  results: ResultData[];
  totalMarks: number;
  average: number;
  overallGrade: string;
  position: number;
  totalStudents: number;
}

export function Results() {
  const [formData, setFormData] = useState({
    year: "",
    term: "",
    grade: "",
    studentNumber: "",
  });
  const [searchResults, setSearchResults] = useState<StudentResult | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

  const scaleIn = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { duration: 0.8, delay: 0.2 },
  };

  // Sample data for demonstration
  const sampleResult: StudentResult = {
    studentName: "John Mwansa",
    studentNumber: "CS2024001",
    class: "Grade 12A",
    year: "2024",
    term: "Term 2",
    results: [
      { subject: "Mathematics", marks: 85, grade: "A", position: 3 },
      { subject: "English", marks: 78, grade: "B+", position: 5 },
      { subject: "Science", marks: 92, grade: "A+", position: 1 },
      { subject: "Social Studies", marks: 80, grade: "B+", position: 4 },
      { subject: "Religious Studies", marks: 88, grade: "A", position: 2 },
      { subject: "Practical Work", marks: 75, grade: "B", position: 8 },
    ],
    totalMarks: 498,
    average: 83,
    overallGrade: "A",
    position: 3,
    totalStudents: 45,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Validate form
    if (
      !formData.year ||
      !formData.term ||
      !formData.grade ||
      !formData.studentNumber
    ) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      // For demo purposes, show sample data if student number matches
      if (formData.studentNumber.toLowerCase() === "cs2024001") {
        setSearchResults(sampleResult);
      } else {
        setError(
          "Student record not found. Please check your student number and try again.",
        );
        setSearchResults(null);
      }
      setIsLoading(false);
    }, 1500);
  };

  const calculateTotalMarks = (results: ResultData[]) => {
    return results.reduce((total, result) => total + result.marks, 0);
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A+":
        return "text-green-600 bg-green-50";
      case "A":
        return "text-green-600 bg-green-50";
      case "B+":
        return "text-blue-600 bg-blue-50";
      case "B":
        return "text-blue-600 bg-blue-50";
      case "C+":
        return "text-yellow-600 bg-yellow-50";
      case "C":
        return "text-yellow-600 bg-yellow-50";
      default:
        return "text-red-600 bg-red-50";
    }
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-center mb-8"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.h1
          className="text-3xl lg:text-4xl font-bold text-school-blue mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Check Your Results
        </motion.h1>
        <motion.p
          className="text-lg text-school-gray-dark"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Enter your details below to access your academic results
        </motion.p>
      </motion.div>

      {/* Search Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Student Results Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
                variants={stagger}
                initial="initial"
                animate="animate"
              >
                <motion.div className="space-y-2" variants={fadeInUp}>
                  <Label htmlFor="year">Academic Year</Label>
                  <Select
                    value={formData.year}
                    onValueChange={(value) =>
                      setFormData({ ...formData, year: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div className="space-y-2" variants={fadeInUp}>
                  <Label htmlFor="term">Term</Label>
                  <Select
                    value={formData.term}
                    onValueChange={(value) =>
                      setFormData({ ...formData, term: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select term" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="term1">Term 1</SelectItem>
                      <SelectItem value="term2">Term 2</SelectItem>
                      <SelectItem value="term3">Term 3</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div className="space-y-2" variants={fadeInUp}>
                  <Label htmlFor="grade">Grade/Form</Label>
                  <Select
                    value={formData.grade}
                    onValueChange={(value) =>
                      setFormData({ ...formData, grade: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grade8">Grade 8</SelectItem>
                      <SelectItem value="grade9">Grade 9</SelectItem>
                      <SelectItem value="grade10">Grade 10</SelectItem>
                      <SelectItem value="grade11">Grade 11</SelectItem>
                      <SelectItem value="grade12">Grade 12</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>

                <motion.div className="space-y-2" variants={fadeInUp}>
                  <Label htmlFor="studentNumber">Student Number</Label>
                  <Input
                    id="studentNumber"
                    placeholder="e.g., CS2024001"
                    value={formData.studentNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        studentNumber: e.target.value,
                      })
                    }
                  />
                </motion.div>
              </motion.div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button
                  type="submit"
                  className="w-full md:w-auto bg-school-blue hover:bg-school-blue-dark hover:scale-105 transition-transform duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? "Searching..." : "Search Results"}
                  <Search className="ml-2 h-4 w-4" />
                </Button>

                <div className="text-sm text-school-gray-dark mt-3">
                  If you are an admin,{" "}
                  <Link
                    to="/admin/login"
                    className="text-school-blue hover:text-school-blue-dark underline"
                  >
                    log in here
                  </Link>
                  .
                </div>

                <div className="text-sm text-school-gray-dark mt-2">
                  <strong>Demo:</strong> Use student number "CS2024001" to see
                  sample results
                </div>
              </motion.div>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Results Display */}
      <AnimatePresence>
        {searchResults && (
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Student Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                    <span className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Student Results
                    </span>
                    <div className="flex gap-2 sm:gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 sm:flex-initial"
                      >
                        <Download className="h-4 w-4 sm:mr-2" />
                        <span className="hidden sm:inline">Download PDF</span>
                        <span className="sm:hidden">PDF</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 sm:flex-initial"
                      >
                        <Mail className="h-4 w-4 sm:mr-2" />
                        <span className="hidden sm:inline">Email Results</span>
                        <span className="sm:hidden">Email</span>
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-school-gray-dark">
                        Student Name
                      </p>
                      <p className="font-semibold">
                        {searchResults.studentName}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-school-gray-dark">
                        Student Number
                      </p>
                      <p className="font-semibold">
                        {searchResults.studentNumber}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-school-gray-dark">Class</p>
                      <p className="font-semibold">{searchResults.class}</p>
                    </div>
                    <div>
                      <p className="text-sm text-school-gray-dark">
                        Academic Period
                      </p>
                      <p className="font-semibold">
                        {searchResults.year} - {searchResults.term}
                      </p>
                    </div>
                  </div>

                  {/* Results Table */}
                  <div className="border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Subject</TableHead>
                          <TableHead className="text-center">Marks</TableHead>
                          <TableHead className="text-center">Grade</TableHead>
                          <TableHead className="text-center">
                            Position
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {searchResults.results.map((result, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">
                              {result.subject}
                            </TableCell>
                            <TableCell className="text-center">
                              {result.marks}/100
                            </TableCell>
                            <TableCell className="text-center">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${getGradeColor(result.grade)}`}
                              >
                                {result.grade}
                              </span>
                            </TableCell>
                            <TableCell className="text-center">
                              {result.position}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  {/* Summary */}
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-school-gray rounded-lg">
                    <div className="text-center">
                      <p className="text-sm text-school-gray-dark">
                        Total Marks
                      </p>
                      <p className="text-2xl font-bold text-school-blue">
                        {searchResults.totalMarks}/600
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-school-gray-dark">Average</p>
                      <p className="text-2xl font-bold text-school-blue">
                        {searchResults.average}%
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-school-gray-dark">
                        Overall Grade
                      </p>
                      <p
                        className={`text-2xl font-bold px-3 py-1 rounded-full ${getGradeColor(searchResults.overallGrade)}`}
                      >
                        {searchResults.overallGrade}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-school-gray-dark">
                        Class Position
                      </p>
                      <p className="text-2xl font-bold text-school-blue">
                        {searchResults.position}/{searchResults.totalStudents}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
