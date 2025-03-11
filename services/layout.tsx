import type React from "react"
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="container py-8">{children}</div>
}

