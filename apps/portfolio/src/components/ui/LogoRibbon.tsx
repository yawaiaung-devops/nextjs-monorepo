import React from "react";
import { motion } from "framer-motion";
import { LOGOS } from "./logoOrigami";
import { cn } from "@/utils/cn";

const LogoRibbon = () => {
  return (
    <div className="flex relative overflow-hidden py-2">
      <motion.div
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        initial={{ translateX: 0 }}
        animate={{ translateX: "50%" }}
        className="flex flex-none gap-16 pr-16"
      >
        {[...new Array(3)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {LOGOS.map(({ logo, bg }, idx) => (
              <div
                key={idx}
                className={cn(
                  "size-12 flex justify-center items-center rounded-lg text-2xl",
                  bg
                )}
              >
                {logo}
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoRibbon;
