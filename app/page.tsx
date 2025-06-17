import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Heart, Shield, Clock, Stethoscope, Calendar, FileText, Award, ArrowRight } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: Calendar,
      title: "Easy Appointment Booking",
      description: "Schedule appointments with your preferred doctors in just a few clicks.",
    },
    {
      icon: Stethoscope,
      title: "Expert Doctors",
      description: "Access to qualified healthcare professionals across various specialties.",
    },
    {
      icon: FileText,
      title: "Digital Medical Records",
      description: "Secure and organized digital storage of all your medical information.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your health data is protected with enterprise-grade security measures.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your healthcare needs.",
    },
    {
      icon: Award,
      title: "Quality Care",
      description: "Committed to providing the highest standard of healthcare services.",
    },
  ]

  const stats = [
    { number: "10,000+", label: "Happy Patients" },
    { number: "500+", label: "Expert Doctors" },
    { number: "50+", label: "Specialties" },
    { number: "24/7", label: "Support" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Your Health,{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Our Priority
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Experience modern healthcare management with our comprehensive platform. Book appointments, access
                medical records, and connect with healthcare professionals seamlessly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="healthcare-gradient hover:scale-105 transition-transform duration-300"
                >
                  <Link href="/register">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="hover:scale-105 transition-transform duration-300"
                >
                  <Link href="/doctors">Find Doctors</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="relative z-10 floating-animation">
                <div className="bg-white rounded-2xl shadow-2xl p-8 glass-effect">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="h-12 w-12 healthcare-gradient rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Health Dashboard</h3>
                      <p className="text-gray-600 text-sm">Manage your health journey</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium text-green-800">Next Appointment</span>
                      <span className="text-sm text-green-600">Tomorrow 2:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium text-blue-800">Health Score</span>
                      <span className="text-sm text-blue-600">Excellent</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm font-medium text-purple-800">Records Updated</span>
                      <span className="text-sm text-purple-600">2 hours ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose HealthCare Pro?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive healthcare solutions designed to make your health journey smoother and more
              efficient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="h-12 w-12 healthcare-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 healthcare-gradient">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Healthcare Experience?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of patients who trust HealthCare Pro for their medical needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="hover:scale-105 transition-transform duration-300"
              >
                <Link href="/register">Start Your Journey</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300"
              >
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 healthcare-gradient rounded-full flex items-center justify-center">
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-bold">HealthCare Pro</span>
              </div>
              <p className="text-gray-400">Modern healthcare management for a healthier tomorrow.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Appointment Booking</li>
                <li>Medical Records</li>
                <li>Doctor Consultation</li>
                <li>Health Monitoring</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>support@healthcarepro.com</li>
                <li>+1 (555) 123-4567</li>
                <li>24/7 Emergency Line</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HealthCare Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
