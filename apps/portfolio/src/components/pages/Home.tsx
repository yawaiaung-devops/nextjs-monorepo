"use client";
import React from "react";
import Image from "next/image";
import { Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import useScrollTop from "@/hooks/useScrollTop";
import { cn } from "@/utils/cn";

const Home = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const textRef = React.useRef<HTMLSpanElement | null>(null);
  const top = useScrollTop();
  React.useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px";
  };

  return (
    <div
      className="w-full flex items-center relative justify-center flex-col min-h-[100vh]"
      ref={containerRef}
    >
      <div className="p-2 rounded-full bg-orange-400">
        <Image
          src="/ywa.jpg"
          alt="me"
          width={80}
          height={80}
          className="rounded-full size-20 object-cover object-top mx-auto block"
        />
      </div>
      <h5 className="font-bold font-header text-white text-4xl">YA WAI AUNG</h5>

      <div className="grid place-content-center p-4">
        <h1 className="max-w-4xl text-center text-base lg:text-xl text-gray-400 leading-snug tracking-wider">
          Crafting Seamless Experiences, {' '}
          <span className="relative">
            One Pixel
            <svg
              viewBox="0 0 286 73"
              fill="none"
              className="absolute -left-2 size-32 -right-2 -top-14 bottom-0 translate-y-1 hidden md:inline-block"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{
                  duration: 1.25,
                  ease: "easeInOut",
                }}
                d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                stroke="#FACC15"
                strokeWidth="4"
              />
            </svg>
          </span>{" "}
          at a Time
        </h1>
      </div>


      <div className="flex gap-4 py-3">
        <a
          href="https://www.linkedin.com/in/yawai-aung-2a455b255/"
          target="_blank"
          className="cursor-pointer border-2 p-2 border-orange-400 rounded-full text-gray-400"
        >
          <Linkedin />
        </a>
        <a
          href="mailto:yawaiaung.developer@gmail.com"
          target="_blank"
          className="cursor-pointer border-2 p-2 border-orange-400 rounded-full text-gray-400"
        >
          <Mail />
        </a>
        <a  href="tel:+66661294593" target="_blank" className="cursor-pointer border-2 p-2 border-orange-400 text-gray-400 rounded-full">
          <Phone />
        </a>
      </div>
      
      
      <div className="flex h-fit items-center absolute bottom-10 justify-center">
        <div className={cn("bg-zinc-800 absolute left-0 top-0 h-full w-0 duration-300 ease-in-out", {"w-full": top > 500})} />
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      
    </div>
  );
};

export default Home;
