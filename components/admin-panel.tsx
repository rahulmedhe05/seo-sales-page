"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { logout, getSession } from "@/lib/auth"
import { useRouter } from "next/navigation"
import { Download, LogOut, Users, TrendingUp, Phone, MapPin, Home, IndianRupee } from "lucide-react"

interface Lead {
  id: string
  fullName: string
  phoneNumber: string
  propertyType: string
  budget: string
  city: string
  submittedAt: string
}

const LEADS_KEY = "interior_design_leads"

export function AdminPanel() {
  const router = useRouter()
  const [leads, setLeads] = useState<Lead[]>([])
  const [selectedMonth, setSelectedMonth] = useState<string>("")
  const [session, setSession] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    try {
      const currentSession = getSession()
      if (!currentSession) {
        router.push("/admin/login")
        return
      }
      setSession(currentSession)

      // Load leads from localStorage
      const stored = localStorage.getItem(LEADS_KEY)
      if (stored) {
        const data = JSON.parse(stored)
        if (Array.isArray(data)) {
          setLeads(data)
        }
      }

      // Set current month
      const now = new Date()
      const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`
      setSelectedMonth(currentMonth)
    } catch (error) {
      console.error("Error loading data:", error)
    } finally {
      setIsLoading(false)
    }
  }, [router])

  const handleLogout = () => {
    logout()
    router.push("/admin/login")
  }

  // Get unique months from leads
  const getMonths = () => {
    const months: { [key: string]: number } = {}
    leads.forEach((lead) => {
      const date = new Date(lead.submittedAt)
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`
      months[monthKey] = (months[monthKey] || 0) + 1
    })
    return months
  }

  const months = getMonths()

  const filteredLeads = selectedMonth
    ? leads.filter((lead) => {
        const date = new Date(lead.submittedAt)
        const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`
        return monthKey === selectedMonth
      })
    : leads

  const exportToCSV = () => {
    const headers = ["Full Name", "Phone Number", "Property Type", "City", "Budget", "Submitted At"]
    const csvContent = [
      headers.join(","),
      ...filteredLeads.map((lead) =>
        [
          `"${lead.fullName || ''}"`,
          `"${lead.phoneNumber || ''}"`,
          `"${lead.propertyType || ''}"`,
          `"${lead.city || ''}"`,
          `"${lead.budget || ''}"`,
          new Date(lead.submittedAt).toLocaleString(),
        ].join(",")
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `interior-design-leads-${selectedMonth || "all"}.csv`
    a.click()
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center py-8">Loading...</div>
      </div>
    )
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center py-8">Redirecting to login...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Header with Logout */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Interior Design Leads</h1>
          <p className="text-sm text-muted-foreground">Manage and track all enquiry leads</p>
          <p className="text-xs text-muted-foreground mt-1">Logged in as: {session.email}</p>
        </div>
        <Button onClick={handleLogout} variant="outline" className="gap-2">
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Leads</CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{leads.length}</div>
            <p className="text-xs text-muted-foreground mt-1">All time enquiries</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium text-muted-foreground">This Month</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{filteredLeads.length}</div>
            <p className="text-xs text-muted-foreground mt-1">{selectedMonth}</p>
          </CardContent>
        </Card>
      </div>

      {/* Month Filter and Export */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Filter by Month:</label>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-3 py-2 border border-border rounded-md text-sm bg-background"
          >
            <option value="">All Time</option>
            {Object.keys(months).sort().reverse().map((month) => (
              <option key={month} value={month}>
                {month} ({months[month]} leads)
              </option>
            ))}
          </select>
        </div>
        <Button onClick={exportToCSV} className="gap-2">
          <Download className="w-4 h-4" />
          Export to CSV
        </Button>
      </div>

      {/* Leads Table */}
      <Card>
        <CardHeader>
          <CardTitle>Leads List</CardTitle>
          <CardDescription>
            Showing {filteredLeads.length} lead{filteredLeads.length !== 1 ? "s" : ""} {selectedMonth ? `for ${selectedMonth}` : ""}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="text-left py-3 px-4 font-semibold">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Full Name
                    </div>
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </div>
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">
                    <div className="flex items-center gap-2">
                      <Home className="w-4 h-4" />
                      Property Type
                    </div>
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      City
                    </div>
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">
                    <div className="flex items-center gap-2">
                      <IndianRupee className="w-4 h-4" />
                      Budget
                    </div>
                  </th>
                  <th className="text-left py-3 px-4 font-semibold">Submitted</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.length > 0 ? (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="border-b hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-4 font-medium">{lead.fullName || "—"}</td>
                      <td className="py-3 px-4">
                        <a href={`tel:${lead.phoneNumber}`} className="text-primary hover:underline">
                          {lead.phoneNumber || "—"}
                        </a>
                      </td>
                      <td className="py-3 px-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {lead.propertyType || "—"}
                        </span>
                      </td>
                      <td className="py-3 px-4">{lead.city || "—"}</td>
                      <td className="py-3 px-4">{lead.budget || "—"}</td>
                      <td className="py-3 px-4 text-xs text-muted-foreground">
                        {new Date(lead.submittedAt).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit"
                        })}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-muted-foreground">
                      <div className="flex flex-col items-center gap-2">
                        <Users className="w-12 h-12 opacity-20" />
                        <p>No leads found</p>
                        <p className="text-xs">New leads will appear here when customers submit the form</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
