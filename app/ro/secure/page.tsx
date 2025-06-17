"use client"

import type React from "react"

import { useState } from "react"
import { AlertTriangle, Lock, Eye, EyeOff, Building, FileText, Users, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function SecurePageRO() {
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")

  const correctPassword = "CBC16062025"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === correctPassword) {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Parolă incorectă. Vă rugăm să încercați din nou.")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 dark:text-slate-100">
        {/* Header */}
        <header className="bg-white dark:bg-slate-900 shadow-sm border-b dark:border-slate-700">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-slate-600 rounded-full opacity-30 blur-sm"></div>
                  <div className="relative bg-white p-1.5 rounded-full border border-slate-200 shadow-sm">
                    <Building className="h-6 w-6 sm:h-8 sm:w-8 text-slate-700 flex-shrink-0" />
                  </div>
                </div>
                <div className="min-w-0">
                  <h1 className="text-lg sm:text-2xl font-bold text-slate-900 leading-tight tracking-tight">
                    CBC CREATIVE FINANCE
                  </h1>
                  <div className="flex items-center mt-0.5">
                    <span className="text-xs sm:text-sm text-slate-600 font-medium">Portal de Acces Securizat</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <LanguageSwitcher />
                <ThemeToggle />
                <div className="flex items-center space-x-2 bg-red-50 dark:bg-red-900/30 px-2 sm:px-3 py-1 rounded-full self-start sm:self-auto">
                  <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-red-700 dark:text-red-400 leading-tight">
                    În insolvență / În Procedură Colectivă / În insolvență
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
          <div className="max-w-md mx-auto">
            <Card className="border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800">
              <CardHeader className="text-center pb-3 sm:pb-6">
                <div className="mx-auto mb-4 w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                  <Lock className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <CardTitle className="text-amber-800 dark:text-amber-400 text-base sm:text-lg">
                  Acces Securizat Necesar
                </CardTitle>
                <CardDescription className="text-amber-700 dark:text-amber-300 text-xs sm:text-sm">
                  Această secțiune conține informații confidențiale. Vă rugăm să introduceți parola de acces.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-amber-800 dark:text-amber-400">
                      Parola de Acces
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pr-10 border-amber-300 focus:border-amber-500 focus:ring-amber-500"
                        placeholder="Introduceți parola"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-amber-600" />
                        ) : (
                          <Eye className="h-4 w-4 text-amber-600" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {error && (
                    <Alert className="border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800">
                      <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
                      <AlertDescription className="text-red-700 dark:text-red-300 text-sm">{error}</AlertDescription>
                    </Alert>
                  )}

                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Accesează Secțiunea Securizată
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-slate-800 dark:bg-slate-900 text-white py-6 sm:py-8 mt-12 sm:mt-16">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-xs sm:text-sm text-slate-300 mb-2">CBC CREATIVE FINANCE SRL</p>
              <p className="text-xs text-slate-400">Site web întreținut de Administratorul Special Numit</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 dark:text-slate-100">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 shadow-sm border-b dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-slate-600 rounded-full opacity-30 blur-sm"></div>
                <div className="relative bg-white p-1.5 rounded-full border border-slate-200 shadow-sm">
                  <Building className="h-6 w-6 sm:h-8 sm:w-8 text-slate-700 flex-shrink-0" />
                </div>
              </div>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-2xl font-bold text-slate-900 leading-tight tracking-tight">
                  CBC CREATIVE FINANCE
                </h1>
                <div className="flex items-center mt-0.5">
                  <span className="text-xs sm:text-sm text-slate-600 font-medium">Portal Informații Confidențiale</span>
                  <span className="mx-2 h-1 w-1 rounded-full bg-slate-400 hidden sm:block"></span>
                  <span className="text-xs text-slate-500 hidden sm:block">Doar Acces Autorizat</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <LanguageSwitcher />
              <ThemeToggle />
              <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/30 px-2 sm:px-3 py-1 rounded-full self-start sm:self-auto">
                <Lock className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-green-700 dark:text-green-400 leading-tight">
                  Acces Securizat Acordat
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Access Granted Notice */}
        <Alert className="mb-6 sm:mb-8 border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800">
          <Lock className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
          <AlertTitle className="text-green-800 dark:text-green-400 text-sm sm:text-base">
            Acces Securizat Acordat
          </AlertTitle>
          <AlertDescription className="text-green-700 dark:text-green-300 mt-2 text-sm sm:text-base leading-relaxed">
            Ați accesat cu succes secțiunea confidențială. Aceste informații sunt restricționate doar pentru personalul
            autorizat.
          </AlertDescription>
        </Alert>

        {/* Video Section */}
        <Card className="mb-6 sm:mb-8 border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-blue-800 text-base sm:text-lg">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Conținut Video Confidențial</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm text-blue-700">
              Material video cu acces restricționat - 16 iunie 2025
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-black rounded-lg overflow-hidden shadow-lg">
                <video className="w-full h-auto" controls preload="metadata" style={{ maxHeight: "70vh" }}>
                  <source src="https://files.cbc-finance.ro/vid/ac16062025.mp4" type="video/mp4" />
                  <p className="text-white p-4 text-center">
                    Browserul dumneavoastră nu suportă tag-ul video. Vă rugăm să folosiți un browser modern pentru a
                    vizualiza acest conținut.
                  </p>
                </video>
              </div>

              <div className="text-xs text-slate-500 text-center">
                Conținutul video este confidențial și protejat. Înregistrarea sau distribuirea este strict interzisă.
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Court Filing Documents Section */}
        <Card className="mb-6 sm:mb-8 border-purple-200 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-800">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-purple-800 text-base sm:text-lg">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Documente Depuse la Instanță</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm text-purple-700">
              Depuneri oficiale la instanță și dosare juridice - 17 iunie 2025
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* 1. Adunarea Generală a Creditorilor */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 text-sm mb-3 border-b border-purple-200 pb-2">
                    1. Adunarea Generală a Creditorilor
                  </h4>
                  <div className="space-y-2">
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Centralizar-Voturi-Ordinea-de-zi-Adunare-Creditori-16.06.2025.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Centralizare Voturi - Ordinea de zi Adunare Creditori 16.06.2025</span>
                      <span className="text-slate-500 ml-2">312K</span>
                    </a>
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Discurs-pentru-Adunarea-Creditorilor-Cristian-F-Pricop-Administrator-Special.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Discurs pentru Adunarea Creditorilor - Administrator Special</span>
                      <span className="text-slate-500 ml-2">454K</span>
                    </a>
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Proces-verbal-al-Adunarii-Creditorilor-16.06.2025.docx"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Proces Verbal al Adunării Creditorilor 16.06.2025</span>
                      <span className="text-slate-500 ml-2">51K</span>
                    </a>
                  </div>
                </div>

                {/* 2. Comunicări cu Administratorul Judiciar */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 text-sm mb-3 border-b border-purple-200 pb-2">
                    2. Comunicări cu Administratorul Judiciar
                  </h4>
                  <div className="space-y-2">
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Comunicare-cu-Adm-Jud-Privind-Planul-de-Reorganizare.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Comunicare cu Adm Jud - Planul de Reorganizare</span>
                      <span className="text-slate-500 ml-2">252K</span>
                    </a>
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Dovada-Trimitere-Plan-Reorganizare.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Dovada Trimitere Plan Reorganizare</span>
                      <span className="text-slate-500 ml-2">170K</span>
                    </a>
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Plan_de_reorganizare-CBC-CREATIVE-FINANCE-SRL.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Plan de Reorganizare - CBC CREATIVE FINANCE SRL</span>
                      <span className="text-slate-500 ml-2">2.0M</span>
                    </a>
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Raport-BPI-Convocare-Adunare-Creditori-16.06.2025.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Raport BPI - Convocare Adunare Creditori 16.06.2025</span>
                      <span className="text-slate-500 ml-2">608K</span>
                    </a>
                  </div>
                </div>

                {/* 3. Comunicări de la Administratorul Judiciar către Creditori */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 text-sm mb-3 border-b border-purple-200 pb-2">
                    3. Comunicări de la Administratorul Judiciar către Creditori
                  </h4>
                  <div className="space-y-2">
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Emailul-Administratorului-Judiciar-catre-creditori.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Emailul Administratorului Judiciar către Creditori</span>
                      <span className="text-slate-500 ml-2">278K</span>
                    </a>
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Anexa1-Mail-Administrator-Judiciar-CBC_informare-creditori_12.06.2025.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">
                        Anexa 1 - Mail Administrator Judiciar - Informare Creditori 12.06.2025
                      </span>
                      <span className="text-slate-500 ml-2">476K</span>
                    </a>
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Anexa-2-a-Emailului-Administratorului-Judiciar-catre-Creditori-12.06.2025.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">
                        Anexa 2 - Email Administrator Judiciar către Creditori 12.06.2025
                      </span>
                      <span className="text-slate-500 ml-2">285K</span>
                    </a>
                  </div>
                </div>

                {/* 4. Comunicări cu Administrația Fiscală */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 text-sm mb-3 border-b border-purple-200 pb-2">
                    4. Comunicări cu Administrația Fiscală
                  </h4>
                  <div className="space-y-2">
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Dovada-Comunicare-ANAF-Email.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Dovada Comunicare ANAF - Email</span>
                      <span className="text-slate-500 ml-2">170K</span>
                    </a>
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Dovada-Trimitere-Plan-Reorganizare.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Dovada Trimitere Plan Reorganizare</span>
                      <span className="text-slate-500 ml-2">170K</span>
                    </a>
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Extras-BPI-16.06.2025.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Extras BPI 16.06.2025</span>
                      <span className="text-slate-500 ml-2">63K</span>
                    </a>
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Raspuns-Anaf-privind-Adunarea-Creditorilor-din-16.06.2025.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Răspuns ANAF - Adunarea Creditorilor din 16.06.2025</span>
                      <span className="text-slate-500 ml-2">48K</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-amber-800 dark:text-amber-300">
                    <p className="font-medium mb-1">Notificare Acces Documente</p>
                    <p>
                      Aceste documente sunt depuneri oficiale la instanță din 17 iunie 2025. Toate documentele sunt
                      confidențiale și supuse privilegiului juridic. Accesul este restricționat doar pentru personalul
                      autorizat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Confidential Documents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Card className="flex flex-col border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="flex items-center space-x-2 text-sm sm:text-base">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600 flex-shrink-0" />
                <span>Rapoarte Financiare Interne</span>
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                Analize financiare detaliate și proiecții
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow flex flex-col">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                Rapoarte financiare cuprinzătoare incluzând evaluări de active, proiecții de flux de numerar și estimări
                de recuperare pentru creditori.
              </p>
              <div className="pt-2">
                <Button
                  variant="outline"
                  className="w-full h-10 sm:h-auto text-xs sm:text-sm border-amber-300 text-amber-700 hover:bg-amber-100"
                >
                  <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  Accesează Rapoartele Financiare
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="flex items-center space-x-2 text-sm sm:text-base">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                <span>Comunicări cu Creditorii</span>
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">Corespondență privată și negocieri</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow flex flex-col">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                Comunicări confidențiale cu creditorii majori, negocieri de soluționare și discuții strategice.
              </p>
              <div className="pt-2">
                <Button
                  variant="outline"
                  className="w-full h-10 sm:h-auto text-xs sm:text-sm border-blue-300 text-blue-700 hover:bg-blue-100"
                >
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  Vezi Comunicările
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="sm:col-span-2 lg:col-span-1 flex flex-col border-purple-200 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-800">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="flex items-center space-x-2 text-sm sm:text-base">
                <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 flex-shrink-0" />
                <span>Documente Strategie Juridică</span>
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                Produsul muncii avocaților și analize juridice
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow flex flex-col">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                Documente juridice privilegiate, memorandumuri de strategie și analize juridice confidențiale legate de
                procedurile de insolvență.
              </p>
              <div className="pt-2">
                <Button
                  variant="outline"
                  className="w-full h-10 sm:h-auto text-xs sm:text-sm border-purple-300 text-purple-700 hover:bg-purple-100"
                >
                  <Lock className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  Accesează Documentele Juridice
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Administrator Contact - Secure */}
        <Card className="mb-6 sm:mb-8 border-slate-200 bg-slate-50 dark:bg-slate-800/50 dark:border-slate-700">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Contact Administrator Securizat</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Canale de comunicare directă pentru personalul autorizat
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Comunicare Securizată</h3>
                  <p className="text-slate-700 mb-1 text-sm sm:text-base">Canal Email Criptat</p>
                  <p className="text-slate-600 text-xs sm:text-sm mb-1">secure@cbc-finance.ro</p>
                  <p className="text-slate-600 text-xs sm:text-sm">Cheie PGP Disponibilă la Cerere</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Contact de Urgență</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-xs sm:text-sm">
                      <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="text-slate-700">+40 XXX.XXX.XXX (24/7)</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs sm:text-sm">
                      <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="text-slate-700 break-all">emergency@cbc-finance.ro</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Acces Documente</h3>
                  <p className="text-slate-700 mb-1 text-sm sm:text-base">Depozit Securizat de Fișiere</p>
                  <p className="text-slate-600 text-xs sm:text-sm mb-1">Acces prin VPN Necesar</p>
                  <p className="text-slate-600 text-xs sm:text-sm">Autentificare cu Doi Factori Activată</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Informații Sesiune</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-xs sm:text-sm">
                      <Lock className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">Sesiune Activă</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs sm:text-sm">
                      <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="text-slate-700">Acces Înregistrat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <Alert className="border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800">
          <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
          <AlertTitle className="text-red-800 dark:text-red-400 text-sm sm:text-base">
            Notificare de Confidențialitate
          </AlertTitle>
          <AlertDescription className="text-red-700 dark:text-red-300 mt-2 text-sm sm:text-base leading-relaxed">
            Toate informațiile din această secțiune sunt strict confidențiale și protejate de privilegiul avocat-client
            și doctrina produsului muncii. Divulgarea neautorizată este interzisă și poate rezulta în acțiuni legale.
            Accesul dumneavoastră la această secțiune a fost înregistrat.
          </AlertDescription>
        </Alert>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 dark:bg-slate-900 text-white py-6 sm:py-8 mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs sm:text-sm text-slate-300 mb-2">CBC CREATIVE FINANCE SRL - CONFIDENȚIAL</p>
            <p className="text-xs text-slate-400">Portal Securizat - Doar Acces Autorizat</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
