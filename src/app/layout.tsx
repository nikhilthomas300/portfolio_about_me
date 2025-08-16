import type {Metadata} from "next";
import "./globals.css";
import {Gabarito} from "next/font/google";
import React, {ReactNode, Suspense} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import LoadingAnimation from "@/components/LoadingAnimation";

const gabarito = Gabarito({
    variable: "--font-gabarito",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: 'Nikhil Thomas - UI Module Lead & Frontend Engineer',
    description: 'UI Module Lead and Frontend Engineer with 8+ years of experience in React.js, Angular, SharePoint SPFx, and Next.js. Specialized in enterprise applications and AI integration.',
    icons: {
        icon: '/icons/favicon.ico',
        shortcut: '/icons/favicon.ico',
        apple: '/icons/favicon.ico',
    },
    metadataBase: new URL('https://nikhil-thomas-portfolio.vercel.app'),
    openGraph: {
        title: 'Nikhil Thomas - UI Module Lead & Frontend Engineer',
        description: 'UI Module Lead and Frontend Engineer with 8+ years of experience in React.js, Angular, SharePoint SPFx, and Next.js. Specialized in enterprise applications and AI integration.',
        url: 'https://nikhil-thomas-portfolio.vercel.app',
        siteName: 'Nikhil Thomas Portfolio',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Next.js Developer Portfolio Template'
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Next.js Developer Portfolio Template',
        description: 'Developer-focused portfolio starter built with Next.js, TypeScript, TailwindCSS, and optimized for SEO.',
        images: ['/og-image.png']
    }
}

// This script initializes the theme based on user preference or saved settings
// And is used to avoid FOUC (Flash of Unstyled Content) on the initial load
const themeInitScript = `
(function() {
  try {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.classList.add(theme);
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch(e) {}
})();`

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en" className={`${gabarito.className} ${gabarito.variable}`} suppressHydrationWarning>
        <head>
            <script dangerouslySetInnerHTML={{__html: themeInitScript}}/>
            <title>My Developer Portfolio</title>
        </head>
        <body
            className={`antialiased flex flex-col min-h-screen transition-colors ${gabarito.className} ${gabarito.variable}`}
        >
        {/* Dot Background Layer */}
        <div
            className={`
            fixed inset-0 -z-10
            bg-[radial-gradient(circle,_#d1d5db_1px,_transparent_1px)]
            dark:bg-[radial-gradient(circle,_#3f3f46_1px,_transparent_1px)]
            bg-[length:30px_30px]
            [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]
          `}
        />

        <ScrollToTop />
        <Header/>
        <Suspense fallback={<LoadingAnimation />}>
            <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
        </Suspense>
        <Footer/>
        </body>
        </html>
    )
}
