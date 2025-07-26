import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";
import { Send, Search, Eye, Mail, Users, FileText, CheckCircle } from "lucide-react";

interface Student {
  id: string;
  name: string;
  studentNumber: string;
  grade: string;
  class: string;
  email: string;
  guardianEmail: string;
  guardianContact: string;
}

interface Subject {
  name: string;
  marks: number;
  grade: string;
}

interface StudentResult {
  student: Student;
  subjects: Subject[];
  term: string;
  year: string;
  average: number;
  overallGrade: string;
}

export function SendResults() {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedGrade, setSelectedGrade] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [previewStudent, setPreviewStudent] = useState<StudentResult | null>(null);
  const [emailSubject, setEmailSubject] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [sendingEmails, setSendingEmails] = useState(false);

  const students: Student[] = [
    {
      id: "1",
      name: "John Banda",
      studentNumber: "CS2024001",
      grade: "Grade 10",
      class: "10A",
      email: "john.banda@student.chizongwe.edu.zm",
      guardianEmail: "parent.banda@gmail.com",
      guardianContact: "+260 977 123456"
    },
    {
      id: "2",
      name: "Mary Mwanza",
      studentNumber: "CS2024002",
      grade: "Grade 11",
      class: "11B",
      email: "mary.mwanza@student.chizongwe.edu.zm",
      guardianEmail: "guardian.mwanza@gmail.com",
      guardianContact: "+260 966 789012"
    },
    {
      id: "3",
      name: "Peter Hamoonga",
      studentNumber: "CS2024003",
      grade: "Grade 9",
      class: "9A",
      email: "peter.hamoonga@student.chizongwe.edu.zm",
      guardianEmail: "guardian.hamoonga@gmail.com",
      guardianContact: "+260 955 456789"
    }
  ];

  // Mock results data
  const mockResults: Record<string, Subject[]> = {
    "1": [
      { name: "Mathematics", marks: 85, grade: "A" },
      { name: "English", marks: 78, grade: "B" },
      { name: "Biology", marks: 82, grade: "B" },
      { name: "Chemistry", marks: 90, grade: "A" },
      { name: "Physics", marks: 76, grade: "B" }
    ],
    "2": [
      { name: "Mathematics", marks: 92, grade: "A" },
      { name: "English", marks: 88, grade: "A" },
      { name: "Biology", marks: 85, grade: "A" },
      { name: "Chemistry", marks: 89, grade: "A" },
      { name: "Physics", marks: 83, grade: "B" }
    ],
    "3": [
      { name: "Mathematics", marks: 68, grade: "C" },
      { name: "English", marks: 72, grade: "C" },
      { name: "Science", marks: 75, grade: "B" },
      { name: "Social Studies", marks: 79, grade: "B" },
      { name: "Zambian Languages", marks: 81, grade: "B" }
    ]
  };

  const years = ["2024", "2023", "2022"];
  const terms = ["Term 1", "Term 2", "Term 3"];
  const grades = ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.studentNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = !selectedGrade || selectedGrade === "all" || student.grade === selectedGrade;
    return matchesSearch && matchesGrade;
  });

  const calculateAverage = (subjects: Subject[]): number => {
    if (subjects.length === 0) return 0;
    const total = subjects.reduce((sum, subject) => sum + subject.marks, 0);
    return Math.round(total / subjects.length);
  };

  const getOverallGrade = (average: number): string => {
    if (average >= 85) return "A";
    if (average >= 75) return "B";
    if (average >= 65) return "C";
    if (average >= 55) return "D";
    if (average >= 45) return "E";
    return "F";
  };

  const handleStudentSelect = (studentId: string, checked: boolean) => {
    if (checked) {
      setSelectedStudents([...selectedStudents, studentId]);
    } else {
      setSelectedStudents(selectedStudents.filter(id => id !== studentId));
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedStudents(filteredStudents.map(student => student.id));
    } else {
      setSelectedStudents([]);
    }
  };

  const handlePreviewResults = (student: Student) => {
    if (!selectedYear || !selectedTerm) {
      toast({
        title: "Selection Required",
        description: "Please select year and term first",
        variant: "destructive"
      });
      return;
    }

    const subjects = mockResults[student.id] || [];
    const average = calculateAverage(subjects);
    const overallGrade = getOverallGrade(average);

    const studentResult: StudentResult = {
      student,
      subjects,
      term: selectedTerm,
      year: selectedYear,
      average,
      overallGrade
    };

    setPreviewStudent(studentResult);
    
    // Set default email content
    if (!emailSubject) {
      setEmailSubject(`${selectedTerm} ${selectedYear} Results - ${student.name}`);
    }
    if (!emailMessage) {
      setEmailMessage(`Dear Parent/Guardian,

Please find attached the academic results for ${student.name} (${student.studentNumber}) for ${selectedTerm} ${selectedYear}.

Best regards,
Chizongwe Students Results System`);
    }
  };

  const handleSendResults = async () => {
    if (!selectedYear || !selectedTerm) {
      toast({
        title: "Selection Required",
        description: "Please select year and term",
        variant: "destructive"
      });
      return;
    }

    if (selectedStudents.length === 0) {
      toast({
        title: "No Students Selected",
        description: "Please select at least one student",
        variant: "destructive"
      });
      return;
    }

    if (!emailSubject || !emailMessage) {
      toast({
        title: "Email Content Required",
        description: "Please provide email subject and message",
        variant: "destructive"
      });
      return;
    }

    setSendingEmails(true);
    
    // Simulate sending emails
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Results Sent Successfully",
        description: `Results sent to ${selectedStudents.length} student(s)`,
      });
      
      setSelectedStudents([]);
      setPreviewStudent(null);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send results. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSendingEmails(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Send className="h-8 w-8 text-school-blue" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Send Results</h1>
          <p className="text-gray-600">Send student results via email to parents and guardians</p>
        </div>
      </div>

      {/* Selection Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Select Academic Period</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Academic Year</Label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
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
                    <SelectItem key={term} value={term}>{term}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Grade (Optional)</Label>
              <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                <SelectTrigger>
                  <SelectValue placeholder="All grades" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All grades</SelectItem>
                  {grades.map((grade) => (
                    <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Student Selection */}
        <div className="space-y-6">
          {/* Search */}
          <Card>
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search students..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          {/* Students List */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Students ({filteredStudents.length})
              </CardTitle>
              <div className="flex items-center gap-2">
                <Checkbox
                  checked={selectedStudents.length === filteredStudents.length && filteredStudents.length > 0}
                  onCheckedChange={handleSelectAll}
                />
                <span className="text-sm">Select All</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {filteredStudents.map((student) => (
                  <div key={student.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        checked={selectedStudents.includes(student.id)}
                        onCheckedChange={(checked) => handleStudentSelect(student.id, checked as boolean)}
                      />
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-gray-500">{student.studentNumber} - {student.grade} {student.class}</p>
                        <p className="text-xs text-gray-400">{student.guardianEmail}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePreviewResults(student)}
                      disabled={!selectedYear || !selectedTerm}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      Preview
                    </Button>
                  </div>
                ))}
              </div>
              
              {selectedStudents.length > 0 && (
                <div className="mt-4 p-3 bg-school-blue-light/10 rounded-lg">
                  <p className="text-sm font-medium text-school-blue">
                    {selectedStudents.length} student(s) selected for email
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Preview and Email */}
        <div className="space-y-6">
          {/* Results Preview */}
          {previewStudent && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Results Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-school-blue-light/10 p-4 rounded-lg">
                    <h3 className="font-semibold text-school-blue">{previewStudent.student.name}</h3>
                    <p className="text-sm text-gray-600">{previewStudent.student.studentNumber}</p>
                    <p className="text-sm text-gray-600">{previewStudent.term} {previewStudent.year}</p>
                  </div>

                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Subject</TableHead>
                          <TableHead>Marks</TableHead>
                          <TableHead>Grade</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {previewStudent.subjects.map((subject, index) => (
                          <TableRow key={index}>
                            <TableCell>{subject.name}</TableCell>
                            <TableCell>{subject.marks}</TableCell>
                            <TableCell>
                              <Badge variant={subject.grade === 'A' ? 'default' : subject.grade === 'B' ? 'secondary' : 'outline'}>
                                {subject.grade}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Overall Average:</span>
                      <span className="text-lg font-bold">{previewStudent.average}%</span>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-medium">Overall Grade:</span>
                      <Badge variant={previewStudent.overallGrade === 'A' ? 'default' : 'secondary'}>
                        {previewStudent.overallGrade}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Email Configuration */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Configuration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="emailSubject">Subject</Label>
                <Input
                  id="emailSubject"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  placeholder="Email subject"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emailMessage">Message</Label>
                <Textarea
                  id="emailMessage"
                  value={emailMessage}
                  onChange={(e) => setEmailMessage(e.target.value)}
                  placeholder="Email message"
                  rows={6}
                />
              </div>
              <Button
                onClick={handleSendResults}
                disabled={sendingEmails || selectedStudents.length === 0}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                {sendingEmails ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Sending Results...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Results via Email ({selectedStudents.length})
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
