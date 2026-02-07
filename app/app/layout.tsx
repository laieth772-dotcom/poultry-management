import './globals.css'

export const metadata = {
  title: 'إدارة الدواجن',
  description: 'نظام متكامل لإدارة المزارع والمفقسات',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
