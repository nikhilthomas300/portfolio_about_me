import packageJson from '../../package.json';

export const personalInfo = {
    name: 'Nikhil Thomas',
    title: 'UI Module Lead & Frontend Engineer',
    location: 'Bangalore, India',
    email: 'nikhilthomas300@outlook.com',
    phone: '+91-9995804***',
    workMode: 'Remote',
    languages: ['English (Fluent)', 'Hindi (Fluent)', 'Malayalam (Fluent)', 'Kannada (Basic)', 'Tamil (Basic)'],
    education: [
        {
            degree: 'M.Tech',
            institution: 'BITS Pilani',
            year: '2015 - 2019'
        },
        {
            degree: 'B.Sc.',
            institution: 'Don Bosco College (Calicut University)',
            year: '2012 - 2015'
        }
    ],
    summary: 'Highly accomplished UI Module Lead and Frontend Engineer with 8+ years of experience in developing and delivering enterprise-grade applications. Expertise in React.js, Angular 13+, SharePoint SPFx, and Next.js, combined with proficiency in React Native for cross-platform mobile development. Proven ability to design robust UI architectures, optimize performance, and integrate AI-powered features, including Large Language Model (LLM) chat UIs.'
}

/**
 * Array of navigation items for the website (i.e. paths/pages to navigate to).
 */
export const navItems = [
    {name: 'Home', path: '/'},
    {name: 'Work', path: '/work'},
    {name: 'Projects', path: '/projects'},
    {name: 'Blog', path: '/blog'}
]

/**
 * Temporary mapping for tech stack icons.
 */
export const skills = {
    frontend: ['React.js', 'Angular 13+', 'SharePoint SPFx', 'Next.js', 'React Native'],
    ui: ['HTML5', 'CSS3', 'SCSS', 'PrimeNG', 'ShadCN UI', 'Responsive Design', 'Web Content Accessibility Guidelines (WCAG)'],
    javascript: ['JavaScript (ES6+)', 'TypeScript', 'Redux'],
    api: ['REST APIs', 'Axios', 'OAuth2', 'JSON Web Tokens (JWT)', 'Microsoft Bot Framework'],
    ai: ['Large Language Models (LLM)', 'GitHub Copilot'],
    devops: ['Azure DevOps', 'CI/CD Pipelines', 'Vercel', 'Git', 'GitHub'],
    tools: ['VS Code', 'Xcode', 'JIRA', 'Clerk', 'Supabase', 'Jest', 'React Testing Library'],
    expertise: ['UI Architecture', 'Enterprise Portal Development', 'Admin Dashboards', 'Chat UI Development', 'Digital Identity Systems', 'Debugging', 'Performance Optimization']
}

export const techStackMap: Record<string, string> = {
    // Frontend Frameworks & Libraries
    'React.js': 'react',
    'Angular': 'angular',
    'Next.js': 'nextjs',
    'TypeScript': 'typescript',
    'JavaScript': 'javascript',
    'HTML5': 'html',
    'CSS3': 'css',
    'SCSS': 'sass',
    
    // UI Libraries
    'SharePoint SPFx': 'microsoft',
    'PrimeNG': 'angular',
    'ShadCN UI': 'react',
    'React Native': 'react',
    
    // Authentication & APIs
    'OAuth2': 'auth',
    'REST APIs': 'api',
    'JSON Web Tokens': 'auth',
    'AES-256': 'security',
    
    // Microsoft & Cloud
    'Microsoft Bot Framework': 'microsoft',
    'Azure DevOps': 'azure',
    'Direct Line': 'microsoft',
    'Viva Connections': 'microsoft',
    
    // AI & Tools
    'Vercel AI SDK': 'vercel',
    'GitHub Copilot': 'github',
    'Large Language Models': 'ai',
    'LLM': 'ai',
    
    // Version Control & DevOps
    'Git': 'git',
    'GitHub': 'github',
    'CI/CD Pipelines': 'devops',
    
    // Security & Data
    'Security Protocols': 'security',
    'QR Code Generation': 'qr',
    
    // Testing & Tools
    'Jest': 'jest',
    'React Testing Library': 'testing',
    'VS Code': 'vscode',
    'Xcode': 'xcode'
}

/**
 * Version of the application from package.json.
 */
export const appVersion = packageJson.version
