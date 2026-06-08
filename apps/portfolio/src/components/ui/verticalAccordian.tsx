import { MdOutlineSportsSoccer } from "react-icons/md";
import { FaBuilding, FaPalette, FaNewspaper } from "react-icons/fa";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "../../hooks/useWindowSize";
import { IconType } from "react-icons";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end start", "end end"],
  });
  return (
    <section className="max-w-5xl mx-auto pb-6">
      <div className="relative w-fit mb-4">
        <motion.h1
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.75 }}
          className="text-lg md:text-4xl font-black uppercase text-zinc-50"
        >
          Projects
        </motion.h1>
        <motion.div
          className="w-full h-1 bg-blue-600"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{
            duration: 0.5,
            delay: 0.75,
            ease: "easeInOut",
          }}
        />
      </div>
      {/* <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden"> */}
      <div
        ref={containerRef}
        style={{
          height: `${items.length * 90}vh`,
        }}
        className="relative mx-auto"
      >
        {items.map((item, index) => {
          const start = index / items.length;
          const end = (index + 1) / items.length;

          const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
          const y = useTransform(scrollYProgress, [start, end], [50, 0]);

          return (
            <motion.div
              key={item.id}
              style={{ opacity, y }}
              className="sticky top-24 mx-auto flex flex-col lg:flex-row gap-2 h-[90vh] lg:h-auto pb-4 bg-zinc-800"
            >
              <Image
                src={item.imgSrc}
                alt="project_img"
                width={360}
                height={280}
                className="rounded-xl w-[90%] lg:w-[320px] h-[280px] shadow-xl object-cover"
              />

              <div>
                <h6 className="text-white text-xl font-semibold mb-3">
                  {item.title}
                </h6>
                <div>
                  {item.features.map((feature) => (
                    <div className="text-gray-200 mb-1">
                      {" "}
                      <span className="inline-block size-2 mr-2 rounded-full bg-gray-200" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

interface PanelProps {
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  id: number;
  Icon: IconType;
  title: string;
  imgSrc: string;
  description: string;
  size: string;
}

const Panel = ({
  open,
  setOpen,
  id,
  Icon,
  title,
  imgSrc,
  description,
  size,
}: PanelProps) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="bg-zinc-600/15 hover:bg-zinc-600/70 transition-colors p-3 border-r-[1px] border-b-[1px] border-zinc-700 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
        onClick={() => setOpen(id)}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180 text-gray-400"
        >
          {title}
        </span>
        <span className="block lg:hidden text-base md:text-xl font-light text-gray-400">
          {title}
        </span>
        <div className="w-6 lg:w-full aspect-square bg-indigo-600 text-white grid place-items-center">
          <Icon />
        </div>
        <span className="w-4 h-4 bg-zinc-600 group-hover:bg-zinc-600 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-zinc-600/15 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: size,
              backgroundRepeat: "no-repeat",
              backgroundColor: "#d2d2d2",
            }}
            className="w-full h-full overflow-hidden relative bg-black flex items-end"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white"
            >
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 9,
    title: "Alpha E-commerce",
    Icon: FaBuilding,
    imgSrc: "/alpha.png",
    description:
      "Alpha E-commerce is a website that provides e-commerce services to clients. We offer a wide range of services including product catalog, payment processing, and etc.",
    features: [
      "Developed and managed an Admin Panel for an e-commerce platform, enabling seamless control over product listings, promotions, and marketing content.",
      "Product Management: Added, edited, and organized product catalogs, including creating bundled product packages with customizable details (price, stock, images).",
      "Implemented and optimized various promotion types, including flash sales, Buy X Get X offers, and discount campaigns with flexible rules (e.g., minimum/maximum purchase limits).",
      "Managed dynamic homepage sliders for the user app, adjusting display content, timing, and promotional banners to enhance user engagement.",
      "Created and enforced inventory and purchase rules, tracking stock levels and ensuring accurate purchase quantity limits for customers.",
      "Integrated an intuitive interface for efficient promotion scheduling, visibility management, and promotional content updates.",
    ],
  },
  {
    id: 8,
    title: "One Site Graphic Design",
    Icon: FaBuilding,
    imgSrc: "/onesite.png",
    description:
      "One Site Graphic Design is a website that provides graphic design services to clients. We offer a wide range of services including logo design, branding, and etc.",
    features: [
      "Pre-designed Templates: A library of customizable templates for various projects such as social media posts, presentations, posters, and business cards.",
      "Text and Font Options: Access to a variety of fonts, text styling tools, and alignment options to create polished designs.",
      "Image and Graphics Library: A collection of high-quality stock photos, illustrations, icons, and other design elements to enhance creativity.",
      "Customization Tools: Color palettes, resizing options, and photo filters to tailor designs according to the user’s needs.",
      "Collaboration Features: Multi-user access and real-time collaboration on design projects, making it ideal for teams or businesses.",
      "Export & Sharing Options: Easy export to various formats (PNG, JPEG, PDF, SVG) and direct sharing on social media or through links.",
      "Cloud-Based: Users can save their work to the cloud and access designs from anywhere, on any device.",
      "Dynamic localization for whole app",
    ],
  },
  {
    id: 5,
    title: "Kalasa Art Gallery",
    Icon: FaPalette,
    imgSrc: "/kalasa.png",
    size: "cover",
    description:
      "Kalasa Art Gallery is a website that provides art gallery services to clients. We offer a wide range of services including art exhibitions, art sales, and etc.",
    features: [
      "Online Gallery: High-resolution images of artworks with descriptions, artist bios, and pricing (if applicable).",
      "Exhibitions & Events: Information on current, upcoming, and past exhibitions, with RSVP and ticketing options.",
      "Virtual Tours: Interactive, 360-degree walkthroughs of the gallery space for remote visitors.",
      "Artist Profiles: Dedicated pages highlighting each artist's portfolio, biography, and statements.",
      "E-Commerce Integration: Ability to purchase or inquire about artworks online (for commercial galleries).",
      "News & Blog: Updates on art world trends, featured artists, and educational content.",
    ],
  },
  {
    id: 4,
    title: "World2MM",
    Icon: FaNewspaper,
    imgSrc: "/world2.png",
    description: "Talking to the world from Myanmar",
    size: "contain",
    features: [
      "Real-Time News Aggregation: Collects and curates news from diverse sources worldwide, ensuring timely and comprehensive coverage of global events.",
      "Multilingual Translations: Utilizes advanced translation technologies to provide news in multiple languages, making global news accessible to a wider audience.",
      "User-Centric Interface: Designed for easy navigation, allowing users to explore news by country, region, or topic of interest.",
      "Cross-Cultural Insights: Offers perspectives from various cultures and regions, fostering a deeper understanding of global issues.",
    ],
  },
  {
    id: 6,
    title: "Mex HR",
    Icon: FaBuilding,
    imgSrc: "/mex.webp",
    description:
      "Mex HR is a website that provides HR services to clients. We offers the payroll calculation, employee management, and etc.",
    size: "cover",
    features: [
      "Employee Management: Centralized database for employee records, onboarding, and role tracking.",
      "Payroll & Benefits: Automated payroll processing, tax calculations, and benefit administration.",
      "Time & Attendance: Tools for tracking employee hours, leave management, and scheduling.",
      "Recruitment Module: Applicant tracking system (ATS), resume parsing, and interview scheduling.",
      "Performance Management: Goal setting, feedback, performance reviews, and appraisal cycles.",
      "Self-Service Portal: Employees can update profiles, submit leave requests, and access documents.",
      "Analytics & Reporting: Real-time dashboards and customizable reports for data-driven decisions.",
      "Compliance & Security: Ensures adherence to labor laws and secures sensitive HR data.",
    ],
  },
];
