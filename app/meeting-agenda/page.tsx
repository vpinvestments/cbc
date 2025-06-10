"use client"

import { ArrowLeft, FileText, Download, AlertCircle, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function MeetingAgendaPage() {
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
                  Meeting Agenda
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  CBC Creative Finance - Creditors Meeting June 16th, 2025
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
        {/* Meeting Information Notice */}
        <Alert className="mb-6 sm:mb-8 border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
          <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
          <AlertTitle className="text-blue-800 dark:text-blue-400 text-sm sm:text-base">
            Official Meeting Convocation
          </AlertTitle>
          <AlertDescription className="text-blue-700 dark:text-blue-300 mt-2 text-sm sm:text-base leading-relaxed">
            This is the official convocation document for the creditors meeting of CBC Creative Finance SRL scheduled
            for June 16th, 2025. All creditors are formally invited to attend and participate in the proceedings as
            outlined in the agenda below.
          </AlertDescription>
        </Alert>

        {/* Meeting Details */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
              <span>Meeting Information</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Details about the upcoming creditors meeting
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Date & Time</h4>
                <p className="text-slate-700 text-sm">June 16th, 2025 at 10:00 AM (GMT+2)</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Meeting Format</h4>
                <p className="text-slate-700 text-sm">Online via Microsoft Teams</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Document Type</h4>
              <p className="text-slate-700 text-sm">Convocator Adunare Creditori (Creditors Meeting Convocation)</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Purpose</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                This meeting has been convened to discuss important matters related to the insolvency proceedings,
                including asset evaluation, creditor claims verification, and decisions regarding the future direction
                of the company's administration.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Attendance Requirements</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                All creditors are encouraged to attend. For voting purposes, creditors must have their claims properly
                registered and verified. Please ensure you have completed the necessary documentation prior to the
                meeting.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
              <p className="text-sm text-slate-600">Download the complete meeting agenda and convocation document.</p>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://files.cbc-finance.ro/Convocator_CBC_Creative_Finance_diacritice.ENGLISH-Romanian.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* PDF Embed */}
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Document Preview</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Convocator CBC Creative Finance - June 16th, 2025
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* PDF Embed */}
            <div className="border rounded-lg overflow-hidden bg-white">
              <div className="h-[600px] sm:h-[800px] w-full">
                <iframe
                  src="https://files.cbc-finance.ro/Convocator_CBC_Creative_Finance_diacritice.ENGLISH-Romanian.pdf"
                  className="w-full h-full border-0"
                  title="Meeting Agenda - CBC Creative Finance"
                >
                  <div className="flex items-center justify-center h-full bg-slate-100">
                    <div className="text-center space-y-4">
                      <FileText className="h-12 w-12 text-slate-400 mx-auto" />
                      <div>
                        <p className="text-slate-600 mb-2">Unable to display PDF in browser</p>
                        <Button variant="outline" asChild>
                          <a
                            href="https://files.cbc-finance.ro/Convocator_CBC_Creative_Finance_diacritice.ENGLISH-Romanian.pdf"
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

            <div className="text-xs text-slate-500 text-center mt-4">
              If the PDF doesn't load properly, please use the download button above to view the document.
            </div>
          </CardContent>
        </Card>

        {/* Preparation Guidelines */}
        <Card className="mt-6 sm:mt-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Meeting Preparation</CardTitle>
            <CardDescription className="text-xs sm:text-sm">How to prepare for the creditors meeting</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Before the Meeting</h4>
              <ul className="text-slate-600 text-xs sm:text-sm space-y-1 list-disc list-inside">
                <li>Review the complete agenda document thoroughly</li>
                <li>Ensure your creditor claim has been properly submitted and verified</li>
                <li>Download and complete the voting form if you plan to vote on any matters</li>
                <li>Prepare any questions or concerns you wish to raise during the meeting</li>
                <li>Test your Microsoft Teams connection and audio/video setup</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Required Documents</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Please have your creditor identification documents ready and ensure you have access to any supporting
                documentation for your claims. If you are representing another creditor, ensure you have proper
                authorization documentation.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Contact for Questions</h4>
              <p className="text-slate-600 text-xs sm:text-sm">
                For questions regarding the meeting agenda or procedures, please contact the administrator at{" "}
                <a href="mailto:cbc@insolventasm.ro" className="text-blue-600 hover:text-blue-800 underline">
                  cbc@insolventasm.ro
                </a>{" "}
                or call +4 0745.245.844. You can also contact the special administrator at{" "}
                <a href="mailto:contact@cbc-finance.ro" className="text-blue-600 hover:text-blue-800 underline">
                  contact@cbc-finance.ro
                </a>
                .
              </p>
            </div>

            <div className="flex justify-center mt-4">
              <Button asChild>
                <Link href="/">Return to Main Page</Link>
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
            <p className="text-xs text-slate-400">Website maintained by the Appointed Special Administrator</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
