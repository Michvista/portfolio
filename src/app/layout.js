import './globals.css'

export const metadata = {
  title: 'Nifemi M',
  description: "Nifemi's Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
