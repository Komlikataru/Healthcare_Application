"use client"

import { useParams, useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Calendar,
  Star,
  MapPin,
  Clock,
  Phone,
  Mail,
  Award,
  GraduationCap,
  Languages,
  Heart,
  Stethoscope,
  Brain,
  Eye,
  Bone,
  Baby,
} from "lucide-react"
import Link from "next/link"

export default function DoctorProfilePage() {
  const params = useParams()
  const router = useRouter()
  const doctorId = params.id

  // Mock doctor data - in real app, this would be fetched based on ID
  const doctor = {
    id: doctorId,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: 127,
    experience: "15 years",
    location: "New York, NY",
    avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
    nextAvailable: "Tomorrow 2:00 PM",
    consultationFee: "$150",
    about:
      "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in treating heart conditions. She specializes in preventive cardiology, heart disease management, and cardiac rehabilitation. Dr. Johnson is committed to providing personalized care to each patient and staying up-to-date with the latest advances in cardiovascular medicine.",
    languages: ["English", "Spanish"],
    education: "Harvard Medical School",
    certifications: [
      "Board Certified in Cardiology",
      "Fellow of American College of Cardiology",
      "Advanced Cardiac Life Support",
    ],
    specializations: ["Preventive Cardiology", "Heart Failure", "Cardiac Rehabilitation", "Hypertension Management"],
    contact: {
      phone: "+1 (555) 123-4567",
      email: "dr.johnson@healthcarepro.com",
      address: "123 Medical Center Dr, New York, NY 10001",
    },
    schedule: [
      { day: "Monday", hours: "9:00 AM - 5:00 PM" },
      { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
      { day: "Wednesday", hours: "9:00 AM - 3:00 PM" },
      { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
      { day: "Friday", hours: "9:00 AM - 4:00 PM" },
      { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
      { day: "Sunday", hours: "Closed" },
    ],
  }

  const getSpecialtyIcon = (specialty: string) => {
    const iconMap = {
      cardiologist: Heart,
      dermatologist: Stethoscope,
      neurologist: Brain,
      orthopedist: Bone,
      pediatrician: Baby,
      ophthalmologist: Eye,
    }
    return iconMap[specialty.toLowerCase()] || Stethoscope
  }

  const SpecialtyIcon = getSpecialtyIcon(doctor.specialty)

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
          Back to Doctors
        </Button>

        {/* Doctor Profile Header */}
        <Card className="mb-8 animate-fade-in">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
              <Avatar className="h-32 w-32 mx-auto md:mx-0 bg-white p-4">
                <AvatarImage src={doctor.avatar || "/placeholder.svg"} alt={doctor.name} className="object-contain" />
                <AvatarFallback className="healthcare-gradient text-white text-2xl">
                  {doctor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                    <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                      <SpecialtyIcon className="h-5 w-5 text-blue-600" />
                      <span className="text-xl text-blue-600 font-medium">{doctor.specialty}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 text-lg px-4 py-2">
                    {doctor.consultationFee}
                  </Badge>
                </div>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{doctor.rating}</span>
                    <span>({doctor.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{doctor.experience}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{doctor.location}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button
                    size="lg"
                    className="healthcare-gradient hover:scale-105 transition-transform duration-300"
                    asChild
                  >
                    <Link href={`/appointments/book?doctor=${doctor.id}`}>
                      <Calendar className="h-5 w-5 mr-2" />
                      Book Appointment
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="hover:scale-105 transition-transform duration-300"
                    onClick={() => {
                      alert(`Calling ${doctor.contact.phone}...`)
                    }}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call Now
                  </Button>
                </div>

                <div className="mt-4 text-sm">
                  <span className="text-gray-500">Next available:</span>
                  <span className="font-medium text-green-600 ml-1">{doctor.nextAvailable}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Doctor Details Tabs */}
        <Tabs defaultValue="about" className="animate-slide-up">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">About Dr. {doctor.name.split(" ")[1]}</h3>
                  <p className="text-gray-600 leading-relaxed">{doctor.about}</p>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                      Education
                    </h3>
                    <p className="text-gray-600">{doctor.education}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-blue-600" />
                      Certifications
                    </h3>
                    <ul className="space-y-2">
                      {doctor.certifications.map((cert, index) => (
                        <li key={index} className="text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Languages className="h-5 w-5 mr-2 text-blue-600" />
                      Languages
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {doctor.languages.map((language, index) => (
                        <Badge key={index} variant="outline">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-6">Weekly Schedule</h3>
                <div className="space-y-4">
                  {doctor.schedule.map((day, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">{day.day}</span>
                      <span className={`${day.hours === "Closed" ? "text-red-600" : "text-green-600"} font-medium`}>
                        {day.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-6">Patient Reviews</h3>
                <div className="space-y-6">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="border-b border-gray-200 pb-6 last:border-b-0">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>P{review}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-medium">Patient {review}</span>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm">
                            Excellent care and very professional. Dr. Johnson took the time to explain everything
                            clearly and made me feel comfortable throughout the consultation.
                          </p>
                          <p className="text-xs text-gray-500 mt-2">2 weeks ago</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">{doctor.contact.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">{doctor.contact.email}</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <span className="text-gray-600">{doctor.contact.address}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
