import { motion } from "framer-motion";
import {
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const projects = [
    {
      title: "Banking Dashboard",
      role: "UI/UX + Frontend",
      year: "2024",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "AI Design Tools",
      role: "Product Designer",
      year: "2024",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "E-commerce Redesign",
      role: "UI/UX Lead",
      year: "2024",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Crypto Wallet App",
      role: "Full Stack + Design",
      year: "2025",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "SaaS Analytics Platform",
      role: "Product + Frontend",
      year: "2025",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Mobile Banking App",
      role: "UI/UX + React Native",
      year: "2024",
      color: "from-rose-500 to-pink-500",
    },
  ];

  return (
    <>
      <div
        className={`min-h-screen ${
          darkMode ? "dark bg-black text-white" : "bg-white text-black"
        } transition-all duration-500`}
      >
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-6 right-6 z-50 p-3 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-black hover:scale-110 transition"
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>

        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-60" />

          <div className="relative z-10 text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
            >
              YO I'M [YOUR NAME]
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-2xl md:text-4xl mb-8 text-gray-300"
            >
              UI/UX Engineer • Product Designer • Frontend Dev • Graphics God
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-6 justify-center"
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition"
              >
                SEE MY WORK
              </a>
              <a
                href="mailto:you@dope.com"
                className="px-8 py-4 border-2 border-white rounded-full hover:bg-white hover:text-black transition"
              >
                HIT ME UP
              </a>
            </motion.div>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10"
          >
            <ChevronDown size={40} />
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20 px-6">
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500">
            Selected Work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-600 transition-all duration-500"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-20 transition`}
                />
                <div className="p-8">
                  <div className="bg-gray-800 h-48 rounded-xl mb-6 group-hover:scale-105 transition" />
                  <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-400 mb-2">{p.role}</p>
                  <p className="text-sm text-gray-500">{p.year}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition">
                  <ExternalLink size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-20 px-6 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-10">
              I design & build shit that doesn't suck
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              stuff about you — you make pixels dance, turn ideas into products,
              ship fast, break things, fix them better. You live in Figma, VS
              Code, and caffeine.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-20 text-center">
          <div className="flex justify-center gap-8 mb-8">
            <a href="https://github.com" className="hover:scale-125 transition">
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com"
              className="hover:scale-125 transition"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="mailto:you@dope.com"
              className="hover:scale-125 transition"
            >
              <Mail size={32} />
            </a>
          </div>
          <p className="text-gray-500">
            © 2025 [YOUR NAME]. Built with blood, sweat, and React.
          </p>
        </footer>
      </div>
    </>
  );
}
