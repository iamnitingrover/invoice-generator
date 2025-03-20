import Link from "next/link"

export function AppFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="container flex flex-col sm:flex-row py-6 items-center justify-between px-4 md:px-6">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} InvoiceGen. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  )
}

