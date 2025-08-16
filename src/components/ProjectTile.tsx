'use client'

import Link from 'next/link'
import Image from 'next/image'
import {motion} from 'framer-motion'

interface ProjectTileProps {
    slug: string
    title: string
    image: string
    description?: string
    techStack?: string[]
    startDate?: string
    endDate?: string
    role?: string
    company?: string
    impact?: string[]
}

/**
 * A functional component that renders a project tile with a link, image, and title.
 *
 * @param {Object} props - The prop object for the component, containing slug, title, and image.
 */
export default function ProjectTile({
    slug, 
    title, 
    image, 
    description,
    role,
    company,
    techStack
}: ProjectTileProps) {
    return (
        <Link href={`/projects/${slug}`} className="block group">
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{opacity: {duration: 0.8}}}
                whileHover={{
                    y: -5,
                    transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                    }
                }}
                className="bg-white dark:bg-zinc-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all
                text-black dark:text-white hover:border-blue-500 border-1"
            >
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        loading="lazy"
                        className="object-cover"
                    />
                    <div
                        className="absolute inset-0 bg-zinc-900/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-lg font-semibold">Explore {title} ➔</span>
                    </div>
                </div>

                {/* Project Information */}
                <div className="p-4 space-y-3">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    {company && role && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {role} at {company}
                        </p>
                    )}
                    {description && (
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                            {description}
                        </p>
                    )}
                    {techStack && techStack.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2">
                            {techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </motion.div>
        </Link>
    );
}
