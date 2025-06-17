"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

interface User {
  id: string
  name: string
  email: string
  role: "patient" | "doctor" | "admin"
  avatar?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string, role: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const savedUser = localStorage.getItem("healthcare_user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock authentication
    const mockUser: User = {
      id: "1",
      name:
        email === "admin@healthcare.com" ? "Admin User" : email === "doctor@healthcare.com" ? "Dr. Smith" : "John Doe",
      email,
      role: email === "admin@healthcare.com" ? "admin" : email === "doctor@healthcare.com" ? "doctor" : "patient",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-HNcWT5i5a9QF2sdQ1FO5nCouZLdrZY.avif",
    }

    setUser(mockUser)
    localStorage.setItem("healthcare_user", JSON.stringify(mockUser))
    setIsLoading(false)
    return true
  }

  const register = async (name: string, email: string, password: string, role: string): Promise<boolean> => {
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      role: role as "patient" | "doctor" | "admin",
      avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-HNcWT5i5a9QF2sdQ1FO5nCouZLdrZY.avif",
    }

    setUser(newUser)
    localStorage.setItem("healthcare_user", JSON.stringify(newUser))
    setIsLoading(false)
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("healthcare_user")
  }

  return <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
