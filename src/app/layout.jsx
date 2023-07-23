import '@/styles/globals.css'

import { Rubik } from 'next/font/google'
import SideBar from '@/components/SideBar'

const inter = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'ICEES 2023',
  description: '9th International Conference on Electrical Energy Systems - 2023 organised by SSN College of Engineering in association with Renewable Energy Lab Prince Sultan University, Riyadh, Saudi Arabia.',
  keywords:['ICEES', 'IEEE', 'SSN', 'SSN College of Engineering', 'Conference', 'Sultan university']
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} text-white text-center`}>
        <SideBar />
        {children}
      </body>
    </html>
  )
}
