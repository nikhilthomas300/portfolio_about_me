"use client";

interface SkillBoxProps {
  title: string;
  skills: string[];
  icon: string;
}

function SkillBox({ title, skills, icon }: SkillBoxProps) {
  return (
    <div
      className="relative bg-white dark:bg-zinc-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300
            border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 group"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl text-blue-600 dark:text-blue-400">
          {icon}
        </span>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="space-y-2">
        {skills.map((skill) => (
          <div
            key={skill}
            className="text-gray-600 dark:text-gray-300 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-75"></span>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React.js", "Angular", "Next.js", "TypeScript", "HTML & CSS"],
    },
    {
      title: "Enterprise",
      icon: "🏢",
      skills: [
        "Enterprise apps development",
        "SharePoint SPFx",
        "Viva Connections",
        "Microsoft 365",
        "Azure DevOps",
      ],
    },
    {
      title: "Mobile",
      icon: "📱",
      skills: [
        "React Native",
        "iOS",
        "Cross-platform development",
        "Deployment on App Stores",
      ],
    },
    {
      title: "AI/ML",
      icon: "🤖",
      skills: ["LLM", "Bot Framework", "Vercel AI Toolkit"],
    },
  ];

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {skillCategories.map((category) => (
          <SkillBox
            key={category.title}
            title={category.title}
            skills={category.skills}
            icon={category.icon}
          />
        ))}
      </div>
    </div>
  );
}
