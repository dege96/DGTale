  import './styles/globals.css'
import './styles/typography.css'
import './styles/font-system.css'

export const metadata = {
  title: 'De Geer Web Studios',
  description: 'Professionell webbdesign och utveckling',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
} 