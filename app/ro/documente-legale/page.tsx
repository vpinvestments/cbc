"use client"

import { ArrowLeft, FileText, Scale, BookOpen, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function LegalDocumentsPageRO() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 dark:text-slate-100">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 shadow-sm border-b dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Scale className="h-6 w-6 sm:h-8 sm:w-8 text-slate-700 dark:text-slate-300 flex-shrink-0" />
              <div className="min-w-0">
                <h1 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                  Documente Legale
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  CBC Creative Finance - Legi și Reglementări Aplicabile
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
        {/* Introduction Card */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
              <span>Cadrul Legal al Insolvenței</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Fundamentul legal care guvernează procedurile de insolvență pentru CBC Creative Finance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Despre Legea 85/2014</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Legea nr. 85/2014 privind procedurile de prevenire a insolvenței și de insolvență este legislația
                primară care guvernează procedurile de insolvență în România. Această lege stabilește cadrul legal
                pentru administrarea cazului de insolvență al CBC Creative Finance, inclusiv drepturile creditorilor,
                îndatoririle administratorului și cerințele procedurale.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Prevederi Cheie</h4>
              <ul className="text-slate-600 text-xs sm:text-sm space-y-1 list-disc list-inside">
                <li>Procedurile de depunere și verificare a creanțelor creditorilor</li>
                <li>Numirea administratorului și responsabilitățile</li>
                <li>Mecanismele de recuperare și distribuire a activelor</li>
                <li>Cerințele pentru întâlnirile creditorilor și procedurile de vot</li>
                <li>Cronologia și termenele pentru diverse proceduri</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Relevanța pentru CBC Creative Finance</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Toate procedurile legate de insolvența CBC Creative Finance sunt desfășurate în conformitate cu această
                lege. Înțelegerea acestor prevederi ajută creditorii și părțile interesate să își cunoască drepturile și
                procedurile care sunt urmate.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Law Document */}
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
              <span>Legea nr. 85/2014</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Privind procedurile de prevenire a insolvenței și de insolvență
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-sm text-slate-600 mb-2">
                  Acesta este textul complet al legii române de insolvență care guvernează toate procedurile din acest
                  caz. Documentul este în română fiind textul legal oficial.
                </p>
                <div className="flex items-center space-x-4 text-xs text-slate-500">
                  <span>Tip Document: PDF</span>
                  <span>Limbă: Română</span>
                  <span>Text Legal Oficial</span>
                </div>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://cbc-finance.ro/documente-insolventa/legea-nr-85-2014-privind-procedurile-de-prevenire-a-insolventei-si-de-insolventa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Descarcă PDF
                </a>
              </Button>
            </div>

            {/* PDF Embed */}
            <div className="border rounded-lg overflow-hidden bg-white">
              <div className="h-[600px] sm:h-[800px] w-full">
                <iframe
                  src="https://cbc-finance.ro/documente-insolventa/legea-nr-85-2014-privind-procedurile-de-prevenire-a-insolventei-si-de-insolventa.pdf"
                  className="w-full h-full border-0"
                  title="Legea nr. 85/2014 - Procedurile de Prevenire a Insolvenței și de Insolvență"
                >
                  <div className="flex items-center justify-center h-full bg-slate-100">
                    <div className="text-center space-y-4">
                      <FileText className="h-12 w-12 text-slate-400 mx-auto" />
                      <div>
                        <p className="text-slate-600 mb-2">Nu se poate afișa PDF în browser</p>
                        <Button variant="outline" asChild>
                          <a
                            href="https://cbc-finance.ro/documente-insolventa/legea-nr-85-2014-privind-procedurile-de-prevenire-a-insolventei-si-de-insolventa.pdf"
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

            <div className="text-xs text-slate-500 text-center">
              Dacă PDF-ul nu se încarcă corect, vă rugăm să folosiți butonul de descărcare de mai sus pentru a vizualiza
              documentul.
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card className="mt-6 sm:mt-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Resurse Legale Suplimentare</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Alte informații legale relevante și resurse
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Informații Instanță</h4>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Numărul Dosarului: 1637/93/2023
                  <br />
                  Instanța: Tribunalul Ilfov, Secția Civilă
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Asistență Juridică</h4>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Pentru întrebări juridice privind drepturile dumneavoastră sub această lege, consultați-vă cu un
                  avocat român calificat specializat în procedurile de insolvență.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Anunț Important</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Acest document este furnizat în scopuri informative. Toate procedurile legale sunt desfășurate conform
                legii române. Dacă aveți nevoie de clarificări asupra oricăror aspecte legale, vă rugăm să contactați
                administratorul sau să solicitați consiliere juridică independentă.
              </p>
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
