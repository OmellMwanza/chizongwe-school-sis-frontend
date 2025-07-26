import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Plus, Search, Edit, Trash2, Users } from "lucide-react";

interface Student {
  id: string;
  name: string;
  studentNumber: string;
  grade: string;
  class: string;
  dob: string;
  guardianContact: string;
  email: string;
  address: string;
}

export function ManageStudents() {
  const [students, setStudents] = useState<Student[]>([
    {
      id: "1",
      name: "John Banda",
      studentNumber: "CS2024001",
      grade: "Grade 10",
      class: "10A",
      dob: "2008-05-15",
      guardianContact: "+260 977 123456",
      email: "john.banda@student.chizongwe.edu.zm",
      address: "Plot 123, Lusaka Road, Choma"
    },
    {
      id: "2",
      name: "Mary Mwanza",
      studentNumber: "CS2024002",
      grade: "Grade 11",
      class: "11B",
      dob: "2007-08-22",
      guardianContact: "+260 966 789012",
      email: "mary.mwanza@student.chizongwe.edu.zm",
      address: "House 45, Maamba Road, Choma"
    },
    {
      id: "3",
      name: "Peter Hamoonga",
      studentNumber: "CS2024003",
      grade: "Grade 9",
      class: "9A",
      dob: "2009-12-03",
      guardianContact: "+260 955 456789",
      email: "peter.hamoonga@student.chizongwe.edu.zm",
      address: "Plot 67, Independence Avenue, Choma"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    studentNumber: "",
    grade: "",
    class: "",
    dob: "",
    guardianContact: "",
    email: "",
    address: ""
  });

  const grades = ["Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];
  const classes = {
    "Grade 8": ["8A", "8B", "8C"],
    "Grade 9": ["9A", "9B", "9C"],
    "Grade 10": ["10A", "10B", "10C"],
    "Grade 11": ["11A", "11B", "11C"],
    "Grade 12": ["12A", "12B", "12C"]
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.studentNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.grade.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const resetForm = () => {
    setFormData({
      name: "",
      studentNumber: "",
      grade: "",
      class: "",
      dob: "",
      guardianContact: "",
      email: "",
      address: ""
    });
  };

  const handleAddStudent = () => {
    if (!formData.name || !formData.studentNumber || !formData.grade) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const newStudent: Student = {
      id: Date.now().toString(),
      ...formData
    };

    setStudents([...students, newStudent]);
    setIsAddModalOpen(false);
    resetForm();
    toast({
      title: "Success",
      description: "Student added successfully"
    });
  };

  const handleEditStudent = (student: Student) => {
    setEditingStudent(student);
    setFormData({ ...student });
    setIsEditModalOpen(true);
  };

  const handleUpdateStudent = () => {
    if (!formData.name || !formData.studentNumber || !formData.grade) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setStudents(students.map(student =>
      student.id === editingStudent?.id ? { ...student, ...formData } : student
    ));
    setIsEditModalOpen(false);
    setEditingStudent(null);
    resetForm();
    toast({
      title: "Success",
      description: "Student updated successfully"
    });
  };

  const handleDeleteStudent = (id: string) => {
    if (confirm("Are you sure you want to delete this student?")) {
      setStudents(students.filter(student => student.id !== id));
      toast({
        title: "Success",
        description: "Student deleted successfully"
      });
    }
  };

  const StudentForm = ({ isEdit = false }: { isEdit?: boolean }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="Enter full name"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="studentNumber">Student Number *</Label>
        <Input
          id="studentNumber"
          value={formData.studentNumber}
          onChange={(e) => setFormData({...formData, studentNumber: e.target.value})}
          placeholder="CS2024XXX"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="grade">Grade/Form *</Label>
        <Select value={formData.grade} onValueChange={(value) => setFormData({...formData, grade: value, class: ""})}>
          <SelectTrigger>
            <SelectValue placeholder="Select grade" />
          </SelectTrigger>
          <SelectContent>
            {grades.map((grade) => (
              <SelectItem key={grade} value={grade}>{grade}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="class">Class</Label>
        <Select value={formData.class} onValueChange={(value) => setFormData({...formData, class: value})}>
          <SelectTrigger>
            <SelectValue placeholder="Select class" />
          </SelectTrigger>
          <SelectContent>
            {formData.grade && classes[formData.grade as keyof typeof classes]?.map((cls) => (
              <SelectItem key={cls} value={cls}>{cls}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="dob">Date of Birth</Label>
        <Input
          id="dob"
          type="date"
          value={formData.dob}
          onChange={(e) => setFormData({...formData, dob: e.target.value})}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="guardianContact">Guardian Contact</Label>
        <Input
          id="guardianContact"
          value={formData.guardianContact}
          onChange={(e) => setFormData({...formData, guardianContact: e.target.value})}
          placeholder="+260 XXX XXXXXX"
        />
      </div>
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="student@chizongwe.edu.zm"
        />
      </div>
      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="address">Address</Label>
        <Input
          id="address"
          value={formData.address}
          onChange={(e) => setFormData({...formData, address: e.target.value})}
          placeholder="Full address"
        />
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Users className="h-8 w-8 text-school-blue" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Students</h1>
            <p className="text-gray-600">Add, edit, and manage student records</p>
          </div>
        </div>
        <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-school-blue hover:bg-school-blue-dark" onClick={resetForm}>
              <Plus className="h-4 w-4 mr-2" />
              Add Student
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Student</DialogTitle>
              <DialogDescription>
                Enter the student's information below. Fields marked with * are required.
              </DialogDescription>
            </DialogHeader>
            <StudentForm />
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddStudent} className="bg-school-blue hover:bg-school-blue-dark">
                Save Student
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search students by name, student number, or grade..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Students Table */}
      <Card>
        <CardHeader>
          <CardTitle>Students ({filteredStudents.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Student Number</TableHead>
                  <TableHead>Grade/Form</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>D.O.B.</TableHead>
                  <TableHead>Guardian Contact</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.studentNumber}</TableCell>
                    <TableCell>{student.grade}</TableCell>
                    <TableCell>{student.class}</TableCell>
                    <TableCell>{student.dob}</TableCell>
                    <TableCell>{student.guardianContact}</TableCell>
                    <TableCell className="max-w-[200px] truncate">{student.email}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEditStudent(student)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDeleteStudent(student.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Edit Student Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Student</DialogTitle>
            <DialogDescription>
              Update the student's information below.
            </DialogDescription>
          </DialogHeader>
          <StudentForm isEdit />
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateStudent} className="bg-school-blue hover:bg-school-blue-dark">
              Update Student
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
