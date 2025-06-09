"use client"

import { ArrowLeft, FileText, Scale, BookOpen, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LegalDocumentsPage() {
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
                  Legal Documents
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  CBC Creative Finance - Governing Laws and Regulations
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <Link href="/">
                <Button variant="outline" className="text-sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Main
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
              <span>Insolvency Legal Framework</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Legal foundation governing the insolvency proceedings for CBC Creative Finance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">About Law 85/2014</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Law No. 85/2014 regarding insolvency prevention and insolvency procedures is the primary legislation
                governing insolvency proceedings in Romania. This law establishes the legal framework for the
                administration of CBC Creative Finance's insolvency case, including creditor rights, administrator
                duties, and procedural requirements.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Key Provisions</h4>
              <ul className="text-slate-600 text-xs sm:text-sm space-y-1 list-disc list-inside">
                <li>Creditor claims submission and verification procedures</li>
                <li>Administrator appointment and responsibilities</li>
                <li>Asset recovery and distribution mechanisms</li>
                <li>Creditor meeting requirements and voting procedures</li>
                <li>Timeline and deadlines for various proceedings</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Relevance to CBC Creative Finance</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                All proceedings related to CBC Creative Finance's insolvency are conducted in accordance with this law.
                Understanding these provisions helps creditors and stakeholders know their rights and the procedures
                being followed.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Law Document */}
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
              <span>Law No. 85/2014</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Regarding insolvency prevention and insolvency procedures (Romanian: Legea nr. 85/2014 privind procedurile
              de prevenire a insolvenței și de insolvență)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-sm text-slate-600 mb-2">
                  This is the complete text of the Romanian insolvency law that governs all proceedings in this case.
                  The document is in Romanian as it is the official legal text.
                </p>
                <div className="flex items-center space-x-4 text-xs text-slate-500">
                  <span>Document Type: PDF</span>
                  <span>Language: Romanian</span>
                  <span>Official Legal Text</span>
                </div>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://cbc-finance.ro/documente-insolventa/legea-nr-85-2014-privind-procedurile-de-prevenire-a-insolventei-si-de-insolventa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </a>
              </Button>
            </div>

            {/* PDF Embed */}
            <div className="border rounded-lg overflow-hidden bg-white">
              <div className="h-[600px] sm:h-[800px] w-full">
                <iframe
                  src="https://cbc-finance.ro/documente-insolventa/legea-nr-85-2014-privind-procedurile-de-prevenire-a-insolventei-si-de-insolventa.pdf"
                  className="w-full h-full border-0"
                  title="Law No. 85/2014 - Insolvency Prevention and Insolvency Procedures"
                >
                  <div className="flex items-center justify-center h-full bg-slate-100">
                    <div className="text-center space-y-4">
                      <FileText className="h-12 w-12 text-slate-400 mx-auto" />
                      <div>
                        <p className="text-slate-600 mb-2">Unable to display PDF in browser</p>
                        <Button variant="outline" asChild>
                          <a
                            href="https://cbc-finance.ro/documente-insolventa/legea-nr-85-2014-privind-procedurile-de-prevenire-a-insolventei-si-de-insolventa.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </iframe>
              </div>
            </div>

            <div className="text-xs text-slate-500 text-center">
              If the PDF doesn't load properly, please use the download button above to view the document.
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card className="mt-6 sm:mt-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Additional Legal Resources</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Other relevant legal information and resources
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Court Information</h4>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Case Number: 1637/93/2023
                  <br />
                  Court: Tribunalul Ilfov, Secția Civilă
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Legal Assistance</h4>
                <p className="text-slate-600 text-xs sm:text-sm">
                  For legal questions regarding your rights under this law, consult with a qualified Romanian attorney
                  specializing in insolvency proceedings.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Important Notice</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                This document is provided for informational purposes. All legal proceedings are conducted according to
                Romanian law. If you need clarification on any legal matters, please contact the administrator or seek
                independent legal advice.
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
