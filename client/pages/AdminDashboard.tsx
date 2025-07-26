import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  FileText,
  GraduationCap,
  Send,
  TrendingUp,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

export function AdminDashboard() {
  const stats = [
    {
      title: "Total Students",
      value: "1,247",
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Active Terms",
      value: "3",
      change: "Current",
      icon: Calendar,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Results Entered",
      value: "856",
      change: "+24%",
      icon: FileText,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Results Sent",
      value: "692",
      change: "+18%",
      icon: Send,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  const recentActivities = [
    {
      action: "New student enrolled",
      details: "John Banda - Grade 10A",
      time: "2 hours ago",
    },
    {
      action: "Results updated",
      details: "Mathematics - Grade 9B",
      time: "4 hours ago",
    },
    {
      action: "Results sent",
      details: "Chemistry results - Grade 11",
      time: "6 hours ago",
    },
    { action: "New term created", details: "Term 1, 2024", time: "1 day ago" },
    {
      action: "Student updated",
      details: "Mary Mwanza - Contact info",
      time: "2 days ago",
    },
  ];

  const quickActions = [
    {
      title: "Add New Student",
      href: "/admin/students",
      icon: Users,
      color: "bg-blue-600",
    },
    {
      title: "Enter Results",
      href: "/admin/results",
      icon: FileText,
      color: "bg-green-600",
    },
    {
      title: "Send Results",
      href: "/admin/send-results",
      icon: Send,
      color: "bg-purple-600",
    },
    {
      title: "Manage Terms",
      href: "/admin/terms",
      icon: Calendar,
      color: "bg-orange-600",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard Overview
          </h1>
          <p className="text-gray-600 mt-1">
            Welcome to Chizongwe Students Results System
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-school-blue rounded-full flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      <span
                        className={
                          stat.change.includes("+")
                            ? "text-green-600"
                            : "text-gray-600"
                        }
                      >
                        {stat.change}
                      </span>
                      {stat.change.includes("%") && " from last month"}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link key={action.title} to={action.href}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-3 h-12 hover:bg-gray-50"
                  >
                    <div className={`p-2 rounded-lg ${action.color}`}>
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    {action.title}
                  </Button>
                </Link>
              );
            })}
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50"
                >
                  <div className="h-2 w-2 bg-school-blue rounded-full mt-2 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {activity.action}
                    </p>
                    <p className="text-sm text-gray-500">{activity.details}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Academic Period */}
      <Card>
        <CardHeader>
          <CardTitle>Current Academic Period</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-school-blue-light/10 rounded-lg">
              <h3 className="font-semibold text-school-blue">Academic Year</h3>
              <p className="text-2xl font-bold text-gray-900 mt-2">2024</p>
            </div>
            <div className="text-center p-4 bg-green-100 rounded-lg">
              <h3 className="font-semibold text-green-700">Current Term</h3>
              <p className="text-2xl font-bold text-gray-900 mt-2">Term 1</p>
            </div>
            <div className="text-center p-4 bg-orange-100 rounded-lg">
              <h3 className="font-semibold text-orange-700">Week</h3>
              <p className="text-2xl font-bold text-gray-900 mt-2">Week 8</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
