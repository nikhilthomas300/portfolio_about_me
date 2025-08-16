'use client'

export default function LoadingAnimation() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-50/80 dark:bg-black/80 backdrop-blur-sm">
            <div className="relative flex">
                <div className="h-12 w-12 rounded-full border-t-2 border-b-2 border-gray-900 dark:border-white animate-spin"></div>
                <div className="absolute inset-0 h-12 w-12 rounded-full border-t-2 border-b-2 border-gray-900 dark:border-white animate-spin" style={{ animationDelay: '-0.2s' }}></div>
            </div>
        </div>
    )
}
