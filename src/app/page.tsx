"use client";

import blog from "@/data/blog";
import projects from "@/data/projects";
import work from "@/data/work";
import WorkItem from "@/components/WorkItem";
import ProjectTile from "@/components/ProjectTile";
import BlogPost from "@/components/BlogPost";
import ViewAllHeader from "@/components/ViewAllHeader";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaLanguage,
  FaUniversity,
  FaBuilding,
  FaTools,
} from "react-icons/fa";
import SkillsSection from "@/components/SkillsSection";

/**
 * Home component that serves as the main landing page for the portfolio.
 * This is accessed at the root URL ("/") of the application.
 */
export default function Home() {
  const getTimeSafe = (dateStr: string | undefined) => {
    const date = new Date(dateStr ?? "");
    return isNaN(date.getTime()) ? 0 : date.getTime();
  };

  return (
    <section className="px-4 mx-auto">
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mt-2"
      >
        {/* Introductory Text */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Hi, I&#39;m Nikhil Thomas 👋
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto text-left mb-6">
          I&#39;m a UI Module Lead and Frontend Engineer with over 8 years of
          experience in developing enterprise-grade applications. My expertise
          spans across React.js, Angular, SharePoint SPFx, and Next.js, with a
          focus on building robust UI architectures and integrating AI-powered
          features. Currently based in Bangalore, I work on creating innovative
          solutions for enterprise portals, AI chat interfaces, and digital
          identity systems.
        </p>

        {/* Skills Section */}
        <SkillsSection />
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold mb-2">Frontend</h3>
                        <p className="text-sm">React.js, Angular, Next.js</p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold mb-2">Enterprise</h3>
                        <p className="text-sm">SharePoint SPFx, PrimeNG</p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold mb-2">Mobile</h3>
                        <p className="text-sm">React Native, iOS</p>
                    </div>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold mb-2">AI/ML</h3>
                        <p className="text-sm">LLM, Bot Framework</p>
                    </div>
                </div> */}

        {/* Quick Facts Section */}
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Quick & Fun Facts</h2>

          <div className="flex flex-wrap justify-center gap-3 px-4 max-w-5xl mx-auto">
            {[
              { icon: FaTools, label: "Frontend Developer" },
              { icon: FaBuilding, label: "Mphasis Limited" },
              { icon: FaUniversity, label: "Software Eng Grad @ BITS-PILANI" },
              { icon: FaMapMarkerAlt, label: "Banglore, India" },
              { icon: FaLanguage, label: "EN" },
            ].map((fact, i) => {
              const Icon = fact.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800
                                    text-sm text-gray-700 dark:text-gray-300 rounded-full shadow-md transition"
                >
                  <Icon className="text-blue-500 dark:text-blue-400 text-base" />
                  <span>{fact.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Recent Work */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-16 justify-center gap-3 max-w-5xl mx-auto"
      >
        <ViewAllHeader
          title="Work Experience"
          pageUrl="/work"
          itemCount={work.length}
        />
        <div className="grid gap-4">
          {work.slice(0, 3).map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <WorkItem {...job} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-16 justify-center gap-3 max-w-5xl mx-auto"
      >
        <ViewAllHeader
          title="Recent Projects"
          pageUrl="/projects"
          itemCount={projects.length}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((proj) => (
            <motion.div
              key={proj.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <ProjectTile key={proj.slug} {...proj} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent Blog Posts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-16 mb-12 justify-center gap-3 max-w-5xl mx-auto"
      >
        <ViewAllHeader
          title="Recent Blog Posts"
          pageUrl="/blog"
          itemCount={blog.length}
        />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {blog
            .slice()
            .sort((a, b) => getTimeSafe(b.date) - getTimeSafe(a.date))
            .slice(0, 3)
            .map((post) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <BlogPost {...post} />
              </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  );
}
