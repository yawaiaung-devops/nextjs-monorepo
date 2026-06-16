"use client";

import {
  motion,
  MotionValue,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { items } from "../ui/verticalAccordian";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Project = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-80%"]);
  return (
    <section className="max-w-5xl mx-auto pb-6">
      <div className="w-fit mb-4">
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          // transition={{ ease: "easeInOut", duration: 0.75 }}
          className="text-lg md:text-4xl font-black uppercase text-zinc-50"
        >
          Recent Projects
        </motion.h1>

      </div>

      <motion.div
        className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {items.map((item) => {
          return (
            <ProjectSection
              key={item.id}
              item={item}
            />
          );
        })}
      </motion.div>
    </section>
  );
};

export default Project;

const ProjectSection = ({ item }: { item: (typeof items)[0] }) => {
  return (
    <motion.div
      variants={card}
      className="relative border h-full border-neutral-600 rounded-lg overflow-hidden">
      <Link href={item.href}>
        <Image
          src={item.imgSrc}
          alt={item.title}
          width={1450}
          height={768}
          className="w-[480px] h-[220px] object-cover object-top"

        />
        <div className="p-2 space-y-2">
          <p className="text-[#dadada]">{item.title}</p>
          <p className="text-[#dadada] text-sm">{item.description}</p>
        </div>
      </Link>
    </motion.div>
  );
};
