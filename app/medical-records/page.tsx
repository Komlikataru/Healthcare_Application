"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Download,
  Eye,
  Search,
  Calendar,
  User,
  Activity,
  TestTube,
  Pill,
  Heart,
  Stethoscope,
  Upload,
  Filter,
} from "lucide-react"

export default function MedicalRecordsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const medicalRecords = [
    {
      id: 1,
      title: "Blood Test Results",
      type: "Lab Report",
      date: "December 20, 2024",
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      status: "Normal",
      category: "lab",
      description: "Complete blood count and lipid panel results",
      fileSize: "2.4 MB",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
      urgent: false,
    },
    {
      id: 2,
      title: "Chest X-Ray Report",
      type: "Imaging",
      date: "December 18, 2024",
      doctor: "Dr. Robert Smith",
      specialty: "Radiologist",
      status: "Reviewed",
      category: "imaging",
      description: "Chest X-ray examination for respiratory assessment",
      fileSize: "8.7 MB",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
      urgent: false,
    },
    {
      id: 3,
      title: "Prescription - Lisinopril",
      type: "Prescription",
      date: "December 15, 2024",
      doctor: "Dr. Emily Davis",
      specialty: "Cardiologist",
      status: "Active",
      category: "prescription",
      description: "Blood pressure medication - 10mg daily",
      fileSize: "0.5 MB",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
      urgent: false,
    },
    {
      id: 4,
      title: "MRI Brain Scan",
      type: "Imaging",
      date: "December 10, 2024",
      doctor: "Dr. Michael Chen",
      specialty: "Neurologist",
      status: "Urgent Review",
      category: "imaging",
      description: "Brain MRI for headache evaluation",
      fileSize: "45.2 MB",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
      urgent: true,
    },
    {
      id: 5,
      title: "Annual Physical Exam",
      type: "Clinical Notes",
      date: "December 5, 2024",
      doctor: "Dr. Lisa Wang",
      specialty: "Family Medicine",
      status: "Complete",
      category: "clinical",
      description: "Comprehensive annual health examination",
      fileSize: "1.8 MB",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
      urgent: false,
    },
    {
      id: 6,
      title: "Allergy Test Results",
      type: "Lab Report",
      date: "November 28, 2024",
      doctor: "Dr. James Wilson",
      specialty: "Allergist",
      status: "Positive",
      category: "lab",
      description: "Comprehensive allergy panel testing",
      fileSize: "3.1 MB",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dr-icon.jpg-GHPHXdfE7JavmVbMaVhStPjILwvfKH.jpeg",
      urgent: false,
    },
  ]

  const categories = [
    { value: "all", label: "All Records", icon: FileText },
    { value: "lab", label: "Lab Reports", icon: TestTube },
    { value: "imaging", label: "Imaging", icon: Activity },
    { value: "prescription", label: "Prescriptions", icon: Pill },
    { value: "clinical", label: "Clinical Notes", icon: Stethoscope },
  ]

  const filteredRecords = medicalRecords.filter((record) => {
    const matchesSearch =
      record.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeTab === "all" || record.category === activeTab

    return matchesSearch && matchesCategory
  })

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "normal":
        return "bg-green-100 text-green-800"
      case "active":
        return "bg-blue-100 text-blue-800"
      case "urgent review":
        return "bg-red-100 text-red-800"
      case "positive":
        return "bg-yellow-100 text-yellow-800"
      case "complete":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find((c) => c.value === category)
    return categoryData ? categoryData.icon : FileText
  }

  const RecordCard = ({ record }: { record: any }) => {
    const CategoryIcon = getCategoryIcon(record.category)

    return (
      <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <CategoryIcon className="h-6 w-6 text-blue-600" />
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {record.title}
                  </h3>
                  <p className="text-sm text-gray-600">{record.type}</p>
                </div>
                <div className="flex items-center space-x-2">
                  {record.urgent && <Badge className="bg-red-100 text-red-800">Urgent</Badge>}
                  <Badge className={getStatusColor(record.status)}>{record.status}</Badge>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-3">{record.description}</p>

              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{record.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{record.doctor}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FileText className="h-4 w-4" />
                  <span>{record.fileSize}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8 bg-white p-1">
                    <AvatarImage
                      src={record.avatar || "/placeholder.svg"}
                      alt={record.doctor}
                      className="object-contain"
                    />
                    <AvatarFallback className="healthcare-gradient text-white text-xs">
                      {record.doctor
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{record.doctor}</p>
                    <p className="text-xs text-gray-600">{record.specialty}</p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="hover:scale-105 transition-transform duration-200"
                    onClick={() => {
                      alert(`Opening ${record.title} for viewing...`)
                      // In real app, this would open the document viewer
                    }}
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button
                    size="sm"
                    className="healthcare-gradient hover:scale-105 transition-transform duration-200"
                    onClick={() => {
                      alert(`Downloading ${record.title}...`)
                      // In real app, this would trigger file download
                    }}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Medical Records</h1>
            <p className="text-gray-600">Access and manage your medical documents and reports</p>
          </div>
          <Button
            className="healthcare-gradient hover:scale-105 transition-transform duration-300"
            onClick={() => {
              alert("Opening file upload dialog...")
              // In real app, this would open file upload modal
            }}
          >
            <Upload className="h-4 w-4 mr-2" />
            Upload Record
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="animate-scale-in hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{medicalRecords.length}</p>
              <p className="text-sm text-gray-600">Total Records</p>
            </CardContent>
          </Card>

          <Card
            className="animate-scale-in hover:shadow-lg transition-shadow duration-300"
            style={{ animationDelay: "0.1s" }}
          >
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TestTube className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {medicalRecords.filter((r) => r.category === "lab").length}
              </p>
              <p className="text-sm text-gray-600">Lab Reports</p>
            </CardContent>
          </Card>

          <Card
            className="animate-scale-in hover:shadow-lg transition-shadow duration-300"
            style={{ animationDelay: "0.2s" }}
          >
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Activity className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {medicalRecords.filter((r) => r.category === "imaging").length}
              </p>
              <p className="text-sm text-gray-600">Imaging</p>
            </CardContent>
          </Card>

          <Card
            className="animate-scale-in hover:shadow-lg transition-shadow duration-300"
            style={{ animationDelay: "0.3s" }}
          >
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{medicalRecords.filter((r) => r.urgent).length}</p>
              <p className="text-sm text-gray-600">Urgent</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="mb-8 animate-scale-in">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search records, doctors, or types..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Button variant="outline" className="h-12 px-6">
                <Filter className="h-4 w-4 mr-2" />
                Advanced Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Category Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="animate-slide-up">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category.value}
                value={category.value}
                className="data-[state=active]:healthcare-gradient data-[state=active]:text-white"
              >
                <category.icon className="h-4 w-4 mr-2" />
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeTab} className="space-y-6">
            {filteredRecords.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredRecords.map((record, index) => (
                  <div key={record.id} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <RecordCard record={record} />
                  </div>
                ))}
              </div>
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No records found</h3>
                  <p className="text-gray-600 mb-4">
                    {searchTerm ? `No records match "${searchTerm}"` : "No records in this category"}
                  </p>
                  <Button
                    onClick={() => {
                      setSearchTerm("")
                      setActiveTab("all")
                    }}
                    className="healthcare-gradient"
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
