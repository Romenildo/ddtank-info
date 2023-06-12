'use client'
import './globals.css'

export const metadata = {
  title: 'DDtank info',
  description: 'Em desenvolvimento',
}
import { BrowserRouter } from 'react-router-dom';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-gray'>
      <BrowserRouter>
        <body className='w-[980px] flex flex-col m-auto'>{children}</body>
      </BrowserRouter>
      
    </html>
  )
}
