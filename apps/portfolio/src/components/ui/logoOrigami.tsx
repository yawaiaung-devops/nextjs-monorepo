import React, {
  ReactElement,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  SiReact,
  SiGithub,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiExpress,
  SiNestjs,
  SiGithubactions,
  SiGitforwindows,
  SiJavascript,
  SiGraphql,
} from "react-icons/si";
import { twMerge } from "tailwind-merge";
import { cn } from "@/utils/cn";
import { shuffleArray } from "@/utils/shuffle";

export const LOGOS = [
  { logo: <SiGithub />, bg: "bg-orange-500" },
  { logo: <SiRedux />, bg: "bg-cyan-500" },
  { logo: <SiHtml5 />, bg: "bg-green-500" },
  { logo: <SiCss3 />, bg: "bg-yellow-500" },
  { logo: <SiNextdotjs />, bg: "bg-blue-500" },
  { logo: <SiReact />, bg: "bg-emerald-500" },
  { logo: <SiJavascript />, bg: "bg-orange-500" },
  { logo: <SiExpress />, bg: "bg-indigo-500" },
  { logo: <SiGithubactions />, bg: "bg-sky-500" },
  { logo: <SiNestjs />, bg: "bg-purple-500" },
  { logo: <SiGitforwindows />, bg: "bg-rose-500" },
  { logo: <SiGraphql />, bg: "bg-purple-500" },
];

export const LogoOrigami = ({ logos }: { logos: (typeof LOGOS)[0][] }) => {
  const LogoCom = useMemo(() => {
    const com = shuffleArray(logos).map((logo, idx) => (
      <LogoItem
        key={idx}
        className={cn("text-neutral-800 bg-orange-500", logo.bg)}
      >
        {logo.logo}
      </LogoItem>
    ));
    return com;
  }, []);
  return (
    <section className="flex flex-col items-center justify-center gap-12 px-4 md:flex-row">
      <LogoRolodex items={LogoCom} />
      {/* {LogoCom} */}
    </section>
  );
};

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex = ({ items }: { items: ReactElement[] }) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 h-44 w-60 shrink-0 rounded-xl border border-neutral-700 bg-neutral-800"
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
      />
    </div>
  );
};

const LogoItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};
