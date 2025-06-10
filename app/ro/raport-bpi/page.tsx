"use client"

import { ArrowLeft, FileText, Download, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function BPIReportPageRO() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 dark:text-slate-100">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 shadow-sm border-b dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-slate-700 dark:text-slate-300 flex-shrink-0" />
              <div className="min-w-0">
                <h1 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                  Raport BPI
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  CBC Creative Finance - Publicație Oficială Insolvență
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
        {/* Legal Compliance Notice */}
        <Alert className="mb-6 sm:mb-8 border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800">
          <AlertCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
          <AlertTitle className="text-green-800 dark:text-green-400 text-sm sm:text-base">
            Anunț Conformitate Legală
          </AlertTitle>
          <AlertDescription className="text-green-700 dark:text-green-300 mt-2 text-sm sm:text-base leading-relaxed">
            CBC Creative Finance SRL s-a conformat cerințelor legale conform Legii 85/2014, publicând agenda întâlnirii
            în Buletinul Procedurilor de Insolvență (BPI). Această publicație servește ca anunț oficial către toți
            creditorii privind viitoarea adunare a creditorilor programată pentru 16 iunie 2025.
          </AlertDescription>
        </Alert>

        {/* Document Information */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
              <span>Detalii Publicație BPI</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Publicație oficială în Buletinul Procedurilor de Insolvență din România
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Data Publicației</h4>
                <p className="text-slate-700 text-sm">6 iunie 2025</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Numărul BPI</h4>
                <p className="text-slate-700 text-sm">13137</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Tip Document</h4>
              <p className="text-slate-700 text-sm">Convocare Adunare Creditori</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Semnificația Legală</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Această publicație servește ca anunț oficial către toți creditorii conform legii române de insolvență.
                Publicația în BPI asigură transparența în procesul de insolvență și oferă tuturor părților interesate
                acces egal la informațiile privind procedurile.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
              <p className="text-sm text-slate-600">Puteți vizualiza și descărca publicația oficială BPI mai jos.</p>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://files.cbc-finance.ro/bpi-ro-ro-na-2025-06-06-bpiroro-na-no13137.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Download className="h-4 w-4 mr-2" />
                  Descarcă PDF
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* PDF Embed */}
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Previzualizare Document</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Publicația BPI Nr. 13137 din 6 iunie 2025</CardDescription>
          </CardHeader>
          <CardContent>
            {/* PDF Embed */}
            <div className="border rounded-lg overflow-hidden bg-white">
              <div className="h-[600px] sm:h-[800px] w-full">
                <iframe
                  src="https://files.cbc-finance.ro/bpi-ro-ro-na-2025-06-06-bpiroro-na-no13137.pdf"
                  className="w-full h-full border-0"
                  title="Publicația BPI - CBC Creative Finance"
                >
                  <div className="flex items-center justify-center h-full bg-slate-100">
                    <div className="text-center space-y-4">
                      <FileText className="h-12 w-12 text-slate-400 mx-auto" />
                      <div>
                        <p className="text-slate-600 mb-2">Nu se poate afișa PDF în browser</p>
                        <Button variant="outline" asChild>
                          <a
                            href="https://files.cbc-finance.ro/bpi-ro-ro-na-2025-06-06-bpiroro-na-no13137.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Descarcă PDF
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </iframe>
              </div>
            </div>

            <div className="text-xs text-slate-500 text-center mt-4">
              Dacă PDF-ul nu se încarcă corect, vă rugăm să folosiți butonul de descărcare de mai sus pentru a vizualiza
              documentul.
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card className="mt-6 sm:mt-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Pașii Următori</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Informații pentru creditori privind viitoarea întâlnire
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Pregătirea pentru Întâlnire</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Creditorii sunt sfătuiți să examineze agenda întâlnirii și să pregătească orice întrebări sau preocupări
                pe care doresc să le abordeze. Pentru scopuri de vot, vă rugăm să descărcați și să completați formularul
                de vot disponibil pe pagina principală.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Informații de Contact</h4>
              <p className="text-slate-600 text-xs sm:text-sm">
                Pentru întrebări privind această publicație sau viitoarea întâlnire, vă rugăm să contactați
                administratorul la{" "}
                <a href="mailto:cbc@insolventasm.ro" className="text-blue-600 hover:text-blue-800 underline">
                  cbc@insolventasm.ro
                </a>{" "}
                sau sunați la +4 0745.245.844.
              </p>
            </div>

            <div className="flex justify-center mt-4">
              <Button asChild>
                <Link href="/ro">Înapoi la Pagina Principală</Link>
              </Button>
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
