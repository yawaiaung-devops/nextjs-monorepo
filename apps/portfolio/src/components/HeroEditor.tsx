"use client";

import { motion } from "framer-motion";

const code = [
  "const Developer = () => {",
  "  return (",
  '    <section className="hero">',
  "      <h1>",
  "        Building digital products that matter",
  "      </h1>",
  "      <p>",
  "        Clean code. Modern design. Better experiences.",
  "      </p>",
  "    </section>",
  "  );",
  "};",
];

export default function HeroEditor() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-3xl overflow-hidden rounded-[32px] border border-orange-500/30 bg-[#0d1117]/90 shadow-[0_0_60px_rgba(249,115,22,0.15)] backdrop-blur-xl"
    >
      {/* Top glow */}
      <div className="absolute inset-x-0 top-0 h-40 bg-orange-500/10 blur-3xl" />

      {/* Window header */}
      <div className="flex h-14 items-center gap-3 border-b border-white/10 px-6">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <div className="ml-4 flex items-center gap-2 text-sm text-zinc-400">
          <span className="text-sky-400">⚛</span>
          <span>portfolio.tsx</span>
        </div>
      </div>

      {/* Code panel */}
      <div className="border-r border-white/10 p-6">
        <div className="space-y-3 font-mono text-sm">
          {code.map((line, index) => (
            <div key={index} className="flex gap-4">
              <span className="w-5 select-none text-right text-zinc-600">
                {index + 1}
              </span>

              <span className="whitespace-pre-wrap text-zinc-300">
                {highlight(line)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

const highlight = (line: string) => {
  return line.split(/(const|return|className)/g).map((part, index) => {
    if (part === "const") {
      return (
        <span key={index} className="text-pink-400">
          {part}
        </span>
      );
    }

    if (part === "return") {
      return (
        <span key={index} className="text-pink-400">
          {part}
        </span>
      );
    }

    if (part === "className") {
      return (
        <span key={index} className="text-violet-400">
          {part}
        </span>
      );
    }

    return <span key={index}>{part}</span>;
  });
};
