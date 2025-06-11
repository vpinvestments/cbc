"use client"

import { ArrowLeft, FileText, Download, AlertCircle, Building, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function ReorganizationPlanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 dark:text-slate-100">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 shadow-sm border-b dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Building className="h-6 w-6 sm:h-8 sm:w-8 text-slate-700 dark:text-slate-300 flex-shrink-0" />
              <div className="min-w-0">
                <h1 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                  Plan de Reorganizare
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  CBC Creative Finance SRL - Conform Legii 85/2014
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
        {/* Introduction Notice */}
        <Alert className="mb-6 sm:mb-8 border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
          <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
          <AlertTitle className="text-blue-800 dark:text-blue-400 text-sm sm:text-base">
            Plan de Reorganizare Propus
          </AlertTitle>
          <AlertDescription className="text-blue-700 dark:text-blue-300 mt-2 text-sm sm:text-base leading-relaxed">
            Acest plan de reorganizare a fost propus de administratorul special, în colaborare cu creditorii Drilea
            Costel Mihai, Vlăducă Ionuț și Halasz Zoltan Tamas, conform prevederilor Legii 85/2014 privind procedurile
            de insolvență. Planul urmărește continuarea activității CBC Creative Finance SRL și plata creditorilor
            într-un mod organizat și eficient.
          </AlertDescription>
        </Alert>

        {/* Plan Overview */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
              <span>Prezentare Generală a Planului</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Obiectivele și structura planului de reorganizare
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Obiective Principale</h4>
              <ul className="text-slate-600 text-xs sm:text-sm space-y-1 list-disc list-inside">
                <li>Continuarea activității CBC Creative Finance SRL ca entitate viabilă pe piață</li>
                <li>Restructurarea operațională și financiară a companiei</li>
                <li>Achitarea datoriilor către creditori conform unui program de plată</li>
                <li>Valorificarea optimă a activelor și a potențialului de afaceri</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Durata Planului</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Planul de reorganizare este propus pentru o perioadă de 36 de luni, cu posibilitatea de prelungire
                conform prevederilor legale, dacă este necesar pentru îndeplinirea obiectivelor stabilite.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Categorii de Creanțe</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Conform Legii 85/2014, planul prevede tratamentul distinct pentru următoarele categorii de creanțe:
              </p>
              <ul className="text-slate-600 text-xs sm:text-sm space-y-1 list-disc list-inside">
                <li>Creanțe bugetare</li>
                <li>Creanțe chirografare</li>
              </ul>
            </div>

            <div className="space-y-4 mt-4">
              <p className="text-sm text-slate-600">Descărcați documentele planului de reorganizare:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://files.cbc-finance.ro/Plan_de_reorganizare_CBC_FINAL.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Plan de Reorganizare
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://files.cbc-finance.ro/Contract-VP-CBC-Signed.PDF"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Anexa la Plan
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Declarații
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Measures */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
              <span>Măsuri de Reorganizare</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Principalele măsuri prevăzute în planul de reorganizare
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Măsuri Operaționale</h4>
              <ul className="text-slate-600 text-xs sm:text-sm space-y-1 list-disc list-inside">
                <li>Restructurarea activității companiei și concentrarea pe segmentele profitabile</li>
                <li>Optimizarea structurii tehnice și a costurilor operaționale</li>
                <li>Implementarea unui sistem de management financiar și operațional eficient</li>
                <li>Dezvoltarea de noi produse și servicii adaptate cerințelor pieței</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Măsuri Financiare</h4>
              <ul className="text-slate-600 text-xs sm:text-sm space-y-1 list-disc list-inside">
                <li>Eșalonarea plăților către creditori conform programului de plată</li>
                <li>Atragerea de noi surse de finanțare pentru susținerea activității</li>
                <li>Valorificarea unor active care nu sunt esențiale pentru activitatea de bază</li>
                <li>Renegocierea contractelor cu furnizorii pentru obținerea unor condiții mai avantajoase</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Măsuri de Marketing și Vânzări</h4>
              <ul className="text-slate-600 text-xs sm:text-sm space-y-1 list-disc list-inside">
                <li>Implementarea unei strategii de marketing adaptată noilor condiții de piață</li>
                <li>Consolidarea relațiilor cu clienții existenți și atragerea de noi clienți</li>
                <li>Dezvoltarea canalelor de vânzare online și a prezenței digitale</li>
                <li>Parteneriate strategice pentru extinderea bazei de clienți</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Payment Program */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Program de Plată a Creanțelor</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Modalitatea de achitare a datoriilor către creditori
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Principii de Distribuire</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Programul de plată a creanțelor respectă ordinea de prioritate prevăzută de Legea 85/2014 și asigură un
                tratament corect și echitabil pentru toate categoriile de creditori. Distribuirile vor fi efectuate
                trimestrial, în funcție de fluxurile de numerar generate de activitatea companiei.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Grafic de Plăți</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Planul include un grafic detaliat de plăți pentru fiecare categorie de creditori, cu specificarea
                sumelor și a termenelor de plată. Acest grafic este disponibil în documentul complet al planului de
                reorganizare.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Surse de Finanțare</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Sursele de finanțare pentru implementarea planului de reorganizare și achitarea creanțelor includ:
              </p>
              <ul className="text-slate-600 text-xs sm:text-sm space-y-1 list-disc list-inside">
                <li>Veniturile generate din activitatea curentă a companiei</li>
                <li>Valorificarea unor active non-core</li>
                <li>Finanțări noi obținute de la parteneri sau instituții financiare</li>
                <li>Contribuții ale asociaților</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* PDF Embed */}
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Previzualizare Document</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Plan de Reorganizare CBC Creative Finance SRL
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* PDF Embed */}
            <div className="border rounded-lg overflow-hidden bg-white">
              <div className="h-[600px] sm:h-[800px] w-full">
                <iframe
                  src="https://files.cbc-finance.ro/Plan_de_reorganizare_CBC_FINAL.pdf"
                  className="w-full h-full border-0"
                  title="Plan de Reorganizare - CBC Creative Finance"
                >
                  <div className="flex items-center justify-center h-full bg-slate-100">
                    <div className="text-center space-y-4">
                      <FileText className="h-12 w-12 text-slate-400 mx-auto" />
                      <div>
                        <p className="text-slate-600 mb-2">Nu se poate afișa PDF în browser</p>
                        <Button variant="outline" asChild>
                          <a
                            href="https://files.cbc-finance.ro/Plan_de_reorganizare_CBC_FINAL.pdf"
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

        {/* Contact Information */}
        <Card className="mt-6 sm:mt-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Contact pentru Informații Suplimentare</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Pentru întrebări sau clarificări privind planul de reorganizare
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Administrator Special</h4>
              <p className="text-slate-600 text-xs sm:text-sm">
                Cristian F. Pricop
                <br />
                Email:{" "}
                <a href="mailto:c.pricop@cbc-finance.ro" className="text-blue-600 hover:text-blue-800 underline">
                  c.pricop@cbc-finance.ro
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Administrator Judiciar</h4>
              <p className="text-slate-600 text-xs sm:text-sm">
                Sergiu Ioan Ilis
                <br />
                Insolventa SM Satu Mare - Filiala Bucuresti
                <br />
                Email:{" "}
                <a href="mailto:cbc@insolventasm.ro" className="text-blue-600 hover:text-blue-800 underline">
                  cbc@insolventasm.ro
                </a>
                <br />
                Telefon: +4 0745.245.844
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
