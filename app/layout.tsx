import Footer from './components/template/footer'
import Header from './components/template/header'
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
    <html lang="en" className='bg-gray'>
      <body className='w-[980px] flex flex-col m-auto'>
        <Header />
          {children}
        <Footer/>
        </body>
    </html>
  )
}
