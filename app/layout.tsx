import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CircaShift — Sleep Schedule Optimizer',
  description: 'Personalized sleep schedules for shift workers, jet lag recovery, and circadian rhythm optimization with light therapy timing.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2b6054a2-07f2-4f28-a663-21ae86fce4df"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
