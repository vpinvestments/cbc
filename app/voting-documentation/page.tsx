"use client"

import { ArrowLeft, Download, AlertCircle, Vote, Users, CheckSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function VotingDocumentationPage() {
  const handleDownload = () => {
    // Simple direct link approach
    window.open("http://files.cbc-finance.ro/Buletin_de_Vot_CBC_Creative_Finance.docx", "_blank")
  }

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
                  Voting Documentation
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  CBC Creative Finance - Creditors Meeting Voting Forms
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
        {/* Voting Information Notice */}
        <Alert className="mb-6 sm:mb-8 border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800">
          <AlertCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
          <AlertTitle className="text-green-800 dark:text-green-400 text-sm sm:text-base">
            Official Voting Documentation
          </AlertTitle>
          <AlertDescription className="text-green-700 dark:text-green-300 mt-2 text-sm sm:text-base leading-relaxed">
            This is the official voting form (Buletin de Vot) for the creditors meeting of CBC Creative Finance SRL
            scheduled for June 16th, 2025. All creditors with verified claims are entitled to vote on the matters
            presented in the meeting agenda.
          </AlertDescription>
        </Alert>

        {/* Voting Information */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <CheckSquare className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
              <span>Voting Information</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Important information about the voting process and requirements
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Document Type</h4>
                <p className="text-slate-700 text-sm">Buletin de Vot (Official Voting Form)</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Meeting Date</h4>
                <p className="text-slate-700 text-sm">June 16th, 2025 at 10:00 AM (GMT+2)</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Voting Eligibility</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Only creditors with verified and accepted claims are eligible to vote. Your voting power is proportional
                to the value of your verified claim as listed in the final table of creditors. Please ensure your claim
                has been properly submitted and verified before the meeting.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">How to Use This Form</h4>
              <ul className="text-slate-600 text-xs sm:text-sm space-y-1 list-disc list-inside">
                <li>Download the voting form using the button below</li>
                <li>Complete all required fields including your creditor information</li>
                <li>Mark your votes clearly for each agenda item</li>
                <li>Sign and date the form as required</li>
                <li>Submit the form during the meeting or as instructed by the administrator</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Voting Methods</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Voting can only be conducted via email and must be submitted at least 24 hours before the meeting. Votes
                must be sent to both administrator email addresses: <b>contact@cbc-finance.ro</b> and{" "}
                <b>cbc@insolventasm.ro</b>. You must include a copy of your creditor identity document along with your
                completed voting form.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4">
              <p className="text-sm text-slate-600">Download the official voting form for the creditors meeting.</p>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://files.cbc-finance.ro/Buletin_de_Vot_CBC_Creative_Finance.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download DOCX
                </a>
              </Button>
            </div>
            <div className="mt-2 text-xs text-slate-500 text-center">
              If the download doesn't start automatically, right-click the button above and select "Save link as..." or
              "Save target as..."
            </div>
          </CardContent>
        </Card>

        {/* Voting Rights and Procedures */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 flex-shrink-0" />
              <span>Voting Rights & Procedures</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Understanding your rights and the voting process
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Creditor Voting Rights</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Under Romanian insolvency law (Law 85/2014), creditors have the right to vote on important matters
                affecting the insolvency proceedings. Your voting power is calculated based on the value of your
                verified claim relative to the total verified claims.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Typical Voting Matters</h4>
              <ul className="text-slate-600 text-xs sm:text-sm space-y-1 list-disc list-inside">
                <li>Presentation of the debtors situation as a result of requests received from creditors</li>
                <li>
                  Election of a new member of the Creditors Committee, considering the resignation request submitted by
                  NV AGROEXPERT SRL.
                </li>
                <li>Approval of the replacement of the insolvency administrator INSOLVENȚA SM SPRL</li>
                <li>
                  Approval of the service offer of DMC INSOLV IPURL Craiova for taking over the role of insolvency
                  administrator
                </li>
                <li>
                  Approval of the reorganization plan proposed by the special administrator, in collaboration with the
                  creditors Drilea Costel Mihai, Vlăducă Ionuț, and Halasz Zoltan Tamas.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Quorum Requirements</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Certain decisions require specific quorum and majority thresholds as defined by law. The administrator
                will explain the voting requirements for each agenda item during the meeting.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Proxy Voting</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                If you cannot attend the meeting personally, you are able to authorize another person to vote on your
                behalf. Contact the administrator for specific proxy requirements and procedures.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Document Preview Information */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Document Information</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Details about the voting form document</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">File Format</h4>
                <p className="text-slate-700 text-sm">Microsoft Word Document (.docx)</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-slate-900 text-sm sm:text-base">Language</h4>
                <p className="text-slate-700 text-sm">Romanian (Official Legal Language)</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Required Software</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                You will need Microsoft Word, LibreOffice, or another compatible word processor to open and complete
                this form. The document can be filled out electronically or printed and completed by hand.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Completion Instructions</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The form contains fields for your creditor information, claim details, and voting choices for each
                agenda item. Please complete all sections accurately and legibly. If completing by hand, use black or
                blue ink.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-medium text-yellow-800 text-sm">Important Note</h5>
                  <p className="text-yellow-700 text-xs mt-1 leading-relaxed">
                    This voting form is an editable Word document. Please ensure you save your completed form and bring
                    it to the meeting or submit it as instructed by the administrator.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support and Contact */}
        <Card className="mt-6 sm:mt-8">
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-base sm:text-lg">Support & Contact</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Need help with the voting process or documentation?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Technical Support</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                If you have trouble opening or completing the voting form, or need assistance with the online meeting
                platform, please contact the administrator's office for technical support.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Legal Questions</h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                For questions about your voting rights, claim verification status, or legal aspects of the proceedings,
                contact the administrator or consult with your legal counsel.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-slate-900 text-sm sm:text-base">Administrator Contact</h4>
              <p className="text-slate-600 text-xs sm:text-sm">
                Email:{" "}
                <a href="mailto:cbc@insolventasm.ro" className="text-blue-600 hover:text-blue-800 underline">
                  cbc@insolventasm.ro
                </a>
                <br />
                Phone: +40 750 414 517
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
