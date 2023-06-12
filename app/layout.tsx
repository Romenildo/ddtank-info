import './globals.css'

export const metadata = {
  title: 'DDtank info',
  description: 'Em desenvolvimento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
