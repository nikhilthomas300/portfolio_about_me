'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useRef, useEffect} from 'react'
import {navItems} from '@/lib/constants'

/**
 * MobileMenu component that displays a collapsible menu for mobile devices.
 */
export default function MobileMenu({isOpen, setIsOpenAction}: {
    isOpen: boolean,
    setIsOpenAction: (v: boolean) => void
}) {
    const pathname = usePathname()
    const menuRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpenAction(false)
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen, setIsOpenAction])

    return (
        <div
            ref={menuRef}
            className={`md:hidden px-4 overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
            <ul className="flex flex-col gap-2 mt-2">
                {navItems.map(({name, path}) => (
                    <li key={name}>
                        <Link
                            href={path}
                            className={`block w-full px-4 py-3 rounded-xl text-sm font-medium transition-all hover:translate-x-1 ${
                                pathname === path
                                    ? 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400'
                                    : 'text-black dark:text-white hover:bg-gray-800'
                            }`}
                            onClick={() => setIsOpenAction(false)}
                        >
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
