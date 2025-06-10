"use client"

import { ArrowLeft, FileText, Download, AlertCircle, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function MeetingAgendaPageRO() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 dark:text-slate-100">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 shadow-sm border-b dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-slate-700 dark:text-slate-300 flex-shrink-0" />
              <div className="min-w-0">
                <h1 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                  Agenda Întâlnirii
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  CBC Creative Finance - Adunarea Creditorilor 16 iunie 2025
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
        {/* Meeting Information Notice */}
        <Alert className="mb-6 sm:mb-8 border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
          <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
          <AlertTitle className="text-blue-800 dark:text-blue-400 text-sm sm:text-base">
            Convocare Oficială Întâlnire
          </AlertTitle>
          <AlertDescription className="text-blue-700 dark:text-blue-300 mt-2 text-sm sm:text-base leading-relaxed">
            Aceasta este documentul oficial de convocare pentru adunarea creditorilor CBC Creative Finance SRL
            programată pentru 16 iunie 2025. Toți creditorii sunt invitați oficial să participe și să se implice în
            procedurile conform agendei de mai jos.
          </AlertDescription>
        </Alert>

        {/* Meeting Details */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
              <span>Informații Întâlnire</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Detalii despre viitoarea adunare a creditorilor
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Data și Ora</h4>
                <p className="text-slate-700 text-sm">16 iunie 2025 la ora 10:00 (GMT+2)</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Format Întâlnire</h4>
                <p className="text-slate-700 text-sm">Online prin Microsoft Teams</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Tip Document</h4>
              <p className="text-slate-700 text-sm">Convocator Adunare Creditori</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Scop</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Această întâlnire a fost convocată pentru a discuta aspecte importante legate de procedurile de
                insolvență, inclusiv evaluarea activelor, verificarea creanțelor creditorilor și deciziile privind
                direcția viitoare a administrării companiei.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Cerințe de Participare</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Toți creditorii sunt încurajați să participe. Pentru scopuri de vot, creditorii trebuie să aibă
                creanțele înregistrate și verificate corespunzător. Vă rugăm să vă asigurați că ați completat
                documentația necesară înainte de întâlnire.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
              <p className="text-sm text-slate-600">
                Descărcați agenda completă a întâlnirii și documentul de convocare.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://files.cbc-finance.ro/Convocator_CBC_Creative_Finance_diacritice.ENGLISH-Romanian.pdf"
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
            <CardDescription className="text-xs sm:text-sm">
              Convocator CBC Creative Finance - 16 iunie 2025
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* PDF Embed */}
            <div className="border rounded-lg overflow-hidden bg-white">
              <div className="h-[600px] sm:h-[800px] w-full">
                <iframe
                  src="https://files.cbc-finance.ro/Convocator_CBC_Creative_Finance_diacritice.ENGLISH-Romanian.pdf"
                  className="w-full h-full border-0"
                  title="Agenda Întâlnirii - CBC Creative Finance"
                >
                  <div className="flex items-center justify-center h-full bg-slate-100">
                    <div className="text-center space-y-4">
                      <FileText className="h-12 w-12 text-slate-400 mx-auto" />
                      <div>
                        <p className="text-slate-600 mb-2">Nu se poate afișa PDF în browser</p>
                        <Button variant="outline" asChild>
                          <a
                            href="https://files.cbc-finance.ro/Convocator_CBC_Creative_Finance_diacritice.ENGLISH-Romanian.pdf"
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

        {/* Preparation Guidelines */}
        <Card className="mt-6 sm:mt-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Pregătirea pentru Întâlnire</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Cum să vă pregătiți pentru adunarea creditorilor
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Înainte de Întâlnire</h4>
              <ul className="text-slate-600 text-xs sm:text-sm space-y-1 list-disc list-inside">
                <li>Examinați documentul agendei complete cu atenție</li>
                <li>Asigurați-vă că creanța dumneavoastră de creditor a fost depusă și verificată corespunzător</li>
                <li>Descărcați și completați formularul de vot dacă intenționați să votați asupra oricăror aspecte</li>
                <li>Pregătiți orice întrebări sau preocupări pe care doriți să le ridicați, apoi trimiteti-le pe email, la contact@cbc-finance.ro si cbc@insolventasm.ro pentru a putea primi raspuns in cadrul intalnirii creditorilor.</li>
                <li>Testați conexiunea Microsoft Teams și configurarea audio/video</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Documente Necesare</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Vă rugăm să aveți documentele de identificare ale creditorului pregătite și să vă asigurați că aveți
                acces la orice documentație de susținere pentru creanțele dumneavoastră. Dacă reprezentați un alt
                creditor, asigurați-vă că aveți documentația de autorizare corespunzătoare.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Contact pentru Întrebări</h4>
              <p className="text-slate-600 text-xs sm:text-sm">
                Pentru întrebări privind agenda întâlnirii sau procedurile, vă rugăm să contactați administratorul special la{" "}
                <a href="mailto:cbc@insolventasm.ro" className="text-blue-600 hover:text-blue-800 underline">
                  cbc@insolventasm.ro
                </a>{" "}
                sau sunați la +4 0745.245.844. De asemenea, puteți contacta administratorul special la{" "}
                <a href="mailto:contact@cbc-finance.ro" className="text-blue-600 hover:text-blue-800 underline">
                  contact@cbc-finance.ro
                </a>
                .
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
