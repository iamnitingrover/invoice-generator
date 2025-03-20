import { redirect } from "next/navigation"

export default function Home() {
  // Redirect to the dashboard which will show our "under development" error
  redirect("/dashboard")

  // This code will never be reached
  return null
}

