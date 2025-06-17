"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Video,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  XCircle,
  AlertCircle,
  FileText,
} from "lucide-react"
import Link from "next/link"

export default function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")

  const appointments = {
    upcoming: [
      {
        id: 1,
        doctor: "Dr. Sarah Johnson",
        specialty: "Cardiologist",
        date: "December 27, 2024",
        time: "2:00 PM",
        type: "Follow-up",
        mode: "In-person",
        location: "Medical Center, Room 205",
        status: "confirmed",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
        notes: "Bring previous test results",
      },
      {
        id: 2,
        doctor: "Dr. Michael Chen",
        specialty: "Dermatologist",
        date: "December 28, 2024",
        time: "10:30 AM",
        type: "Consultation",
        mode: "Video Call",
        location: "Online",
        status: "confirmed",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
        notes: "Skin condition follow-up",
      },
      {
        id: 3,
        doctor: "Dr. Emily Davis",
        specialty: "Neurologist",
        date: "January 3, 2025",
        time: "3:15 PM",
        type: "Initial Consultation",
        mode: "In-person",
        location: "Neurology Wing, Room 301",
        status: "pending",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
        notes: "Headache evaluation",
      },
    ],
    past: [
      {
        id: 4,
        doctor: "Dr. Robert Smith",
        specialty: "Orthopedist",
        date: "December 20, 2024",
        time: "11:00 AM",
        type: "Follow-up",
        mode: "In-person",
        location: "Orthopedic Center, Room 102",
        status: "completed",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
        notes: "Knee injury assessment",
      },
      {
        id: 5,
        doctor: "Dr. Lisa Wang",
        specialty: "Pediatrician",
        date: "December 15, 2024",
        time: "9:30 AM",
        type: "Check-up",
        mode: "In-person",
        location: "Pediatric Wing, Room 205",
        status: "completed",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
        notes: "Annual physical exam",
      },
    ],
    cancelled: [
      {
        id: 6,
        doctor: "Dr. James Wilson",
        specialty: "Ophthalmologist",
        date: "December 22, 2024",
        time: "4:00 PM",
        type: "Eye Exam",
        mode: "In-person",
        location: "Eye Care Center, Room 101",
        status: "cancelled",
        avatar:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
        notes: "Cancelled due to emergency",
      },
    ],
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "pending":
        return <AlertCircle className="h-4 w-4 text-yellow-600" />
      case "cancelled":
        return <XCircle className="h-4 w-4 text-red-600" />
      case "completed":
        return <CheckCircle className="h-4 w-4 text-blue-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      case "completed":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const AppointmentCard = ({ appointment, showActions = true }: { appointment: any; showActions?: boolean }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Avatar className="h-12 w-12 group-hover:scale-110 transition-transform duration-300 bg-white p-2">
            <AvatarImage
              src={appointment.avatar || "/placeholder.svg"}
              alt={appointment.doctor}
              className="object-contain"
            />
            <AvatarFallback className="healthcare-gradient text-white">
              {appointment.doctor
                .split(" ")
                .map((n: string) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {appointment.doctor}
                </h3>
                <p className="text-blue-600 font-medium">{appointment.specialty}</p>
              </div>
              <Badge className={`${getStatusColor(appointment.status)} capitalize`}>
                <div className="flex items-center space-x-1">
                  {getStatusIcon(appointment.status)}
                  <span>{appointment.status}</span>
                </div>
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{appointment.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{appointment.time}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  {appointment.mode === "Video Call" ? <Video className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
                  <span>{appointment.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Badge variant="outline" className="text-xs">
                    {appointment.type}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {appointment.mode}
                  </Badge>
                </div>
              </div>
            </div>

            {appointment.notes && (
              <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Notes:</strong> {appointment.notes}
                </p>
              </div>
            )}

            {showActions && (
              <div className="flex items-center space-x-2">
                {appointment.status === "confirmed" && (
                  <>
                    {appointment.mode === "Video Call" && (
                      <Button
                        size="sm"
                        className="healthcare-gradient hover:scale-105 transition-transform duration-200"
                        onClick={() => {
                          // Simulate joining video call
                          alert(`Joining video call with ${appointment.doctor}...`)
                          // In real app, this would open video call interface
                        }}
                      >
                        <Video className="h-4 w-4 mr-2" />
                        Join Call
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      className="hover:scale-105 transition-transform duration-200"
                      onClick={() => {
                        // Simulate reschedule functionality
                        alert(`Rescheduling appointment with ${appointment.doctor}...`)
                        // In real app, this would open reschedule modal
                      }}
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Reschedule
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-red-600 hover:text-red-700 hover:scale-105 transition-all duration-200"
                      onClick={() => {
                        if (confirm(`Are you sure you want to cancel your appointment with ${appointment.doctor}?`)) {
                          alert("Appointment cancelled successfully")
                          // In real app, this would update the appointment status
                        }
                      }}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Cancel
                    </Button>
                  </>
                )}
                {appointment.status === "pending" && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="hover:scale-105 transition-transform duration-200"
                    onClick={() => {
                      alert(`Contacting ${appointment.doctor}'s office...`)
                      // In real app, this would show contact information or initiate call
                    }}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Office
                  </Button>
                )}
                {appointment.status === "completed" && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="hover:scale-105 transition-transform duration-200"
                    onClick={() => {
                      alert(`Viewing appointment summary for ${appointment.doctor}...`)
                      // In real app, this would show detailed appointment summary
                    }}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    View Summary
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Appointments</h1>
            <p className="text-gray-600">Manage your healthcare appointments and consultations</p>
          </div>
          <Button className="healthcare-gradient hover:scale-105 transition-transform duration-300" asChild>
            <Link href="/doctors">
              <Plus className="h-4 w-4 mr-2" />
              Book New Appointment
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="animate-scale-in hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {appointments.upcoming.filter((a) => a.status === "confirmed").length}
              </p>
              <p className="text-sm text-gray-600">Confirmed</p>
            </CardContent>
          </Card>

          <Card
            className="animate-scale-in hover:shadow-lg transition-shadow duration-300"
            style={{ animationDelay: "0.1s" }}
          >
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertCircle className="h-6 w-6 text-yellow-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {appointments.upcoming.filter((a) => a.status === "pending").length}
              </p>
              <p className="text-sm text-gray-600">Pending</p>
            </CardContent>
          </Card>

          <Card
            className="animate-scale-in hover:shadow-lg transition-shadow duration-300"
            style={{ animationDelay: "0.2s" }}
          >
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{appointments.past.length}</p>
              <p className="text-sm text-gray-600">Completed</p>
            </CardContent>
          </Card>

          <Card
            className="animate-scale-in hover:shadow-lg transition-shadow duration-300"
            style={{ animationDelay: "0.3s" }}
          >
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <XCircle className="h-6 w-6 text-red-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{appointments.cancelled.length}</p>
              <p className="text-sm text-gray-600">Cancelled</p>
            </CardContent>
          </Card>
        </div>

        {/* Appointments Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="animate-slide-up">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger
              value="upcoming"
              className="data-[state=active]:healthcare-gradient data-[state=active]:text-white"
            >
              Upcoming ({appointments.upcoming.length})
            </TabsTrigger>
            <TabsTrigger
              value="past"
              className="data-[state=active]:healthcare-gradient data-[state=active]:text-white"
            >
              Past ({appointments.past.length})
            </TabsTrigger>
            <TabsTrigger
              value="cancelled"
              className="data-[state=active]:healthcare-gradient data-[state=active]:text-white"
            >
              Cancelled ({appointments.cancelled.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            {appointments.upcoming.length > 0 ? (
              appointments.upcoming.map((appointment, index) => (
                <div key={appointment.id} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <AppointmentCard appointment={appointment} />
                </div>
              ))
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No upcoming appointments</h3>
                  <p className="text-gray-600 mb-4">Book your next appointment with a healthcare professional.</p>
                  <Button className="healthcare-gradient" asChild>
                    <Link href="/doctors">Find a Doctor</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            {appointments.past.length > 0 ? (
              appointments.past.map((appointment, index) => (
                <div key={appointment.id} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <AppointmentCard appointment={appointment} showActions={false} />
                </div>
              ))
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No past appointments</h3>
                  <p className="text-gray-600">Your completed appointments will appear here.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="cancelled" className="space-y-6">
            {appointments.cancelled.length > 0 ? (
              appointments.cancelled.map((appointment, index) => (
                <div key={appointment.id} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <AppointmentCard appointment={appointment} showActions={false} />
                </div>
              ))
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <XCircle className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No cancelled appointments</h3>
                  <p className="text-gray-600">Your cancelled appointments will appear here.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
