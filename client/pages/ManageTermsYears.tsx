import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Calendar, Plus, Edit, Trash2, Save, CheckCircle, XCircle } from "lucide-react";

interface AcademicYear {
  id: string;
  year: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

interface Term {
  id: string;
  yearId: string;
  year: string;
  name: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

export function ManageTermsYears() {
  const [academicYears, setAcademicYears] = useState<AcademicYear[]>([
    {
      id: "1",
      year: "2024",
      startDate: "2024-01-15",
      endDate: "2024-12-15",
      isActive: true
    },
    {
      id: "2",
      year: "2023",
      startDate: "2023-01-15",
      endDate: "2023-12-15",
      isActive: false
    }
  ]);

  const [terms, setTerms] = useState<Term[]>([
    {
      id: "1",
      yearId: "1",
      year: "2024",
      name: "Term 1",
      startDate: "2024-01-15",
      endDate: "2024-04-15",
      isActive: true
    },
    {
      id: "2",
      yearId: "1",
      year: "2024",
      name: "Term 2",
      startDate: "2024-05-01",
      endDate: "2024-08-15",
      isActive: false
    },
    {
      id: "3",
      yearId: "1",
      year: "2024",
      name: "Term 3",
      startDate: "2024-09-01",
      endDate: "2024-12-15",
      isActive: false
    }
  ]);

  const [yearForm, setYearForm] = useState({
    year: "",
    startDate: "",
    endDate: ""
  });

  const [termForm, setTermForm] = useState({
    yearId: "",
    name: "",
    startDate: "",
    endDate: ""
  });

  const [editingYear, setEditingYear] = useState<string | null>(null);
  const [editingTerm, setEditingTerm] = useState<string | null>(null);

  const resetYearForm = () => {
    setYearForm({ year: "", startDate: "", endDate: "" });
    setEditingYear(null);
  };

  const resetTermForm = () => {
    setTermForm({ yearId: "", name: "", startDate: "", endDate: "" });
    setEditingTerm(null);
  };

  const handleAddYear = () => {
    if (!yearForm.year || !yearForm.startDate || !yearForm.endDate) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    const newYear: AcademicYear = {
      id: Date.now().toString(),
      year: yearForm.year,
      startDate: yearForm.startDate,
      endDate: yearForm.endDate,
      isActive: false
    };

    setAcademicYears([...academicYears, newYear]);
    resetYearForm();
    toast({
      title: "Success",
      description: "Academic year added successfully"
    });
  };

  const handleEditYear = (year: AcademicYear) => {
    setYearForm({
      year: year.year,
      startDate: year.startDate,
      endDate: year.endDate
    });
    setEditingYear(year.id);
  };

  const handleUpdateYear = () => {
    if (!yearForm.year || !yearForm.startDate || !yearForm.endDate) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    setAcademicYears(academicYears.map(year => 
      year.id === editingYear 
        ? { ...year, ...yearForm }
        : year
    ));
    resetYearForm();
    toast({
      title: "Success",
      description: "Academic year updated successfully"
    });
  };

  const handleDeleteYear = (id: string) => {
    if (confirm("Are you sure you want to delete this academic year? This will also delete all associated terms.")) {
      setAcademicYears(academicYears.filter(year => year.id !== id));
      setTerms(terms.filter(term => term.yearId !== id));
      toast({
        title: "Success",
        description: "Academic year deleted successfully"
      });
    }
  };

  const handleSetActiveYear = (id: string) => {
    setAcademicYears(academicYears.map(year => ({
      ...year,
      isActive: year.id === id
    })));
    toast({
      title: "Success",
      description: "Active year updated successfully"
    });
  };

  const handleAddTerm = () => {
    if (!termForm.yearId || !termForm.name || !termForm.startDate || !termForm.endDate) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    const selectedYear = academicYears.find(year => year.id === termForm.yearId);
    const newTerm: Term = {
      id: Date.now().toString(),
      yearId: termForm.yearId,
      year: selectedYear?.year || "",
      name: termForm.name,
      startDate: termForm.startDate,
      endDate: termForm.endDate,
      isActive: false
    };

    setTerms([...terms, newTerm]);
    resetTermForm();
    toast({
      title: "Success",
      description: "Term added successfully"
    });
  };

  const handleEditTerm = (term: Term) => {
    setTermForm({
      yearId: term.yearId,
      name: term.name,
      startDate: term.startDate,
      endDate: term.endDate
    });
    setEditingTerm(term.id);
  };

  const handleUpdateTerm = () => {
    if (!termForm.yearId || !termForm.name || !termForm.startDate || !termForm.endDate) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    const selectedYear = academicYears.find(year => year.id === termForm.yearId);
    setTerms(terms.map(term => 
      term.id === editingTerm 
        ? { ...term, ...termForm, year: selectedYear?.year || term.year }
        : term
    ));
    resetTermForm();
    toast({
      title: "Success",
      description: "Term updated successfully"
    });
  };

  const handleDeleteTerm = (id: string) => {
    if (confirm("Are you sure you want to delete this term?")) {
      setTerms(terms.filter(term => term.id !== id));
      toast({
        title: "Success",
        description: "Term deleted successfully"
      });
    }
  };

  const handleSetActiveTerm = (id: string) => {
    setTerms(terms.map(term => ({
      ...term,
      isActive: term.id === id
    })));
    toast({
      title: "Success",
      description: "Active term updated successfully"
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Calendar className="h-8 w-8 text-school-blue" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Manage Terms & Years</h1>
          <p className="text-gray-600">Create and manage academic years and terms</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Academic Years */}
        <div className="space-y-6">
          {/* Add/Edit Academic Year Form */}
          <Card>
            <CardHeader>
              <CardTitle>
                {editingYear ? "Edit Academic Year" : "Add Academic Year"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="year">Year</Label>
                <Input
                  id="year"
                  value={yearForm.year}
                  onChange={(e) => setYearForm({...yearForm, year: e.target.value})}
                  placeholder="2024"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="yearStartDate">Start Date</Label>
                <Input
                  id="yearStartDate"
                  type="date"
                  value={yearForm.startDate}
                  onChange={(e) => setYearForm({...yearForm, startDate: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="yearEndDate">End Date</Label>
                <Input
                  id="yearEndDate"
                  type="date"
                  value={yearForm.endDate}
                  onChange={(e) => setYearForm({...yearForm, endDate: e.target.value})}
                />
              </div>
              <div className="flex gap-2">
                <Button 
                  onClick={editingYear ? handleUpdateYear : handleAddYear}
                  className="bg-school-blue hover:bg-school-blue-dark"
                >
                  <Save className="h-4 w-4 mr-2" />
                  {editingYear ? "Update" : "Add"} Year
                </Button>
                {editingYear && (
                  <Button variant="outline" onClick={resetYearForm}>
                    Cancel
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Academic Years List */}
          <Card>
            <CardHeader>
              <CardTitle>Academic Years</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Year</TableHead>
                      <TableHead>Period</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {academicYears.map((year) => (
                      <TableRow key={year.id}>
                        <TableCell className="font-medium">{year.year}</TableCell>
                        <TableCell className="text-sm">
                          {year.startDate} to {year.endDate}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {year.isActive ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                              <XCircle className="h-4 w-4 text-gray-400" />
                            )}
                            <span className={year.isActive ? "text-green-600" : "text-gray-500"}>
                              {year.isActive ? "Active" : "Inactive"}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            {!year.isActive && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleSetActiveYear(year.id)}
                                className="text-green-600"
                              >
                                Activate
                              </Button>
                            )}
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEditYear(year)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDeleteYear(year.id)}
                              className="text-red-600"
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
        </div>

        {/* Terms */}
        <div className="space-y-6">
          {/* Add/Edit Term Form */}
          <Card>
            <CardHeader>
              <CardTitle>
                {editingTerm ? "Edit Term" : "Add Term"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="termYear">Academic Year</Label>
                <Select value={termForm.yearId} onValueChange={(value) => setTermForm({...termForm, yearId: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {academicYears.map((year) => (
                      <SelectItem key={year.id} value={year.id}>{year.year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="termName">Term Name</Label>
                <Select value={termForm.name} onValueChange={(value) => setTermForm({...termForm, name: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select term" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Term 1">Term 1</SelectItem>
                    <SelectItem value="Term 2">Term 2</SelectItem>
                    <SelectItem value="Term 3">Term 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="termStartDate">Start Date</Label>
                <Input
                  id="termStartDate"
                  type="date"
                  value={termForm.startDate}
                  onChange={(e) => setTermForm({...termForm, startDate: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="termEndDate">End Date</Label>
                <Input
                  id="termEndDate"
                  type="date"
                  value={termForm.endDate}
                  onChange={(e) => setTermForm({...termForm, endDate: e.target.value})}
                />
              </div>
              <div className="flex gap-2">
                <Button 
                  onClick={editingTerm ? handleUpdateTerm : handleAddTerm}
                  className="bg-school-blue hover:bg-school-blue-dark"
                >
                  <Save className="h-4 w-4 mr-2" />
                  {editingTerm ? "Update" : "Add"} Term
                </Button>
                {editingTerm && (
                  <Button variant="outline" onClick={resetTermForm}>
                    Cancel
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Terms List */}
          <Card>
            <CardHeader>
              <CardTitle>Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Year</TableHead>
                      <TableHead>Term</TableHead>
                      <TableHead>Period</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {terms.map((term) => (
                      <TableRow key={term.id}>
                        <TableCell>{term.year}</TableCell>
                        <TableCell className="font-medium">{term.name}</TableCell>
                        <TableCell className="text-sm">
                          {term.startDate} to {term.endDate}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            {term.isActive ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                              <XCircle className="h-4 w-4 text-gray-400" />
                            )}
                            <span className={term.isActive ? "text-green-600" : "text-gray-500"}>
                              {term.isActive ? "Active" : "Inactive"}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            {!term.isActive && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleSetActiveTerm(term.id)}
                                className="text-green-600"
                              >
                                Activate
                              </Button>
                            )}
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEditTerm(term)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDeleteTerm(term.id)}
                              className="text-red-600"
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
        </div>
      </div>
    </div>
  );
}
