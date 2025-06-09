"use client"

import { ArrowLeft, Download, AlertCircle, Vote, Users, CheckSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function VotingDocumentationPageRO() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 dark:text-slate-100">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 shadow-sm border-b dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Vote className="h-6 w-6 sm:h-8 sm:w-8 text-slate-700 dark:text-slate-300 flex-shrink-0" />
              <div className="min-w-0">
                <h1 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                  Documentație Vot
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  CBC Creative Finance - Formulare de Vot pentru Adunarea Creditorilor
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
        {/* Voting Information Notice */}
        <Alert className="mb-6 sm:mb-8 border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800">
          <AlertCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
          <AlertTitle className="text-green-800 dark:text-green-400 text-sm sm:text-base">
            Documentație Oficială de Vot
          </AlertTitle>
          <AlertDescription className="text-green-700 dark:text-green-300 mt-2 text-sm sm:text-base leading-relaxed">
            Acesta este formularul oficial de vot (Buletin de Vot) pentru adunarea creditorilor CBC Creative Finance SRL
            programată pentru 16 iunie 2025. Toți creditorii cu creanțe verificate au dreptul să voteze asupra
            aspectelor prezentate în agenda întâlnirii.
          </AlertDescription>
        </Alert>

        {/* Voting Information */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <CheckSquare className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
              <span>Informații Vot</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Informații importante despre procesul de vot și cerințe
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Tip Document</h4>
                <p className="text-slate-700 text-sm">Buletin de Vot (Formular Oficial de Vot)</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Data Întâlnirii</h4>
                <p className="text-slate-700 text-sm">16 iunie 2025 la ora 10:00 (GMT+2)</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Eligibilitate Vot</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Doar creditorii cu creanțe verificate și acceptate sunt eligibili să voteze. Puterea dumneavoastră de
                vot este proporțională cu valoarea creanței verificate conform listei din tabelul final al creditorilor.
                Vă rugăm să vă asigurați că creanța a fost depusă și verificată corespunzător înainte de întâlnire.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Cum să Folosiți acest Formular</h4>
              <ul className="text-slate-600 text-xs sm:text-sm space-y-1 list-disc list-inside">
                <li>Descărcați formularul de vot folosind butonul de mai jos</li>
                <li>Completați toate câmpurile obligatorii inclusiv informațiile creditorului</li>
                <li>Marcați clar voturile pentru fiecare punct din agendă</li>
                <li>Semnați și datați formularul conform cerințelor</li>
                <li>Depuneți formularul prin email, la contact@cbc-finance.ro si cbc@insolventasm.ro, cu cel putin 24h inainte de intalnire.</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Metode de Vot</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Votarea se poate face doar prin email și trebuie depusă cu cel puțin 24 de ore înainte de întâlnire.
                Voturile trebuie trimise la ambele adrese email ale administratorului: <b>contact@cbc-finance.ro</b> și{" "}
                <b>cbc@insolventasm.ro</b>. Trebuie să includeți o copie a documentului de identitate al creditorului
                împreună cu formularul de vot completat.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
              <p className="text-sm text-slate-600">
                Descărcați formularul oficial de vot pentru adunarea creditorilor.
              </p>
              <Button variant="outline" size="sm" asChild>
                <a href="http://files.cbc-finance.ro/Buletin_de_Vot_CBC_Creative_Finance.docx" download>
                  <Download className="h-4 w-4 mr-2" />
                  Descarcă DOCX
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Voting Rights and Procedures */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 flex-shrink-0" />
              <span>Drepturi de Vot și Proceduri</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Înțelegerea drepturilor dumneavoastră și a procesului de vot
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Drepturile de Vot ale Creditorului</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Conform legii române de insolvență (Legea 85/2014), creditorii au dreptul să voteze asupra aspectelor
                importante care afectează procedurile de insolvență. Puterea dumneavoastră de vot este calculată pe baza
                valorii creanței verificate în raport cu totalul creanțelor verificate.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Punctele cheie ale sedintei din data de 16.06.2025</h4>
              <ul className="text-slate-600 text-xs sm:text-sm space-y-1 list-disc list-inside">
                <li>Prezentarea situatiei debitorului</li>
                <li>Alegerea unui nou membru in Comitetul Creditorilor</li>
                <li>Aprobarea inlocuirii administratorului judiciar Insolventa SM SPRL </li>
                <li>Aprobarea ofertei de servicii a DMC INSOLV IPURL Craiova pentru functia de Administrator Judiciar</li>
                <li>Aprobarea planului de reorganizare propus de administratorul special, impreuna cu creditorii Drilea Costel Mihai, Vladuca Ionut si Halasz Zoltan Tamas</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Cerințe de Cvorum</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Anumite decizii necesită praguri specifice de cvorum și majoritate conform legii. Administratorul va
                explica cerințele de vot pentru fiecare punct din agendă în timpul întâlnirii.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Vot prin Procură</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Dacă nu puteți participa personal la întâlnire, puteți autoriza o altă persoană să
                voteze în numele dumneavoastră. Contactați administratorul pentru cerințele specifice de procură și
                proceduri.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Document Preview Information */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Informații Document</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Detalii despre documentul formularului de vot
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Format Fișier</h4>
                <p className="text-slate-700 text-sm">Document Microsoft Word (.docx)</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Limbă</h4>
                <p className="text-slate-700 text-sm">Română (Limba Legală Oficială)</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Software Necesar</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Veți avea nevoie de Microsoft Word, LibreOffice sau alt procesor de text compatibil pentru a deschide și
                completa acest formular. Documentul poate fi completat electronic sau tipărit și completat manual.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Instrucțiuni de Completare</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Formularul conține câmpuri pentru informațiile creditorului, detaliile creanței și alegerile de vot
                pentru fiecare punct din agendă. Vă rugăm să completați toate secțiunile cu acuratețe și lizibil. Dacă
                completați manual, folosiți cerneală neagră sau albastră.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-medium text-yellow-800 text-sm">Notă Importantă</h5>
                  <p className="text-yellow-700 text-xs mt-1 leading-relaxed">
                    Acest formular de vot este un document Word editabil. Vă rugăm să vă asigurați că salvați formularul
                    completat și să îl aduceți la întâlnire sau să îl depuneți conform instrucțiunilor
                    administratorului.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support and Contact */}
        <Card className="mt-6 sm:mt-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Suport și Contact</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Aveți nevoie de ajutor cu procesul de vot sau documentația?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Suport Tehnic</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Dacă aveți probleme cu deschiderea sau completarea formularului de vot, sau aveți nevoie de asistență cu
                platforma de întâlnire online, vă rugăm să contactați biroul administratorului pentru suport tehnic.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Întrebări Juridice</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Pentru întrebări despre drepturile dumneavoastră de vot, statusul verificării creanței sau aspectele
                juridice ale procedurilor, contactați administratorul sau consultați-vă cu consilierul juridic.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Contact Administrator</h4>
              <p className="text-slate-600 text-xs sm:text-sm">
                Email:{" "}
                <a href="mailto:cbc@insolventasm.ro" className="text-blue-600 hover:text-blue-800 underline">
                  cbc@insolventasm.ro
                </a>
                <br />
                Telefon: +40 750 414 517
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
