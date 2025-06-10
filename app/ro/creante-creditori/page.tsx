"use client"

import { AlertTriangle, ArrowLeft, FileText, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function CreditorClaimsPageRO() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 dark:text-slate-100">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 shadow-sm border-b dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-slate-700 dark:text-slate-300 flex-shrink-0" />
              <div className="min-w-0">
                <h1 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                  Creanțe Creditori
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  CBC Creative Finance - Tabelul Final al Creditorilor
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <LanguageSwitcher />
              <ThemeToggle />
              <Link href="/ro">
                <Button variant="outline" className="text-sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Înapoi la Principal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Claims Deadline Notice */}
        <Alert className="mb-6 sm:mb-8 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
          <AlertTitle className="text-red-800 text-sm sm:text-base">Termenul de Depunere Creanțe a Trecut</AlertTitle>
          <AlertDescription className="text-red-700 mt-2 text-sm sm:text-base leading-relaxed">
            Termenul pentru depunerea creanțelor creditorilor a fost <strong>3 ianuarie 2025</strong>. Nu se mai pot
            depune creanțe noi în acest moment. Vă rugăm să consultați tabelul final al creditorilor de mai jos pentru
            lista completă a creanțelor acceptate.
          </AlertDescription>
        </Alert>

        {/* Information Card */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
              <span>Informații Proces Creanțe</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Date importante și informații privind procesul de creanțe creditori
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Termen Creanțe</h4>
                <p className="text-slate-700 text-sm">3 ianuarie 2025</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Status</h4>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Închis
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Ce urmează?</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Administratorul a întocmit tabelul final al creditorilor pe baza tuturor creanțelor depuse înainte de
                termen. Acest tabel arată toate creanțele acceptate și sumele respective. Dacă credeți că există o
                eroare în tabel, vă rugăm să contactați administratorul imediat.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Informații de Contact</h4>
              <p className="text-slate-600 text-xs sm:text-sm">
                Pentru întrebări despre procesul de creanțe, contactați administratorul la{" "}
                <a href="mailto:cbc@insolventasm.ro" className="text-blue-600 hover:text-blue-800 underline">
                  cbc@insolventasm.ro
                </a>{" "}
                sau sunați la +4 0745.245.844.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Final Table of Creditors */}
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
              <span>Tabelul Final al Creditorilor</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Document oficial care arată toate creanțele creditorilor acceptate și sumele
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-sm text-slate-600">
                  Acest document conține lista completă și finală a tuturor creanțelor creditorilor care au fost depuse
                  și acceptate de administrator.
                </p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://files.cbc-finance.ro/TD-CBC-CREATIVE-FINANCE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Descarcă PDF
                </a>
              </Button>
            </div>

            {/* PDF Embed */}
            <div className="border rounded-lg overflow-hidden bg-white">
              <div className="h-[600px] sm:h-[800px] w-full">
                <iframe
                  src="https://files.cbc-finance.ro/TD-CBC-CREATIVE-FINANCE.pdf"
                  className="w-full h-full border-0"
                  title="Tabelul Final al Creditorilor - CBC Creative Finance"
                >
                  <div className="flex items-center justify-center h-full bg-slate-100">
                    <div className="text-center space-y-4">
                      <FileText className="h-12 w-12 text-slate-400 mx-auto" />
                      <div>
                        <p className="text-slate-600 mb-2">Nu se poate afișa PDF în browser</p>
                        <Button variant="outline" asChild>
                          <a
                            href="https://files.cbc-finance.ro/TD-CBC-CREATIVE-FINANCE.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FileText className="h-4 w-4 mr-2" />
                            Descarcă PDF
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </iframe>
              </div>
            </div>

            <div className="text-xs text-slate-500 text-center">
              Dacă PDF-ul nu se încarcă corect, vă rugăm să folosiți butonul de descărcare de mai sus pentru a vizualiza
              documentul.
            </div>
          </CardContent>
        </Card>
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
