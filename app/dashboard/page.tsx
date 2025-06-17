"use client"

import { useAuth } from "@/components/providers/auth-provider"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, FileText, Heart, Activity, Users, Bell, Plus, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const { user } = useAuth()
  const router = useRouter()

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Please log in to access your dashboard</h1>
          <Button asChild className="healthcare-gradient">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    )
  }

  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "Tomorrow",
      time: "2:00 PM",
      type: "Follow-up",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Dermatologist",
      date: "Dec 28",
      time: "10:30 AM",
      type: "Consultation",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
    },
  ]

  const recentRecords = [
    {
      id: 1,
      title: "Blood Test Results",
      date: "Dec 20, 2024",
      doctor: "Dr. Sarah Johnson",
      status: "Normal",
    },
    {
      id: 2,
      title: "X-Ray Report",
      date: "Dec 18, 2024",
      doctor: "Dr. Robert Smith",
      status: "Reviewed",
    },
    {
      id: 3,
      title: "Prescription",
      date: "Dec 15, 2024",
      doctor: "Dr. Emily Davis",
      status: "Active",
    },
  ]

  const healthMetrics = [
    { label: "Blood Pressure", value: "120/80", status: "Normal", color: "text-green-600" },
    { label: "Heart Rate", value: "72 bpm", status: "Good", color: "text-blue-600" },
    { label: "Weight", value: "70 kg", status: "Stable", color: "text-purple-600" },
    { label: "BMI", value: "22.5", status: "Healthy", color: "text-green-600" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user.name}!</h1>
              <p className="text-gray-600">Here's your health overview for today</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="capitalize">
                {user.role}
              </Badge>
              <Button className="healthcare-gradient hover:scale-105 transition-transform duration-300">
                <Plus className="h-4 w-4 mr-2" />
                Quick Action
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="animate-scale-in hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Next Appointment</p>
                  <p className="text-2xl font-bold text-gray-900">Tomorrow</p>
                  <p className="text-sm text-blue-600">2:00 PM</p>
                </div>
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="animate-scale-in hover:shadow-lg transition-shadow duration-300"
            style={{ animationDelay: "0.1s" }}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Health Score</p>
                  <p className="text-2xl font-bold text-gray-900">Excellent</p>
                  <p className="text-sm text-green-600">95/100</p>
                </div>
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="animate-scale-in hover:shadow-lg transition-shadow duration-300"
            style={{ animationDelay: "0.2s" }}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Records</p>
                  <p className="text-2xl font-bold text-gray-900">12</p>
                  <p className="text-sm text-purple-600">Updated today</p>
                </div>
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className="animate-scale-in hover:shadow-lg transition-shadow duration-300"
            style={{ animationDelay: "0.3s" }}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Notifications</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                  <p className="text-sm text-orange-600">New alerts</p>
                </div>
                <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Bell className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Appointments */}
            <Card className="animate-slide-up">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-semibold">Upcoming Appointments</CardTitle>
                    <CardDescription>Your scheduled medical appointments</CardDescription>
                  </div>
                  <Button variant="outline" onClick={() => router.push("/appointments")}>
                    View All
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <Avatar className="h-12 w-12 bg-white p-2">
                        <AvatarImage
                          src={appointment.avatar || "/placeholder.svg"}
                          alt={appointment.doctor}
                          className="object-contain"
                        />
                        <AvatarFallback className="healthcare-gradient text-white">
                          {appointment.doctor
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                        <p className="text-sm text-gray-600">{appointment.specialty}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm font-medium text-blue-600">{appointment.date}</span>
                          <span className="text-sm text-gray-500">{appointment.time}</span>
                          <Badge variant="secondary" className="text-xs">
                            {appointment.type}
                          </Badge>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <Calendar className="h-4 w-4 mr-2" />
                        Reschedule
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Medical Records */}
            <Card className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-semibold">Recent Medical Records</CardTitle>
                    <CardDescription>Your latest medical documents and reports</CardDescription>
                  </div>
                  <Button variant="outline" onClick={() => router.push("/medical-records")}>
                    View All
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentRecords.map((record) => (
                    <div
                      key={record.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{record.title}</h3>
                          <p className="text-sm text-gray-600">
                            {record.doctor} • {record.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={record.status === "Normal" ? "default" : "secondary"}>{record.status}</Badge>
                        <Button size="sm" variant="ghost">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Health Metrics */}
            <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Health Metrics</CardTitle>
                <CardDescription>Your current health indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {healthMetrics.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">{metric.label}</span>
                        <span className={`text-sm font-semibold ${metric.color}`}>{metric.status}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-gray-900">{metric.value}</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Quick Actions</CardTitle>
                <CardDescription>Common tasks and shortcuts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:scale-105 transition-transform duration-200"
                    onClick={() => router.push("/appointments")}
                  >
                    <Calendar className="h-4 w-4 mr-3" />
                    Book Appointment
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:scale-105 transition-transform duration-200"
                    onClick={() => router.push("/doctors")}
                  >
                    <Users className="h-4 w-4 mr-3" />
                    Find Doctor
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:scale-105 transition-transform duration-200"
                    onClick={() => router.push("/medical-records")}
                  >
                    <FileText className="h-4 w-4 mr-3" />
                    View Records
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start hover:scale-105 transition-transform duration-200"
                    onClick={() => router.push("/health-tracker")}
                  >
                    <Activity className="h-4 w-4 mr-3" />
                    Health Tracker
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
