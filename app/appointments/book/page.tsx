"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, CalendarIcon, Clock, MapPin, Video, User, Phone } from "lucide-react"

export default function BookAppointmentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const doctorId = searchParams.get("doctor")
  const { toast } = useToast()

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState("")
  const [appointmentType, setAppointmentType] = useState("")
  const [consultationMode, setConsultationMode] = useState("")
  const [reason, setReason] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Mock doctor data
  const doctor = {
    id: doctorId,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
    consultationFee: "$150",
    location: "Medical Center, Room 205",
  }

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
  ]

  const appointmentTypes = [
    { value: "consultation", label: "Initial Consultation" },
    { value: "followup", label: "Follow-up" },
    { value: "checkup", label: "Regular Check-up" },
    { value: "emergency", label: "Emergency" },
  ]

  const consultationModes = [
    { value: "in-person", label: "In-Person", icon: User },
    { value: "video", label: "Video Call", icon: Video },
    { value: "phone", label: "Phone Call", icon: Phone },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Appointment Booked Successfully!",
      description: `Your appointment with ${doctor.name} has been scheduled for ${selectedDate?.toDateString()} at ${selectedTime}.`,
    })

    setIsLoading(false)
    router.push("/appointments")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="mb-6 hover:scale-105 transition-transform duration-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Book Appointment</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Date Selection */}
                  <div>
                    <Label className="text-base font-medium mb-4 block">Select Date</Label>
                    <div className="border rounded-lg p-4">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                        className="rounded-md"
                      />
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div>
                    <Label className="text-base font-medium mb-4 block">Select Time</Label>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          type="button"
                          variant={selectedTime === time ? "default" : "outline"}
                          className={`${
                            selectedTime === time ? "healthcare-gradient" : ""
                          } hover:scale-105 transition-transform duration-200`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Appointment Type */}
                  <div>
                    <Label htmlFor="appointmentType" className="text-base font-medium">
                      Appointment Type
                    </Label>
                    <Select value={appointmentType} onValueChange={setAppointmentType}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select appointment type" />
                      </SelectTrigger>
                      <SelectContent>
                        {appointmentTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Consultation Mode */}
                  <div>
                    <Label className="text-base font-medium mb-4 block">Consultation Mode</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {consultationModes.map((mode) => (
                        <Button
                          key={mode.value}
                          type="button"
                          variant={consultationMode === mode.value ? "default" : "outline"}
                          className={`${
                            consultationMode === mode.value ? "healthcare-gradient" : ""
                          } h-16 flex-col hover:scale-105 transition-transform duration-200`}
                          onClick={() => setConsultationMode(mode.value)}
                        >
                          <mode.icon className="h-5 w-5 mb-2" />
                          {mode.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Reason for Visit */}
                  <div>
                    <Label htmlFor="reason" className="text-base font-medium">
                      Reason for Visit
                    </Label>
                    <Textarea
                      id="reason"
                      placeholder="Please describe your symptoms or reason for the appointment..."
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      className="mt-2"
                      rows={4}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full h-12 healthcare-gradient hover:scale-105 transition-transform duration-300"
                    disabled={isLoading || !selectedDate || !selectedTime || !appointmentType || !consultationMode}
                  >
                    {isLoading ? "Booking Appointment..." : "Book Appointment"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Appointment Summary */}
          <div>
            <Card className="animate-scale-in sticky top-8">
              <CardHeader>
                <CardTitle>Appointment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Doctor Info */}
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16 bg-white p-2">
                    <AvatarImage
                      src={doctor.avatar || "/placeholder.svg"}
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
                  <div>
                    <h3 className="font-semibold text-lg">{doctor.name}</h3>
                    <p className="text-blue-600">{doctor.specialty}</p>
                    <Badge variant="secondary" className="mt-1">
                      {doctor.consultationFee}
                    </Badge>
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="space-y-4 pt-4 border-t">
                  {selectedDate && (
                    <div className="flex items-center space-x-3">
                      <CalendarIcon className="h-5 w-5 text-blue-600" />
                      <span>{selectedDate.toDateString()}</span>
                    </div>
                  )}

                  {selectedTime && (
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span>{selectedTime}</span>
                    </div>
                  )}

                  {consultationMode && (
                    <div className="flex items-center space-x-3">
                      {consultationMode === "video" && <Video className="h-5 w-5 text-blue-600" />}
                      {consultationMode === "in-person" && <MapPin className="h-5 w-5 text-blue-600" />}
                      {consultationMode === "phone" && <Phone className="h-5 w-5 text-blue-600" />}
                      <span className="capitalize">
                        {consultationMode === "in-person" ? doctor.location : `${consultationMode} consultation`}
                      </span>
                    </div>
                  )}

                  {appointmentType && (
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-blue-600" />
                      <span>{appointmentTypes.find((t) => t.value === appointmentType)?.label}</span>
                    </div>
                  )}
                </div>

                {/* Total Cost */}
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total Cost:</span>
                    <span className="text-green-600">{doctor.consultationFee}</span>
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
