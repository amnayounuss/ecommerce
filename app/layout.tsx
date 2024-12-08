import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import PromoBanner from './components/PromoBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'SHOP.CO',
    description: 'Your one-stop shop for stylish clothes',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <PromoBanner />
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}

