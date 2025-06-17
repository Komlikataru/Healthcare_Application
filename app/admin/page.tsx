"use client"

import { useAuth } from "@/components/providers/auth-provider"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  Calendar,
  FileText,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  UserPlus,
  Settings,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

export default function AdminPage() {
  const { user } = useAuth()

  if (!user || user.role !== "admin") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-4">You don't have permission to access this page.</p>
          <Button asChild className="healthcare-gradient">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    )
  }

  const stats = [
    {
      title: "Total Patients",
      value: "2,847",
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Active Doctors",
      value: "156",
      change: "+3%",
      icon: Activity,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Appointments Today",
      value: "89",
      change: "+8%",
      icon: Calendar,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      title: "Revenue (Month)",
      value: "$47,892",
      change: "+15%",
      icon: DollarSign,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  const recentPatients = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@email.com",
      joinDate: "Dec 25, 2024",
      status: "Active",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-HNcWT5i5a9QF2sdQ1FO5nCouZLdrZY.avif",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      joinDate: "Dec 24, 2024",
      status: "Active",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-HNcWT5i5a9QF2sdQ1FO5nCouZLdrZY.avif",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "m.brown@email.com",
      joinDate: "Dec 23, 2024",
      status: "Pending",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-HNcWT5i5a9QF2sdQ1FO5nCouZLdrZY.avif",
    },
  ]

  const systemAlerts = [
    {
      id: 1,
      type: "warning",
      title: "Server Load High",
      message: "Database server experiencing high load",
      time: "5 minutes ago",
    },
    {
      id: 2,
      type: "info",
      title: "Backup Completed",
      message: "Daily backup completed successfully",
      time: "2 hours ago",
    },
    {
      id: 3,
      type: "error",
      title: "Payment Gateway Issue",
      message: "Payment processing temporarily unavailable",
      time: "1 hour ago",
    },
  ]

  const doctorPerformance = [
    { name: "Dr. Sarah Johnson", patients: 45, rating: 4.9, appointments: 128 },
    { name: "Dr. Michael Chen", patients: 38, rating: 4.8, appointments: 95 },
    { name: "Dr. Emily Davis", patients: 52, rating: 4.7, appointments: 156 },
    { name: "Dr. Robert Smith", patients: 41, rating: 4.6, appointments: 112 },
  ]

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />
      case "error":
        return <AlertTriangle className="h-4 w-4 text-red-600" />
      case "info":
        return <CheckCircle className="h-4 w-4 text-blue-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getAlertColor = (type: string) => {
    switch (type) {
      case "warning":
        return "bg-yellow-50 border-yellow-200"
      case "error":
        return "bg-red-50 border-red-200"
      case "info":
        return "bg-blue-50 border-blue-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">System overview and management tools</p>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              className="hover:scale-105 transition-transform duration-300"
              onClick={() => {
                alert("Opening system settings...")
                // In real app, this would navigate to settings page
              }}
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button
              className="healthcare-gradient hover:scale-105 transition-transform duration-300"
              onClick={() => {
                alert("Generating system report...")
                // In real app, this would generate and download report
              }}
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="animate-scale-in hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600 font-medium">{stat.change} from last month</p>
                  </div>
                  <div className={`h-12 w-12 ${stat.bgColor} rounded-full flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* System Alerts */}
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">System Alerts</CardTitle>
                <CardDescription>Recent system notifications and alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemAlerts.map((alert) => (
                    <div key={alert.id} className={`p-4 rounded-lg border ${getAlertColor(alert.type)}`}>
                      <div className="flex items-start space-x-3">
                        {getAlertIcon(alert.type)}
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{alert.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
                          <p className="text-xs text-gray-500 mt-2">{alert.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Doctor Performance */}
            <Card className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Doctor Performance</CardTitle>
                <CardDescription>Top performing doctors this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {doctorPerformance.map((doctor, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12 bg-white p-2">
                        <AvatarImage
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg"
                          alt={doctor.name}
                          className="object-contain"
                        />
                        <AvatarFallback className="healthcare-gradient text-white">
                          {doctor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{doctor.name}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{doctor.patients} patients</span>
                          <span>★ {doctor.rating}</span>
                          <span>{doctor.appointments} appointments</span>
                        </div>
                        <Progress value={(doctor.appointments / 200) * 100} className="mt-2 h-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Recent Patients */}
            <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Recent Patients</CardTitle>
                <CardDescription>Newly registered patients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentPatients.map((patient) => (
                    <div
                      key={patient.id}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={patient.avatar || "/placeholder.svg"} alt={patient.name} />
                        <AvatarFallback className="healthcare-gradient text-white">
                          {patient.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{patient.name}</h4>
                        <p className="text-sm text-gray-600">{patient.email}</p>
                        <p className="text-xs text-gray-500">{patient.joinDate}</p>
                      </div>
                      <Badge variant={patient.status === "Active" ? "default" : "secondary"}>{patient.status}</Badge>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 hover:scale-105 transition-transform duration-200"
                  onClick={() => {
                    alert("Opening patient management panel...")
                    // In real app, this would navigate to patient list
                  }}
                >
                  <UserPlus className="h-4 w-4 mr-2" />
                  View All Patients
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Quick Actions</CardTitle>
                <CardDescription>Common administrative tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:scale-105 transition-transform duration-200"
                    onClick={() => {
                      alert("Opening user management panel...")
                      // In real app, this would navigate to user management
                    }}
                  >
                    <Users className="h-4 w-4 mr-3" />
                    Manage Users
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:scale-105 transition-transform duration-200"
                    asChild
                  >
                    <Link href="/appointments">
                      <Calendar className="h-4 w-4 mr-3" />
                      View Appointments
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:scale-105 transition-transform duration-200"
                    onClick={() => {
                      alert("Opening system reports...")
                      // In real app, this would show detailed reports
                    }}
                  >
                    <FileText className="h-4 w-4 mr-3" />
                    System Reports
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:scale-105 transition-transform duration-200"
                    onClick={() => {
                      alert("Opening system settings...")
                      // In real app, this would navigate to settings
                    }}
                  >
                    <Settings className="h-4 w-4 mr-3" />
                    System Settings
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* System Health */}
            <Card className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">System Health</CardTitle>
                <CardDescription>Current system performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>CPU Usage</span>
                      <span>67%</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Memory Usage</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Storage</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Network</span>
                      <span>23%</span>
                    </div>
                    <Progress value={23} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
