"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, RefreshCcw } from "lucide-react"

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
                <AlertTriangle className="h-8 w-8 text-amber-600" />
              </div>
              <CardTitle className="text-2xl">InvoiceGen Coming Soon</CardTitle>
              <CardDescription>Our invoice generator is under development</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-4 flex items-center justify-center gap-2 rounded-md bg-amber-50 p-3 text-sm text-amber-800">
                <AlertTriangle className="h-4 w-4" />
                <span>Expected launch: June 2025</span>
              </div>
              <p className="text-sm text-muted-foreground">
                We&apos;re building a powerful invoice generator to help you create professional invoices quickly and easily.
                Our development team is working hard to bring you the best experience possible.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button onClick={() => reset()}>
                <RefreshCcw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
            </CardFooter>
          </Card>
        </div>
      </body>
    </html>
  )
}

