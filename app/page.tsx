"use client"

import { AlertTriangle, Phone, Mail, FileText, Users, Building, ChevronDown, ChevronUp, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function CBCInsolvencyPage() {
  const [isTableExpanded, setIsTableExpanded] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const timelineData = [
    {
      documentName:
        "Raport lunar privind descrierea modalităţilor de îndeplinire a atribuţiilor şi justificarea cheltuielilor efectuate în condiţiile art.59 alin.(1) din Legea 85/2014",
      documentNumber: "254",
      date: "2025-01-27",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "5094 din 2025-03-11",
      procedureType: "",
    },
    {
      documentName: "Proces verbal al şedinţei adunării creditorilor",
      documentNumber: "537",
      date: "2025-03-06",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "5288 din 2025-03-12",
      procedureType: "",
    },
    {
      documentName: "Notificare privind deschiderea procedurii de insolvenţă prin procedură generală",
      documentNumber: "2385",
      date: "2024-10-18",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "19293 din 2024-10-30",
      procedureType: "deschiderea procedurii generale de insolvenţă",
    },
    {
      documentName:
        "Raport întocmit în conformitate cu prevederile art.58 alin.(1) şi art.92 alin.(1) din Legea 85/2014",
      documentNumber: "2624",
      date: "2024-11-19",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "21649 din 2024-12-02",
      procedureType: "",
    },
    {
      documentName: "Convocare adunare asociaţi/acţionari/membri",
      documentNumber: "870",
      date: "2025-04-15",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "8423 din 2025-04-16",
      procedureType: "",
    },
    {
      documentName: "Sentinţă civilă",
      documentNumber: "224",
      date: "2025-01-28",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "4589 din 2025-03-04",
      procedureType: "",
    },
    {
      documentName: "Comunicare sentinţă",
      documentNumber: "",
      date: "2025-02-11",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "4589 din 2025-03-04",
      procedureType: "",
    },
    {
      documentName:
        "Raport al administratorului judiciar privind propunerea de continuare a perioadei de observaţie din procedura generală a debitorului",
      documentNumber: "2496",
      date: "2024-11-05",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "21853 din 2024-12-04",
      procedureType: "",
    },
    {
      documentName:
        "Raport lunar privind descrierea modalităţilor de îndeplinire a atribuţiilor şi justificarea cheltuielilor efectuate în condiţiile art.59 alin.(1) din Legea 85/2014",
      documentNumber: "673",
      date: "2025-03-26",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "6928 din 2025-04-01",
      procedureType: "",
    },
    {
      documentName:
        "Raport lunar privind descrierea modalităţilor de îndeplinire a atribuţiilor şi justificarea cheltuielilor efectuate în condiţiile art.59 alin.(1) din Legea 85/2014",
      documentNumber: "2624",
      date: "2024-11-19",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "21864 din 2024-12-04",
      procedureType: "",
    },
    {
      documentName: "Încheiere privind majorarea termenelor de procedură",
      documentNumber: "",
      date: "2024-01-21",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "2301 din 2025-02-05",
      procedureType: "",
    },
    {
      documentName: "Comunicare",
      documentNumber: "",
      date: "2025-01-27",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "2301 din 2025-02-05",
      procedureType: "",
    },
    {
      documentName: "Convocare adunare creditori",
      documentNumber: "442",
      date: "2025-02-24",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "3887 din 2025-02-25",
      procedureType: "",
    },
    {
      documentName: "Notificare privind majorarea termenelor de procedură",
      documentNumber: "2618",
      date: "2024-11-26",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "21845 din 2024-12-04",
      procedureType: "",
    },
    {
      documentName: "Încheiere civilă",
      documentNumber: "23",
      date: "2025-01-28",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "6944 din 2025-04-01",
      procedureType: "",
    },
    {
      documentName: "Comunicare încheiere",
      documentNumber: "",
      date: "2025-03-07",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "6944 din 2025-04-01",
      procedureType: "",
    },
    {
      documentName: "Citaţie",
      documentNumber: "",
      date: "2025-01-09",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "407 din 2025-01-13",
      procedureType: "",
    },
    {
      documentName: "Cerere",
      documentNumber: "2827",
      date: "2024-12-17",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "407 din 2025-01-13",
      procedureType: "",
    },
    {
      documentName: "Tabel preliminar al creanţelor",
      documentNumber: "441",
      date: "2025-02-24",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "3846 din 2025-02-24",
      procedureType: "",
    },
    {
      documentName:
        "Raport lunar privind descrierea modalităţilor de îndeplinire a atribuţiilor şi justificarea cheltuielilor efectuate în condiţiile art.59 alin.(1) din Legea 85/2014",
      documentNumber: "977",
      date: "2025-04-30",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "10335 din 2025-05-09",
      procedureType: "",
    },
    {
      documentName: "Tabel preliminar rectificat / completat / actualizat",
      documentNumber: "703",
      date: "2025-03-28",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "7133 din 2025-04-03",
      procedureType: "",
    },
    {
      documentName: "Încheiere",
      documentNumber: "",
      date: "2024-10-01",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "21620 din 2024-12-02",
      procedureType: "",
    },
    {
      documentName: "Comunicare sentinţă",
      documentNumber: "",
      date: "2024-11-11",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "21620 din 2024-12-02",
      procedureType: "",
    },
    {
      documentName: "Încheiere de îndreptare eroare materială",
      documentNumber: "",
      date: "2024-11-14",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "21620 din 2024-12-02",
      procedureType: "",
    },
    {
      documentName: "Încheiere privind majorarea termenelor de procedură",
      documentNumber: "",
      date: "2024-11-14",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "21620 din 2024-12-02",
      procedureType: "",
    },
    {
      documentName: "Sentinţă de deschidere a procedurii insolvenţei în formă generală",
      documentNumber: "2070",
      date: "2024-10-16",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "21620 din 2024-12-02",
      procedureType: "deschiderea procedurii generale de insolvenţă",
    },
    {
      documentName:
        "Raport lunar privind descrierea modalităţilor de îndeplinire a atribuţiilor şi justificarea cheltuielilor efectuate în condiţiile art.59 alin.(1) din Legea 85/2014",
      documentNumber: "254",
      date: "2025-01-27",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "4843 din 2025-03-06",
      procedureType: "",
    },
    {
      documentName: "Convocare adunare creditori",
      documentNumber: "",
      date: "",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "13137 din 2025-06-06",
      procedureType: "",
    },
    {
      documentName: "Citaţie",
      documentNumber: "",
      date: "2025-05-15",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "11008 din 2025-05-16",
      procedureType: "",
    },
    {
      documentName: "Citaţie",
      documentNumber: "",
      date: "2025-05-27",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "12257 din 2025-05-29",
      procedureType: "",
    },
    {
      documentName: "Citaţie",
      documentNumber: "",
      date: "2025-05-28",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "12130 din 2025-05-28",
      procedureType: "",
    },
    {
      documentName:
        "Raport lunar privind descrierea modalităţilor de îndeplinire a atribuţiilor şi justificarea cheltuielilor efectuate în condiţiile art.59 alin.(1) din Legea 85/2014",
      documentNumber: "494",
      date: "2025-02-28",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "4866 din 2025-03-07",
      procedureType: "",
    },
    {
      documentName: "Citaţie",
      documentNumber: "",
      date: "2025-04-09",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "9321 din 2025-04-29",
      procedureType: "",
    },
    {
      documentName:
        "Raport lunar privind descrierea modalităţilor de îndeplinire a atribuţiilor şi justificarea cheltuielilor efectuate în condiţiile art.59 alin.(1) din Legea 85/2014",
      documentNumber: "977",
      date: "2025-04-30",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "10667 din 2025-05-13",
      procedureType: "",
    },
    {
      documentName: "Convocare adunare creditori",
      documentNumber: "442",
      date: "2025-02-24",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "3787 din 2025-02-24",
      procedureType: "",
    },
    {
      documentName:
        "Raport lunar privind descrierea modalităţilor de îndeplinire a atribuţiilor şi justificarea cheltuielilor efectuate în condiţiile art.59 alin.(1) din Legea 85/2014",
      documentNumber: "494",
      date: "2025-02-28",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "5118 din 2025-03-11",
      procedureType: "",
    },
    {
      documentName: "Convocare adunare asociaţi/acţionari/membri",
      documentNumber: "572",
      date: "2025-03-13",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "5740 din 2025-03-18",
      procedureType: "",
    },
    {
      documentName: "Tabel definitiv al creanţelor",
      documentNumber: "1010",
      date: "2025-05-08",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "10407 din 2025-05-12",
      procedureType: "",
    },
    {
      documentName: "Tabel definitiv al creanţelor",
      documentNumber: "1010",
      date: "2025-05-08",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "10720 din 2025-05-14",
      procedureType: "",
    },
    {
      documentName:
        "Raport lunar privind descrierea modalităţilor de îndeplinire a atribuţiilor şi justificarea cheltuielilor efectuate în condiţiile art.59 alin.(1) din Legea 85/2014",
      documentNumber: "977",
      date: "2025-04-30",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "10759 din 2025-05-14",
      procedureType: "",
    },
    {
      documentName: "Citaţie",
      documentNumber: "",
      date: "2023-05-23",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "11827 din 2025-05-26",
      procedureType: "",
    },
    {
      documentName: "Citaţie",
      documentNumber: "",
      date: "2024-11-11",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "21584 din 2024-11-29",
      procedureType: "",
    },
    {
      documentName: "Raport privind cauzele şi împrejurarile care au dus la apariţia stării de insolvenţă",
      documentNumber: "114",
      date: "2025-01-07",
      caseNumber: "1637/93/2023",
      court: "Tribunalul Ilfov",
      section: "Secția Civilă",
      bulletin: "4810 din 2025-03-06",
      procedureType: "",
    },
  ]

  // Filter data based on search term
  const filteredData = timelineData.filter(
    (item) =>
      item.documentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.date.includes(searchTerm) ||
      item.documentNumber.includes(searchTerm) ||
      item.bulletin.includes(searchTerm),
  )

  // Sort by date (newest first)
  const sortedData = [...filteredData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // Display only first 5 items if not expanded
  const displayData = isTableExpanded ? sortedData : sortedData.slice(0, 5)

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
                  <span className="text-xs sm:text-sm text-slate-600 font-medium">
                    Cryptocurrency Investment Company
                  </span>
                  <span className="mx-2 h-1 w-1 rounded-full bg-slate-400 hidden sm:block"></span>
                  <span className="text-xs text-slate-500 hidden sm:block">Founded 2019</span>
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
        {/* Quick Access Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
          <Button variant="outline" className="flex-1 h-12 sm:h-auto text-sm sm:text-base" asChild>
            <a href="https://doc.cab1864.eu/autentificare" target="_blank" rel="noopener noreferrer">
              <FileText className="h-4 w-4 mr-2 flex-shrink-0" />
              <span className="truncate">Court Case Access</span>
            </a>
          </Button>
          <Button variant="outline" className="flex-1 h-12 sm:h-auto text-sm sm:text-base" asChild>
            <a
              href="https://portal.just.ro/SitePages/cautare.aspx?k=1637%2F93%2F2023"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="h-4 w-4 mr-2 flex-shrink-0" />
              <span className="truncate">Public Court Data</span>
            </a>
          </Button>
          <Button variant="outline" className="flex-1 h-12 sm:h-auto text-sm sm:text-base" asChild>
            <a href="mailto:c.pricop@cbc-finance.ro">
              <Users className="h-4 w-4 mr-2 flex-shrink-0" />
              <span className="truncate">Special Administrator Contact</span>
            </a>
          </Button>
        </div>

        {/* Important Notice */}
        <Alert className="mb-6 sm:mb-8 border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800">
          <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
          <AlertTitle className="text-red-800 dark:text-red-400 text-sm sm:text-base">
            Important Notice - In Insolvency
          </AlertTitle>
          <AlertDescription className="text-red-700 dark:text-red-300 mt-2 text-sm sm:text-base leading-relaxed">
            CBC Creative Finance SRL has entered into insolvency as of 16.10.2024. All trading activities have been
            suspended. This website provides information for creditors, investors, and other stakeholders regarding the
            insolvency process.
          </AlertDescription>
        </Alert>

        {/* Next Creditors Meeting */}
        <Card className="mb-6 sm:mb-8 border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-blue-800 text-base sm:text-lg">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Next Creditors Meeting</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-blue-900 mb-2 text-sm sm:text-base">Date & Time</h4>
                <p className="text-blue-700 text-sm sm:text-base">16th of June 2025, 10AM GMT +2</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-900 mb-2 text-sm sm:text-base">Location</h4>
                <div className="text-blue-700 text-sm sm:text-base">
                  <p className="mb-1">Online via Microsoft Teams</p>
                  <a
                    href="https://teams.microsoft.com/l/meetup-join/19%3ameeting_N2FjYTVlNmEtOTBkZi00MWNjLWJiNDAtOGMxNDhlYzA4ZDBk%40thread.v2/0?context=%7b%22Tid%22%3a%223fc0ade6-caa5-4070-b5f1-5f50fc1d13aa%22%2c%22Oid%22%3a%22aaa03683-464a-4993-afb9-66cf9fa0556e%22%7d"
                    className="text-blue-600 hover:text-blue-800 underline text-xs sm:text-sm break-all"
                  >
                    Join Meeting Link
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-blue-900 mb-2 text-sm sm:text-base">How to Attend</h4>
              <p className="text-blue-700 text-sm leading-relaxed">
                Only virtual attendance is available. To attend, visit the link above at the meeting time.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-blue-900 text-sm sm:text-base">Meeting Documents</h4>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button variant="outline" className="flex-1 h-11 sm:h-auto text-xs sm:text-sm" asChild>
                  <a href="/bpi-report">
                    <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                    <span className="truncate">BPI Report</span>
                  </a>
                </Button>
                <Button variant="outline" className="flex-1 h-11 sm:h-auto text-xs sm:text-sm" asChild>
                  <a href="/meeting-agenda">
                    <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                    <span className="truncate">Meeting Agenda</span>
                  </a>
                </Button>
                <Button variant="outline" className="flex-1 h-11 sm:h-auto text-xs sm:text-sm" asChild>
                  <a href="/voting-documentation">
                    <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                    <span className="truncate">Voting Documentation</span>
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Card className="flex flex-col">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="flex items-center space-x-2 text-sm sm:text-base">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                <span>Reorganization Plan</span>
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                In accordance with Law 85/2014 on insolvency procedures
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow flex flex-col">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                The reorganization plan ensures the continuity of CBC Creative Finance SRL's business and payment to
                creditors in accordance with legal provisions.
              </p>
              <div className="pt-2">
                <Button variant="outline" className="w-full h-10 sm:h-auto text-xs sm:text-sm" asChild>
                  <a href="/reorganization-plan">
                    <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                    View Reorganization Plan
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="flex items-center space-x-2 text-sm sm:text-base">
                <Building className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                <span>For Creditors</span>
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                Creditor claims and administration process
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow flex flex-col">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                Creditors should submit their claims through the official administration process.
              </p>
              <div className="pt-2">
                <Button variant="outline" className="w-full h-10 sm:h-auto text-xs sm:text-sm" asChild>
                  <a href="/creditor-claims">
                    <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                    Final Creditors Table
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="sm:col-span-2 lg:col-span-1 flex flex-col">
            <CardHeader className="pb-3 sm:pb-6">
              <CardTitle className="flex items-center space-x-2 text-sm sm:text-base">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 flex-shrink-0" />
                <span>Legal Documents</span>
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">Official notices and court documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 flex-grow flex flex-col">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                Access official administration documents, court orders, and legal notices.
              </p>
              <div className="pt-2">
                <Button variant="outline" className="w-full h-10 sm:h-auto text-xs sm:text-sm" asChild>
                  <a href="/legal-documents">
                    <FileText className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                    View Documents
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Administrator Information */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Administrator Information</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              The following licensed insolvency practitioner has been appointed as administrator
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Appointed Administrator</h3>
                  <p className="text-slate-700 mb-1 text-sm sm:text-base">Sergiu Ioan Ilis</p>
                  <p className="text-slate-600 text-xs sm:text-sm mb-1">Insolventa SM Satu Mare - Filiala Bucuresti</p>
                  <p className="text-slate-600 text-xs sm:text-sm">License No: RSP RFO II 1005</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Contact Information</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-xs sm:text-sm">
                      <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="text-slate-700">+4 0745.245.844</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs sm:text-sm">
                      <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="text-slate-700 break-all">cbc@insolventasm.ro</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-6">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Special Administrator</h3>
                  <p className="text-slate-700 mb-1 text-sm sm:text-base">Cristian Pricop</p>
                  <p className="text-slate-600 text-xs sm:text-sm mb-1">CBC Creative Finance SRL</p>
                  <p className="text-slate-600 text-xs sm:text-sm">Appointed by Court Decision</p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Contact Information</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-xs sm:text-sm">
                      <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="text-slate-700">Not Applicable</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs sm:text-sm">
                      <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-slate-500 flex-shrink-0" />
                      <span className="text-slate-700 break-all">c.pricop@cbc-finance.ro</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline Table */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Administration Timeline</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Court documents and filings related to the insolvency procedure
            </CardDescription>
            <div className="mt-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
                <Input
                  type="search"
                  placeholder="Search documents..."
                  className="pl-9 text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-slate-700 uppercase bg-slate-100">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Document
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Number
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-4 py-3 hidden md:table-cell">
                      Bulletin
                    </th>
                    <th scope="col" className="px-4 py-3 hidden lg:table-cell">
                      Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {displayData.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b hover:bg-slate-50 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                    >
                      <td className="px-4 py-3">
                        <div className="font-medium text-slate-900 truncate max-w-[200px] sm:max-w-[300px]">
                          {item.documentName}
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">{item.documentNumber}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{new Date(item.date).toLocaleDateString("en-GB")}</td>
                      <td className="px-4 py-3 hidden md:table-cell whitespace-nowrap">{item.bulletin}</td>
                      <td className="px-4 py-3 hidden lg:table-cell">
                        {item.procedureType ? (
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {item.procedureType}
                          </span>
                        ) : (
                          <span className="text-slate-500 text-xs">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {sortedData.length > 5 && (
              <div className="p-4 text-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsTableExpanded(!isTableExpanded)}
                  className="text-xs"
                >
                  {isTableExpanded ? (
                    <>
                      <ChevronUp className="h-3 w-3 mr-1" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-3 w-3 mr-1" />
                      Show All ({sortedData.length}) Documents
                    </>
                  )}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Frequently Asked Questions</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Common questions about the administration process
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="font-medium text-slate-900 mb-2 text-sm sm:text-base">What does insolvency mean?</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Administration is a formal insolvency procedure designed to rescue the company as a going concern,
                achieve a better result for creditors, or realize property to make distributions to secured or
                preferential creditors.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-slate-900 mb-2 text-sm sm:text-base">What happens to my investment?</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The administrator will assess all assets and liabilities. Investors should register their claims through
                the official process. Recovery amounts will depend on the company's financial position.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-slate-900 mb-2 text-sm sm:text-base">How can I stay updated?</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Regular updates will be posted on this website. You can also contact the administrator directly using
                the contact information provided above.
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
            <p className="text-xs text-slate-400">Website maintained by the Appointed Special Administrator</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
