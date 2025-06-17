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

export default function SecurePage() {
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
      setError("Incorrect password. Please try again.")
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
                    <span className="text-xs sm:text-sm text-slate-600 font-medium">Secure Access Portal</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <LanguageSwitcher />
                <ThemeToggle />
                <div className="flex items-center space-x-2 bg-red-50 dark:bg-red-900/30 px-2 sm:px-3 py-1 rounded-full self-start sm:self-auto">
                  <AlertTriangle className="h-3 w-3 sm:h-4 sm:w-4 text-red-600 dark:text-red-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-red-700 dark:text-red-400 leading-tight">
                    In insolvency / En Procedure Colective / In insolventa
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
                  Secure Access Required
                </CardTitle>
                <CardDescription className="text-amber-700 dark:text-amber-300 text-xs sm:text-sm">
                  This section contains confidential information. Please enter the access password.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-amber-800 dark:text-amber-400">
                      Access Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pr-10 border-amber-300 focus:border-amber-500 focus:ring-amber-500"
                        placeholder="Enter password"
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
                    Access Secure Section
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
              <p className="text-xs text-slate-400">Website maintained by the Appointed Special Administrator</p>
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
                  <span className="text-xs sm:text-sm text-slate-600 font-medium">Confidential Information Portal</span>
                  <span className="mx-2 h-1 w-1 rounded-full bg-slate-400 hidden sm:block"></span>
                  <span className="text-xs text-slate-500 hidden sm:block">Authorized Access Only</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <LanguageSwitcher />
              <ThemeToggle />
              <div className="flex items-center space-x-2 bg-green-50 dark:bg-green-900/30 px-2 sm:px-3 py-1 rounded-full self-start sm:self-auto">
                <Lock className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-green-700 dark:text-green-400 leading-tight">
                  Secure Access Granted
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
            Secure Access Granted
          </AlertTitle>
          <AlertDescription className="text-green-700 dark:text-green-300 mt-2 text-sm sm:text-base leading-relaxed">
            You have successfully accessed the confidential section. This information is restricted to authorized
            personnel only.
          </AlertDescription>
        </Alert>

        {/* Video Section */}
        <Card className="mb-6 sm:mb-8 border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-blue-800 text-base sm:text-lg">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Confidential Video Content</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm text-blue-700">
              Restricted access video material - June 16, 2025
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-black rounded-lg overflow-hidden shadow-lg">
                <video className="w-full h-auto" controls preload="metadata" style={{ maxHeight: "70vh" }}>
                  <source src="https://files.cbc-finance.ro/vid/ac16062025.mp4" type="video/mp4" />
                  <p className="text-white p-4 text-center">
                    Your browser does not support the video tag. Please use a modern browser to view this content.
                  </p>
                </video>
              </div>

              <div className="text-xs text-slate-500 text-center">
                Video content is confidential and protected. Recording or distribution is strictly prohibited.
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Court Filing Documents Section */}
        <Card className="mb-6 sm:mb-8 border-purple-200 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-800">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-purple-800 text-base sm:text-lg">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Court Filing Documents</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm text-purple-700">
              Official court submissions and legal filings - June 17, 2025
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* 1. The General Meeting of Creditors */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 text-sm mb-3 border-b border-purple-200 pb-2">
                    1. The General Meeting of Creditors
                  </h4>
                  <div className="space-y-2">
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Centralizare-Voturi-Ordinea-de-zi-Adunare-Creditori-16.06.2025.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Vote Centralization - Creditors Meeting Agenda 16.06.2025</span>
                      <span className="text-slate-500 ml-2">312K</span>
                    </a>
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Discurs-pentru-Adunarea-Creditorilor-Cristian-F-Pricop-Administrator-Special.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Speech for Creditors Meeting - Special Administrator</span>
                      <span className="text-slate-500 ml-2">454K</span>
                    </a>
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Proces-verbal-al-Adunarii-Creditorilor-16.06.2025.docx"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Minutes of Creditors Meeting 16.06.2025</span>
                      <span className="text-slate-500 ml-2">51K</span>
                    </a>
                  </div>
                </div>

                {/* 2. Communications with Judicial Administrator */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 text-sm mb-3 border-b border-purple-200 pb-2">
                    2. Communications with Judicial Administrator
                  </h4>
                  <div className="space-y-2">
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Comunicare-cu-Adm-Jud-Privind-Planul-de-Reorganizare.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Communication with Judicial Admin - Reorganization Plan</span>
                      <span className="text-slate-500 ml-2">252K</span>
                    </a>
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Dovada-Trimitere-Plan-Reorganizare.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Proof of Reorganization Plan Submission</span>
                      <span className="text-slate-500 ml-2">170K</span>
                    </a>
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Plan_de_reorganizare-CBC-CREATIVE-FINANCE-SRL.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Reorganization Plan - CBC CREATIVE FINANCE SRL</span>
                      <span className="text-slate-500 ml-2">2.0M</span>
                    </a>
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Raport-BPI-Convocare-Adunare-Creditori-16.06.2025.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">BPI Report - Creditors Meeting Convocation 16.06.2025</span>
                      <span className="text-slate-500 ml-2">608K</span>
                    </a>
                  </div>
                </div>

                {/* 3. Communications from Judicial Administrator to Creditors */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 text-sm mb-3 border-b border-purple-200 pb-2">
                    3. Communications from Judicial Administrator to Creditors
                  </h4>
                  <div className="space-y-2">
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Emailul-Administratorului-Judiciar-catre-creditori.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Email from Judicial Administrator to Creditors</span>
                      <span className="text-slate-500 ml-2">278K</span>
                    </a>
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Anexa1-Mail-Administrator-Judiciar-CBC_informare-creditori_12.06.2025.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Annex 1 - Judicial Admin Mail - Creditor Information 12.06.2025</span>
                      <span className="text-slate-500 ml-2">476K</span>
                    </a>
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Anexa-2-a-Emailului-Administratorului-Judiciar-catre-Creditori-12.06.2025.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Annex 2 - Judicial Admin Email to Creditors 12.06.2025</span>
                      <span className="text-slate-500 ml-2">285K</span>
                    </a>
                  </div>
                </div>

                {/* 4. Communications with the Fiscal Administration */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 text-sm mb-3 border-b border-purple-200 pb-2">
                    4. Communications with the Fiscal Administration
                  </h4>
                  <div className="space-y-2">
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Dovada-Comunicare-ANAF-Email.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Proof of ANAF Communication - Email</span>
                      <span className="text-slate-500 ml-2">170K</span>
                    </a>
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Dovada-Trimitere-Plan-Reorganizare.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">Proof of Reorganization Plan Submission</span>
                      <span className="text-slate-500 ml-2">170K</span>
                    </a>
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Extras-BPI-16.06.2025.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">BPI Extract 16.06.2025</span>
                      <span className="text-slate-500 ml-2">63K</span>
                    </a>
                    <a
                      href="https://files.cbc-finance.ro/depunere-instanta/Raspuns-Anaf-privind-Adunarea-Creditorilor-din-16.06.2025.pdf"
                      className="flex items-center justify-between p-3 rounded bg-white dark:bg-slate-800 border border-purple-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors text-xs"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="truncate">ANAF Response - Creditors Meeting 16.06.2025</span>
                      <span className="text-slate-500 ml-2">48K</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-amber-800 dark:text-amber-300">
                    <p className="font-medium mb-1">Document Access Notice</p>
                    <p>
                      These documents are official court filings submitted on June 17, 2025. All documents are
                      confidential and subject to legal privilege. Access is restricted to authorized personnel only.
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
                <span>Internal Financial Reports</span>
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                Detailed financial analysis and projections
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow flex flex-col">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                Comprehensive financial reports including asset valuations, cash flow projections, and recovery
                estimates for creditors.
              </p>
              <div className="pt-2">
                <Button
                  variant="outline"
                  className="w-full h-10 sm:h-auto text-xs sm:text-sm border-amber-300 text-amber-700 hover:bg-amber-100"
                >
                  <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  Access Financial Reports
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="flex items-center space-x-2 text-sm sm:text-base">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                <span>Creditor Communications</span>
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">Private correspondence and negotiations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow flex flex-col">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                Confidential communications with major creditors, settlement negotiations, and strategic discussions.
              </p>
              <div className="pt-2">
                <Button
                  variant="outline"
                  className="w-full h-10 sm:h-auto text-xs sm:text-sm border-blue-300 text-blue-700 hover:bg-blue-100"
                >
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  View Communications
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="sm:col-span-2 lg:col-span-1 flex flex-col border-purple-200 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-800">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="flex items-center space-x-2 text-sm sm:text-base">
                <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 flex-shrink-0" />
                <span>Legal Strategy Documents</span>
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">Attorney work product and legal analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow flex flex-col">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                Privileged legal documents, strategy memos, and confidential legal analysis related to the insolvency
                proceedings.
              </p>
              <div className="pt-2">
                <Button
                  variant="outline"
                  className="w-full h-10 sm:h-auto text-xs sm:text-sm border-purple-300 text-purple-700 hover:bg-purple-100"
                >
                  <Lock className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                  Access Legal Documents
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Administrator Contact - Secure */}
        <Card className="mb-6 sm:mb-8 border-slate-200 bg-slate-50 dark:bg-slate-800/50 dark:border-slate-700">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Secure Administrator Contact</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Direct communication channels for authorized personnel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Secure Communication</h3>
                  <p className="text-slate-700 mb-1 text-sm sm:text-base">Encrypted Email Channel</p>
                  <p className="text-slate-600 text-xs sm:text-sm mb-1">secure@cbc-finance.ro</p>
                  <p className="text-slate-600 text-xs sm:text-sm">PGP Key Available Upon Request</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Emergency Contact</h4>
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
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Document Access</h3>
                  <p className="text-slate-700 mb-1 text-sm sm:text-base">Secure File Repository</p>
                  <p className="text-slate-600 text-xs sm:text-sm mb-1">Access via VPN Required</p>
                  <p className="text-slate-600 text-xs sm:text-sm">Two-Factor Authentication Enabled</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Session Information</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-xs sm:text-sm">
                      <Lock className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">Session Active</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs sm:text-sm">
                      <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="text-slate-700">Access Logged</span>
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
            Confidentiality Notice
          </AlertTitle>
          <AlertDescription className="text-red-700 dark:text-red-300 mt-2 text-sm sm:text-base leading-relaxed">
            All information in this section is strictly confidential and protected by attorney-client privilege and work
            product doctrine. Unauthorized disclosure is prohibited and may result in legal action. Your access to this
            section has been logged.
          </AlertDescription>
        </Alert>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 dark:bg-slate-900 text-white py-6 sm:py-8 mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs sm:text-sm text-slate-300 mb-2">CBC CREATIVE FINANCE SRL - CONFIDENTIAL</p>
            <p className="text-xs text-slate-400">Secure Portal - Authorized Access Only</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
