'use client'

import {useState} from 'react'
import Breadcrumbs from "@/components/Breadcrumbs";
import NavigationMenu from "@/components/NavigationMenu";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import MobileMenuToggle from "@/components/MobileMenuToggle";
import MobileMenu from "@/components/MobileMenu";

/**
 * Header component that serves as the top navigation bar for the portfolio.
 */
export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header
            id="headerPortfolio"
            className="sticky top-0 z-50 w-full bg-white/80 text-black dark:bg-zinc-900/80 dark:text-white transition-all
            border-b dark:border-zinc-800/50 border-zinc-200/50 backdrop-blur-xl shadow-lg"
        >
            <div
                className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 transition-all duration-300 flex items-center justify-between">

                {/* Left side: logo or current path */}
                <Breadcrumbs/>

                {/* Center: Segmented navigation - Hidden on mobile */}
                <NavigationMenu/>

                {/* Right side: Theme toggle + Mobile Menu Toggle */}
                <div className="flex items-center gap-4">
                    {/* Theme toggle button */}
                    <ThemeToggleButton/>

                    {/* Hamburger Mobile Menu toggle */}
                    <MobileMenuToggle
                        isOpen={mobileMenuOpen}
                        onToggleAction={() => setMobileMenuOpen(!mobileMenuOpen)}
                    />
                </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu isOpen={mobileMenuOpen} setIsOpenAction={setMobileMenuOpen}/>
        </header>
    )
}
