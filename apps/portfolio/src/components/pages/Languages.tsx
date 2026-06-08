"use client";
import React from "react";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { Text } from "rsuite";

const MYSKILLS = [
  "TypeScript",
  "React",
  "Jest",
  "NextJS",
  "ESLint",
  "Framer Motion",
  "NodeJS",
  "Docker",
  "Gitlab",
  "Monitoring",
  "AWS",
  "TailwindCSS",
  "MaterialUI",
  "ExpressJS",
  "Shadcn",
  "CI/CD",
  "linux",
  "Shad CN",
  "Ant Design",
  "Git",
  "NestJS",
  "GraphQL"
];
const Languages = () => (
  <div className="flex flex-col justify-center items-center p-0 lg:px-4 py-12">
    <Text align="center" size={32} weight="semibold" className="pb-3">
      Technologies Stack
    </Text>
    <TagCloud
      options={(w: Window & typeof globalThis): TagCloudOptions => ({
        radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
        maxSpeed: "fast",
      })}
      // onClick={(tag: string, ev: MouseEvent) => alert(tag)}
      onClickOptions={{ passive: true }}
    >
      {MYSKILLS}
    </TagCloud>
  </div>
);

export default Languages;
