"use client";

import { motion } from "framer-motion";
import { DownloadIcon, Linkedin, Mail, Phone } from "lucide-react";

import useScrollTop from "@/hooks/useScrollTop";
import { cn } from "@/utils/cn";
import HeroEditor from "../HeroEditor";
import { SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function Home() {
  const top = useScrollTop();

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(249,115,22,0.12),transparent_30%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_35%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-6 lg:px-12">
        <div className="grid w-full gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <div className="inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/80 px-5 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-lime-400" />

              <span className="text-sm text-zinc-300">
                Available for freelance & remote opportunities
              </span>
            </div> */}

            <h1 className="mt-8 text-6xl font-extrabold leading-none text-white md:text-7xl">
              Hi, I'm
            </h1>

            <h2 className="mt-2 text-5xl font-extrabold text-orange-500 md:text-7xl">
              Ya Wai Aung 👋
            </h2>

            <h3 className="mt-8 text-2xl font-bold text-zinc-200 md:text-3xl">
              Software Engineer
            </h3>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              I build fast, responsive, and user-focused web applications that
              transform ideas into scalable products.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              {/* <a
                href="#projects"
                className="rounded-xl bg-orange-500 px-8 py-4 font-medium text-white transition hover:bg-orange-600"
              >
                View Projects →
              </a> */}

              <a
                href="/resume.pdf"
                target="_blank"
                className="rounded-xl border flex items-center border-zinc-700 bg-zinc-900 px-8 py-4 font-medium text-zinc-300 transition hover:border-orange-500"
              >
                <DownloadIcon className="mr-4" />  Download Resume
              </a>
            </div>

            {/* Tech stack */}
            <div className="mt-12">
              <p className="mb-5 text-sm uppercase tracking-[0.25em] text-zinc-500">
                Technologies I work with
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  { label: "React", icon: <SiReact /> },
                  { label: "Next.js", icon: <SiNextdotjs /> },
                  { label: "TypeScript", icon: <SiTypescript /> },
                  { label: "Tailwind CSS", icon: <SiTailwindcss /> },
                  { label: "Node.js", icon: <SiNodedotjs /> },
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="
                    group flex items-center gap-2 rounded-full
                    border border-zinc-800
                    px-4 py-2 text-sm text-zinc-300
                
                    transition-all duration-300 ease-out
                
                    hover:-translate-y-0.5
                    hover:scale-105
                    hover:border-orange-500/60
                    hover:bg-orange-500/10
                    hover:text-white
                    hover:shadow-[0_0_20px_rgba(249,115,22,0.25)]
                  "
                  >
                    <span className="transition-colors duration-300 group-hover:text-orange-400">
                      {item.icon}
                    </span>

                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="mt-10 flex gap-4">
              <a
                href="https://www.linkedin.com/in/yawai-aung-2a455b255/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-zinc-700 p-3 text-zinc-400 transition hover:border-orange-500 hover:text-orange-500"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="mailto:yawaiaung.developer@gmail.com"
                className="rounded-full border border-zinc-700 p-3 text-zinc-400 transition hover:border-orange-500 hover:text-orange-500"
              >
                <Mail size={20} />
              </a>

              <a
                href="tel:+66661294593"
                className="rounded-full border border-zinc-700 p-3 text-zinc-400 transition hover:border-orange-500 hover:text-orange-500"
              >
                <Phone size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <HeroEditor />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <span
            className={cn(
              "text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500 transition-all duration-300",
              {
                "opacity-0": top > 20,
              },
            )}
          >
            Scroll Down
          </span>

          <div className="flex h-12 w-7 items-start justify-center rounded-full border border-zinc-600 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="h-2 w-2 rounded-full bg-orange-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
