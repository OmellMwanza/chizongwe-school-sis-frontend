import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { FileText, Plus, Save, Search } from "lucide-react";

interface Subject {
  id: string;
  name: string;
  marks: string;
  grade: string;
}

interface Student {
  id: string;
  name: string;
  studentNumber: string;
}

export function ManageResults() {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");
  const [subjects, setSubjects] = useState<Subject[]>([]);

  const years = ["2024", "2023", "2022"];
  const terms = ["Term 1", "Term 2", "Term 3"];
  const grades = ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];

  // Mock students data based on selected grade
  const students: Record<string, Student[]> = {
    "Grade 10": [
      { id: "1", name: "John Banda", studentNumber: "CS2024001" },
      { id: "2", name: "Alice Mwanza", studentNumber: "CS2024015" },
      { id: "3", name: "David Tembo", studentNumber: "CS2024028" },
    ],
    "Grade 11": [
      { id: "4", name: "Mary Mwanza", studentNumber: "CS2024002" },
      { id: "5", name: "James Phiri", studentNumber: "CS2024018" },
    ],
    "Grade 9": [
      { id: "6", name: "Peter Hamoonga", studentNumber: "CS2024003" },
      { id: "7", name: "Sarah Banda", studentNumber: "CS2024021" },
    ],
  };

  // Standard subjects for each grade
  const gradeSubjects: Record<string, string[]> = {
    "Grade 8": [
      "English",
      "Mathematics",
      "Science",
      "Social Studies",
      "Zambian Languages",
      "Physical Education",
    ],
    "Grade 9": [
      "English",
      "Mathematics",
      "Biology",
      "Chemistry",
      "Physics",
      "Geography",
      "History",
      "Zambian Languages",
    ],
    "Grade 10": [
      "English",
      "Mathematics",
      "Biology",
      "Chemistry",
      "Physics",
      "Geography",
      "History",
      "Additional Mathematics",
    ],
    "Grade 11": [
      "English",
      "Mathematics",
      "Biology",
      "Chemistry",
      "Physics",
      "Geography",
      "History",
      "Computer Studies",
    ],
    "Grade 12": [
      "English",
      "Mathematics",
      "Biology",
      "Chemistry",
      "Physics",
      "Geography",
      "History",
      "Computer Studies",
    ],
  };

  const getGrade = (marks: number): string => {
    if (marks >= 85) return "A";
    if (marks >= 75) return "B";
    if (marks >= 65) return "C";
    if (marks >= 55) return "D";
    if (marks >= 45) return "E";
    if (marks >= 35) return "F";
    return "G";
  };

  const loadStudentResults = () => {
    if (!selectedYear || !selectedTerm || !selectedGrade || !selectedStudent) {
      toast({
        title: "Selection Required",
        description: "Please select year, term, grade, and student first",
        variant: "destructive",
      });
      return;
    }

    // Load existing results or create new ones
    const studentSubjects = gradeSubjects[selectedGrade] || [];
    const loadedSubjects: Subject[] = studentSubjects.map((subject, index) => ({
      id: (index + 1).toString(),
      name: subject,
      marks: "", // In real app, load from database
      grade: "",
    }));

    setSubjects(loadedSubjects);
    toast({
      title: "Results Loaded",
      description: `Loaded subjects for ${selectedStudent}`,
    });
  };

  const handleMarksChange = (id: string, marks: string) => {
    const numMarks = parseInt(marks);
    const grade = marks && !isNaN(numMarks) ? getGrade(numMarks) : "";

    setSubjects(
      subjects.map((subject) =>
        subject.id === id ? { ...subject, marks, grade } : subject,
      ),
    );
  };

  const addNewSubject = () => {
    const newSubject: Subject = {
      id: Date.now().toString(),
      name: "",
      marks: "",
      grade: "",
    };
    setSubjects([...subjects, newSubject]);
  };

  const updateSubjectName = (id: string, name: string) => {
    setSubjects(
      subjects.map((subject) =>
        subject.id === id ? { ...subject, name } : subject,
      ),
    );
  };

  const removeSubject = (id: string) => {
    setSubjects(subjects.filter((subject) => subject.id !== id));
  };

  const saveResults = () => {
    if (!selectedYear || !selectedTerm || !selectedGrade || !selectedStudent) {
      toast({
        title: "Error",
        description: "Please select all required fields",
        variant: "destructive",
      });
      return;
    }

    const incompleteSubjects = subjects.filter(
      (subject) => !subject.name || !subject.marks,
    );
    if (incompleteSubjects.length > 0) {
      toast({
        title: "Incomplete Data",
        description: "Please fill in all subject names and marks",
        variant: "destructive",
      });
      return;
    }

    // In real app, save to database
    toast({
      title: "Results Saved",
      description: `Results saved successfully for ${selectedStudent}`,
    });
  };

  const availableStudents = selectedGrade ? students[selectedGrade] || [] : [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <FileText className="h-8 w-8 text-school-blue" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Results</h1>
            <p className="text-gray-600">
              Input and manage student examination results
            </p>
          </div>
        </div>
      </div>

      {/* Selection Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Select Academic Period and Student</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="space-y-2">
              <Label>Academic Year</Label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Term</Label>
              <Select value={selectedTerm} onValueChange={setSelectedTerm}>
                <SelectTrigger>
                  <SelectValue placeholder="Select term" />
                </SelectTrigger>
                <SelectContent>
                  {terms.map((term) => (
                    <SelectItem key={term} value={term}>
                      {term}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Grade/Form</Label>
              <Select
                value={selectedGrade}
                onValueChange={(value) => {
                  setSelectedGrade(value);
                  setSelectedStudent(""); // Reset student when grade changes
                  setSubjects([]); // Clear results
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select grade" />
                </SelectTrigger>
                <SelectContent>
                  {grades.map((grade) => (
                    <SelectItem key={grade} value={grade}>
                      {grade}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Student</Label>
              <Select
                value={selectedStudent}
                onValueChange={setSelectedStudent}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select student" />
                </SelectTrigger>
                <SelectContent>
                  {availableStudents.map((student) => (
                    <SelectItem key={student.id} value={student.name}>
                      {student.name} ({student.studentNumber})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button
            onClick={loadStudentResults}
            className="bg-school-blue hover:bg-school-blue-dark"
            disabled={
              !selectedYear ||
              !selectedTerm ||
              !selectedGrade ||
              !selectedStudent
            }
          >
            <Search className="h-4 w-4 mr-2" />
            Load Student Results
          </Button>
        </CardContent>
      </Card>

      {/* Results Input Table */}
      {subjects.length > 0 && (
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Results Entry</CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" onClick={addNewSubject}>
                <Plus className="h-4 w-4 mr-2" />
                Add Subject
              </Button>
              <Button
                onClick={saveResults}
                className="bg-green-600 hover:bg-green-700"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Results
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {selectedStudent && (
              <div className="mb-4 p-4 bg-school-blue-light/10 rounded-lg">
                <h3 className="font-semibold text-school-blue">
                  Student Information
                </h3>
                <p className="text-sm text-gray-600">
                  {selectedStudent} - {selectedGrade} - {selectedTerm}{" "}
                  {selectedYear}
                </p>
              </div>
            )}

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead className="w-[150px]">Marks (0-100)</TableHead>
                    <TableHead className="w-[100px]">Grade</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subjects.map((subject) => (
                    <TableRow key={subject.id}>
                      <TableCell>
                        <Input
                          value={subject.name}
                          onChange={(e) =>
                            updateSubjectName(subject.id, e.target.value)
                          }
                          placeholder="Subject name"
                          className="border-none p-0 focus-visible:ring-0"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          min="0"
                          max="100"
                          value={subject.marks}
                          onChange={(e) =>
                            handleMarksChange(subject.id, e.target.value)
                          }
                          placeholder="0-100"
                        />
                      </TableCell>
                      <TableCell>
                        <div
                          className={`
                          inline-flex items-center px-2 py-1 rounded-full text-xs font-medium
                          ${
                            subject.grade === "A"
                              ? "bg-green-100 text-green-800"
                              : subject.grade === "B"
                                ? "bg-blue-100 text-blue-800"
                                : subject.grade === "C"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : subject.grade === "D"
                                    ? "bg-orange-100 text-orange-800"
                                    : subject.grade === "E" ||
                                        subject.grade === "F" ||
                                        subject.grade === "G"
                                      ? "bg-red-100 text-red-800"
                                      : "bg-gray-100 text-gray-800"
                          }
                        `}
                        >
                          {subject.grade || "-"}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeSubject(subject.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {subjects.length > 0 && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">
                  Grading Scale
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-7 gap-2 text-xs">
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded">
                    A: 85-100
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    B: 75-84
                  </div>
                  <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    C: 65-74
                  </div>
                  <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded">
                    D: 55-64
                  </div>
                  <div className="bg-red-100 text-red-800 px-2 py-1 rounded">
                    E: 45-54
                  </div>
                  <div className="bg-red-100 text-red-800 px-2 py-1 rounded">
                    F: 35-44
                  </div>
                  <div className="bg-red-100 text-red-800 px-2 py-1 rounded">
                    G: 0-34
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
