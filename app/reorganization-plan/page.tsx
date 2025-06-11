"use client"

import { ArrowLeft, FileText, Download, AlertCircle, Building, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ReorganizationPlanPageEN() {
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
                  Reorganization Plan
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  CBC Creative Finance SRL - In accordance with Law 85/2014
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
        {/* Introduction Notice */}
        <Alert className="mb-6 sm:mb-8 border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
          <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
          <AlertTitle className="text-blue-800 dark:text-blue-400 text-sm sm:text-base">
            Proposed Reorganization Plan
          </AlertTitle>
          <AlertDescription className="text-blue-700 dark:text-blue-300 mt-2 text-sm sm:text-base leading-relaxed">
            This reorganization plan has been proposed by the special administrator, in collaboration with creditors
            Drilea Costel Mihai, Vlăducă Ionuț, and Halasz Zoltan Tamas, in accordance with the provisions of Law
            85/2014 on insolvency procedures. The plan aims to continue the activity of CBC Creative Finance SRL and pay
            creditors in an organized and efficient manner.
          </AlertDescription>
        </Alert>

        {/* Plan Overview */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
              <span>Plan Overview</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Objectives and structure of the reorganization plan
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Main Objectives</h4>
              <ul className="text-slate-600 text-xs sm:text-sm space-y-1 list-disc list-inside">
                <li>Continuation of CBC Creative Finance SRL's activity as a viable entity in the market</li>
                <li>Operational and financial restructuring of the company</li>
                <li>Payment of debts to creditors according to a payment schedule</li>
                <li>Optimal utilization of assets and business potential</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Plan Duration</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The reorganization plan is proposed for a period of 36 months, with the possibility of extension
                according to legal provisions, if necessary to achieve the established objectives.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Categories of Claims</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                According to Law 85/2014, the plan provides for distinct treatment for the following categories of
                claims:
              </p>
              <ul className="text-slate-600 text-xs sm:text-sm space-y-1 list-disc list-inside">
                <li>Budget claims</li>
                <li>Unsecured claims</li>
              </ul>
            </div>

            <div className="space-y-4 mt-4">
              <p className="text-sm text-slate-600">Download the reorganization plan documents:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://files.cbc-finance.ro/Plan_de_reorganizare_CBC_FINAL.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Reorganization Plan
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://files.cbc-finance.ro/Anexa_Plan_reorganizare_CBC.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Appendix to Plan
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://files.cbc-finance.ro/Declaratii_Plan_reorganizare_CBC.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Declarations
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
              <span>Reorganization Measures</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Main measures provided in the reorganization plan
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Operational Measures</h4>
              <ul className="text-slate-600 text-xs sm:text-sm space-y-1 list-disc list-inside">
                <li>Restructuring the company's activity and focusing on profitable segments</li>
                <li>Optimizing personnel structure and operational costs</li>
                <li>Implementing an efficient financial and operational management system</li>
                <li>Developing new products and services adapted to market requirements</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Financial Measures</h4>
              <ul className="text-slate-600 text-xs sm:text-sm space-y-1 list-disc list-inside">
                <li>Rescheduling payments to creditors according to the payment program</li>
                <li>Attracting new sources of financing to support the activity</li>
                <li>Disposing of assets that are not essential to the core business</li>
                <li>Renegotiating contracts with suppliers to obtain more advantageous conditions</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Marketing and Sales Measures</h4>
              <ul className="text-slate-600 text-xs sm:text-sm space-y-1 list-disc list-inside">
                <li>Implementing a marketing strategy adapted to new market conditions</li>
                <li>Strengthening relationships with existing clients and attracting new clients</li>
                <li>Developing online sales channels and digital presence</li>
                <li>Strategic partnerships to expand the client base</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Payment Program */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Claims Payment Program</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Method of paying debts to creditors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Distribution Principles</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The claims payment program respects the priority order provided by Law 85/2014 and ensures fair and
                equitable treatment for all categories of creditors. Distributions will be made quarterly, depending on
                the cash flows generated by the company's activity.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Payment Schedule</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The plan includes a detailed payment schedule for each category of creditors, specifying amounts and
                payment deadlines. This schedule is available in the complete reorganization plan document.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Funding Sources</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Funding sources for implementing the reorganization plan and paying claims include:
              </p>
              <ul className="text-slate-600 text-xs sm:text-sm space-y-1 list-disc list-inside">
                <li>Revenue generated from the company's current activity</li>
                <li>Disposal of non-core assets</li>
                <li>New financing obtained from partners or financial institutions</li>
                <li>Shareholder contributions</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* PDF Embed */}
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Document Preview</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              CBC Creative Finance SRL Reorganization Plan
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* PDF Embed */}
            <div className="border rounded-lg overflow-hidden bg-white">
              <div className="h-[600px] sm:h-[800px] w-full">
                <iframe
                  src="https://files.cbc-finance.ro/Plan_de_reorganizare_CBC_FINAL.pdf"
                  className="w-full h-full border-0"
                  title="Reorganization Plan - CBC Creative Finance"
                >
                  <div className="flex items-center justify-center h-full bg-slate-100">
                    <div className="text-center space-y-4">
                      <FileText className="h-12 w-12 text-slate-400 mx-auto" />
                      <div>
                        <p className="text-slate-600 mb-2">Unable to display PDF in browser</p>
                        <Button variant="outline" asChild>
                          <a
                            href="https://files.cbc-finance.ro/Plan_de_reorganizare_CBC_FINAL.pdf"
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

        {/* Contact Information */}
        <Card className="mt-6 sm:mt-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Contact for Additional Information</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              For questions or clarifications regarding the reorganization plan
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Special Administrator</h4>
              <p className="text-slate-600 text-xs sm:text-sm">
                Cristian Pricop
                <br />
                Email:{" "}
                <a href="mailto:c.pricop@cbc-finance.ro" className="text-blue-600 hover:text-blue-800 underline">
                  c.pricop@cbc-finance.ro
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Judicial Administrator</h4>
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
                Phone: +4 0745.245.844
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
