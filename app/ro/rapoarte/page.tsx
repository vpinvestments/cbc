"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { FileText, Download, Lock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function ReportsPageRO() {
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Simple password check (in production, this should be server-side)
  const correctPassword = "CBC2024Admin"

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (password === correctPassword) {
      setIsAuthenticated(true)
    } else {
      setError("Parolă incorectă. Vă rugăm să contactați administratorul pentru acces.")
    }
    setIsLoading(false)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md dark:border-slate-700">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-slate-600" />
            </div>
            <CardTitle>Acces Securizat Necesar</CardTitle>
            <CardDescription>
              Introduceți parola pentru a accesa rapoartele investitorilor și documentele de administrare
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <Label htmlFor="password">Parolă</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Introduceți parola de acces"
                  required
                />
              </div>
              {error && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertDescription className="text-red-700">{error}</AlertDescription>
                </Alert>
              )}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Se verifică..." : "Accesează Rapoartele"}
              </Button>
            </form>
            <div className="mt-6 text-center">
              <Link href="/ro" className="text-sm text-slate-600 hover:text-slate-900 flex items-center justify-center">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Înapoi la Pagina Principală
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 dark:text-slate-100">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 shadow-sm border-b dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Rapoarte și Documente Investitori</h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">CBC Creative Finance - Rapoarte Administrare</p>
            </div>
            <div className="flex items-center space-x-3">
              <LanguageSwitcher />
              <ThemeToggle />
              <Link href="/ro">
                <Button variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Înapoi la Principal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Administrator Reports */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Rapoarte Administrator</CardTitle>
            <CardDescription>Rapoarte oficiale de la administratorul numit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-slate-900">Primul Raport Administrator</p>
                    <p className="text-sm text-slate-600">Publicat: 30.10.2024</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Descarcă PDF
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-slate-900">Declarația Afacerilor</p>
                    <p className="text-sm text-slate-600">Publicat: 25.10.2024</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Descarcă PDF
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-slate-900">Raport Evaluare Active</p>
                    <p className="text-sm text-slate-600">Publicat: 20.10.2024</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Descarcă PDF
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Investor Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Informații Investitori</CardTitle>
            <CardDescription>Informații specifice pentru investitorii CBC Creative Finance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-slate-900">Ghid Proces Creanțe Investitori</p>
                    <p className="text-sm text-slate-600">Cum să vă depuneți creanța</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Descarcă PDF
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-slate-900">Raport Dețineri Criptomonede</p>
                    <p className="text-sm text-slate-600">Starea actuală a activelor digitale</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Descarcă PDF
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-slate-900">Cronologia Estimată de Recuperare</p>
                    <p className="text-sm text-slate-600">Cronologia proiectată pentru distribuții</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Descarcă PDF
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legal Documents */}
        <Card>
          <CardHeader>
            <CardTitle>Documente Legale</CardTitle>
            <CardDescription>Ordine instanță și anunțuri legale</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium text-slate-900">Ordin Administrare</p>
                    <p className="text-sm text-slate-600">Ordin instanță din data 16.10.2024</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Descarcă PDF
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium text-slate-900">Anunț către Creditori</p>
                    <p className="text-sm text-slate-600">Notificare oficială creditori</p>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Descarcă PDF
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
