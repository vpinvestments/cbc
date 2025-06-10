"use client"

import { ArrowLeft, FileText, Download, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function BPIReportPage() {
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
                  BPI Report
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  CBC Creative Finance - Official Insolvency Publication
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
        {/* Legal Compliance Notice */}
        <Alert className="mb-6 sm:mb-8 border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800">
          <AlertCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
          <AlertTitle className="text-green-800 dark:text-green-400 text-sm sm:text-base">
            Legal Compliance Notice
          </AlertTitle>
          <AlertDescription className="text-green-700 dark:text-green-300 mt-2 text-sm sm:text-base leading-relaxed">
            CBC Creative Finance SRL has complied with the legal requirements under Law 85/2014, publishing the meeting
            agenda in the Buletinul Procedurilor de Insolvență (BPI). This publication serves as the official notice to
            all creditors regarding the upcoming creditors meeting scheduled for June 16th, 2025.
          </AlertDescription>
        </Alert>

        {/* Document Information */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
              <span>BPI Publication Details</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Official publication in the Romanian Insolvency Procedures Bulletin
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Publication Date</h4>
                <p className="text-slate-700 text-sm">June 6th, 2025</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">BPI Number</h4>
                <p className="text-slate-700 text-sm">13137</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Document Type</h4>
              <p className="text-slate-700 text-sm">Creditors Meeting Convocation</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Legal Significance</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                This publication serves as the official notice to all creditors as required by Romanian insolvency law.
                The publication in BPI ensures transparency in the insolvency process and provides all stakeholders with
                equal access to information regarding the proceedings.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
              <p className="text-sm text-slate-600">You can view and download the official BPI publication below.</p>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="http://files.cbc-finance.ro/bpi-ro-ro-na-2025-06-06-bpiroro-na-no13137.pdf"
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
              BPI Publication No. 13137 from June 6th, 2025
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* PDF Embed */}
            <div className="border rounded-lg overflow-hidden bg-white">
              <div className="h-[600px] sm:h-[800px] w-full">
                <iframe
                  src="https://files.cbc-finance.ro/bpi-ro-ro-na-2025-06-06-bpiroro-na-no13137.pdf"
                  className="w-full h-full border-0"
                  title="BPI Publication - CBC Creative Finance"
                >
                  <div className="flex items-center justify-center h-full bg-slate-100">
                    <div className="text-center space-y-4">
                      <FileText className="h-12 w-12 text-slate-400 mx-auto" />
                      <div>
                        <p className="text-slate-600 mb-2">Unable to display PDF in browser</p>
                        <Button variant="outline" asChild>
                          <a
                            href="https://files.cbc-finance.ro/bpi-ro-ro-na-2025-06-06-bpiroro-na-no13137.pdf"
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

        {/* Additional Information */}
        <Card className="mt-6 sm:mt-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Next Steps</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Information for creditors regarding the upcoming meeting
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Meeting Preparation</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Creditors are advised to review the meeting agenda and prepare any questions or concerns they wish to
                address. For voting purposes, please download and complete the voting form available on the main page.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Contact Information</h4>
              <p className="text-slate-600 text-xs sm:text-sm">
                For questions regarding this publication or the upcoming meeting, please contact the administrator at{" "}
                <a href="mailto:contact@cbc-finance.ro" className="text-blue-600 hover:text-blue-800 underline">
                  contact@cbc-finance.ro
                </a>{" "}
                or call +40 750 414 517.
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
