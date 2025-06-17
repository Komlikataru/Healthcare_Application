"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Star, Calendar, Clock, Stethoscope, Heart, Brain, Eye, Bone, Baby, User } from "lucide-react"
import Link from "next/link"

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      rating: 4.9,
      reviews: 127,
      experience: "15 years",
      location: "New York, NY",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
      nextAvailable: "Tomorrow 2:00 PM",
      consultationFee: "$150",
      about: "Specialized in heart disease prevention and treatment with over 15 years of experience.",
      languages: ["English", "Spanish"],
      education: "Harvard Medical School",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatologist",
      rating: 4.8,
      reviews: 89,
      experience: "12 years",
      location: "Los Angeles, CA",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
      nextAvailable: "Dec 28, 10:30 AM",
      consultationFee: "$120",
      about: "Expert in skin conditions, cosmetic dermatology, and skin cancer prevention.",
      languages: ["English", "Mandarin"],
      education: "Stanford Medical School",
    },
    {
      id: 3,
      name: "Dr. Emily Davis",
      specialty: "Neurologist",
      rating: 4.7,
      reviews: 156,
      experience: "18 years",
      location: "Chicago, IL",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
      nextAvailable: "Dec 30, 3:15 PM",
      consultationFee: "$180",
      about: "Specializes in brain disorders, epilepsy, and neurological rehabilitation.",
      languages: ["English", "French"],
      education: "Johns Hopkins Medical School",
    },
    {
      id: 4,
      name: "Dr. Robert Smith",
      specialty: "Orthopedist",
      rating: 4.6,
      reviews: 203,
      experience: "20 years",
      location: "Houston, TX",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
      nextAvailable: "Jan 2, 9:00 AM",
      consultationFee: "$160",
      about: "Expert in joint replacement, sports injuries, and bone fracture treatment.",
      languages: ["English"],
      education: "Mayo Clinic Medical School",
    },
    {
      id: 5,
      name: "Dr. Lisa Wang",
      specialty: "Pediatrician",
      rating: 4.9,
      reviews: 94,
      experience: "10 years",
      location: "Seattle, WA",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
      nextAvailable: "Dec 29, 11:00 AM",
      consultationFee: "$100",
      about: "Dedicated to children's health, vaccinations, and developmental care.",
      languages: ["English", "Korean"],
      education: "University of Washington Medical School",
    },
    {
      id: 6,
      name: "Dr. James Wilson",
      specialty: "Ophthalmologist",
      rating: 4.8,
      reviews: 112,
      experience: "14 years",
      location: "Miami, FL",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
      nextAvailable: "Jan 3, 1:30 PM",
      consultationFee: "$140",
      about: "Specializes in eye surgery, vision correction, and retinal diseases.",
      languages: ["English", "Portuguese"],
      education: "University of Miami Medical School",
    },
  ]

  const specialties = [
    { value: "cardiologist", label: "Cardiologist", icon: Heart },
    { value: "dermatologist", label: "Dermatologist", icon: Stethoscope },
    { value: "neurologist", label: "Neurologist", icon: Brain },
    { value: "orthopedist", label: "Orthopedist", icon: Bone },
    { value: "pediatrician", label: "Pediatrician", icon: Baby },
    { value: "ophthalmologist", label: "Ophthalmologist", icon: Eye },
  ]

  const locations = ["New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", "Seattle, WA", "Miami, FL"]

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSpecialty = selectedSpecialty === "all" || doctor.specialty.toLowerCase() === selectedSpecialty
    const matchesLocation = selectedLocation === "all" || doctor.location === selectedLocation

    return matchesSearch && matchesSpecialty && matchesLocation
  })

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Doctor</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with qualified healthcare professionals across various specialties
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8 animate-scale-in">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search doctors or specialties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>

              <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specialties</SelectItem>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty.value} value={specialty.value}>
                      <div className="flex items-center space-x-2">
                        <specialty.icon className="h-4 w-4" />
                        <span>{specialty.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{location}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6 animate-fade-in">
          <p className="text-gray-600">
            Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? "s" : ""}
            {searchTerm && ` for "${searchTerm}"`}
            {selectedSpecialty !== "all" && ` in ${specialties.find((s) => s.value === selectedSpecialty)?.label}`}
            {selectedLocation !== "all" && ` in ${selectedLocation}`}
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredDoctors.map((doctor, index) => {
            const SpecialtyIcon = getSpecialtyIcon(doctor.specialty)

            return (
              <Card
                key={doctor.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-20 w-20 group-hover:scale-110 transition-transform duration-300 bg-white p-2">
                      <AvatarImage
                        src={doctor.avatar || "/placeholder.svg"}
                        alt={doctor.name}
                        className="object-contain"
                      />
                      <AvatarFallback className="healthcare-gradient text-white text-lg">
                        {doctor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {doctor.name}
                          </h3>
                          <div className="flex items-center space-x-2 mb-2">
                            <SpecialtyIcon className="h-4 w-4 text-blue-600" />
                            <span className="text-blue-600 font-medium">{doctor.specialty}</span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {doctor.consultationFee}
                        </Badge>
                      </div>

                      <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{doctor.rating}</span>
                          <span>({doctor.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{doctor.experience}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-1 mb-3 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span>{doctor.location}</span>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{doctor.about}</p>

                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="text-gray-500">Next available:</span>
                          <span className="font-medium text-green-600 ml-1">{doctor.nextAvailable}</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="hover:scale-105 transition-transform duration-200"
                            asChild
                          >
                            <Link href={`/doctors/${doctor.id}`}>
                              <User className="h-4 w-4 mr-2" />
                              View Profile
                            </Link>
                          </Button>
                          <Button
                            size="sm"
                            className="healthcare-gradient hover:scale-105 transition-transform duration-200"
                            asChild
                          >
                            <Link href={`/appointments/book?doctor=${doctor.id}`}>
                              <Calendar className="h-4 w-4 mr-2" />
                              Book Now
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* No Results */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Stethoscope className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No doctors found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or browse all available doctors.</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedSpecialty("all")
                setSelectedLocation("all")
              }}
              className="healthcare-gradient"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
