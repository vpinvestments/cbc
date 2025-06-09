"use client"

import { AlertTriangle, ArrowLeft, FileText, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function CreditorClaimsPage() {
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
                  Creditor Claims
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  CBC Creative Finance - Final Table of Creditors
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
        {/* Claims Deadline Notice */}
        <Alert className="mb-6 sm:mb-8 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
          <AlertTitle className="text-red-800 text-sm sm:text-base">Claims Submission Deadline Passed</AlertTitle>
          <AlertDescription className="text-red-700 mt-2 text-sm sm:text-base leading-relaxed">
            The deadline for filing creditor claims was <strong>January 3rd, 2025</strong>. No new claims can be
            submitted at this time. Please review the final table of creditors below for the complete list of accepted
            claims.
          </AlertDescription>
        </Alert>

        {/* Information Card */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
              <span>Claims Process Information</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Important dates and information regarding the creditor claims process
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Claims Deadline</h4>
                <p className="text-slate-700 text-sm">January 3rd, 2025</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Status</h4>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Closed
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">What happens next?</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The administrator has compiled the final table of creditors based on all claims submitted before the
                deadline. This table shows all accepted claims and their respective amounts. If you believe there is an
                error in the table, please contact the administrator immediately.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Contact Information</h4>
              <p className="text-slate-600 text-xs sm:text-sm">
                For questions about the claims process, contact the administrator at{" "}
                <a href="mailto:cbc@insolventasm.ro" className="text-blue-600 hover:text-blue-800 underline">
                  cbc@insolventasm.ro
                </a>{" "}
                or call +4 0745.245.844.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Final Table of Creditors */}
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
              <span>Final Table of Creditors</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Official document showing all accepted creditor claims and amounts
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-sm text-slate-600">
                  This document contains the complete and final list of all creditor claims that were submitted and
                  accepted by the administrator.
                </p>
              </div>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="http://files.cbc-finance.ro/TD-CBC-CREATIVE-FINANCE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Download PDF
                </a>
              </Button>
            </div>

            {/* PDF Embed */}
            <div className="border rounded-lg overflow-hidden bg-white">
              <div className="h-[600px] sm:h-[800px] w-full">
                <iframe
                  src="http://files.cbc-finance.ro/TD-CBC-CREATIVE-FINANCE.pdf"
                  className="w-full h-full border-0"
                  title="Final Table of Creditors - CBC Creative Finance"
                >
                  <div className="flex items-center justify-center h-full bg-slate-100">
                    <div className="text-center space-y-4">
                      <FileText className="h-12 w-12 text-slate-400 mx-auto" />
                      <div>
                        <p className="text-slate-600 mb-2">Unable to display PDF in browser</p>
                        <Button variant="outline" asChild>
                          <a
                            href="http://files.cbc-finance.ro/TD-CBC-CREATIVE-FINANCE.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FileText className="h-4 w-4 mr-2" />
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
