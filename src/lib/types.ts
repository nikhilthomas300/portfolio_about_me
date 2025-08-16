/**
 * @description This type is used to define the params for a dynamic route in Next.js.
 */
export type pageParams = Promise<{ slug: string }>;

/**
 * @description This interface defines the structure of a project.
 */
export interface Project {
    slug: string;
    title: string;
    image: string;
    description: string;
    startDate: string;
    endDate: string;
    techStack: string[];
    role: string;
    company: string;
    impact: string[];
}

/**
 * @description This interface defines the structure (i.e., contents) of a blog post card.
 */
export interface BlogPostProps {
    slug: string;
    title: string;
    summary: string;
    date: string;
    tags?: string[];
}
