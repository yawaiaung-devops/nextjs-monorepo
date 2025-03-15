import { MdOutlineSportsSoccer } from "react-icons/md";
import { FaBuilding ,FaPalette,FaNewspaper} from 'react-icons/fa'
import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "../../hooks/useWindowSize"
import { IconType } from "react-icons";

const VerticalAccordion = () => {
    const [open, setOpen] = useState(items[0].id);

    return (
        <section className="max-w-5xl mx-auto pb-6">
            <div className="relative w-fit mb-4">
                <motion.h1
                    initial={{ y: 48, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.75 }}
                    className="text-lg md:text-4xl font-black uppercase text-zinc-50"
                >
                    WORK
                </motion.h1>
                <motion.div className="w-full h-1 bg-blue-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{
                        duration: 0.5,
                        delay: 0.75,
                        ease: "easeInOut",
                    }} />
            </div>
            <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
                {items.map((item) => {
                    return (
                        <Panel
                            key={item.id}
                            open={open}
                            setOpen={setOpen}
                            id={item.id}
                            Icon={item.Icon}
                            title={item.title}
                            imgSrc={item.imgSrc}
                            description={item.description}
                            size={item.size}
                        />
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
    size: string
}

const Panel = ({
    open,
    setOpen,
    id,
    Icon,
    title,
    imgSrc,
    description,
    size
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
                <span className="block lg:hidden text-base md:text-xl font-light text-gray-400">{title}</span>
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
    // {
    //     id: 0,
    //     title: "One Site Graphic Design",
    //     Icon: FaBuilding,
    //     imgSrc:
    //         "/onesite.png",
    //     description: "",
    //     size: "contain"
    // },
    {
        id: 1,
        title: "Mex HR",
        Icon: FaBuilding,
        imgSrc:
            "/mex.webp",
        description: "",
        size: "cover"
    },
    {
        id: 2,
        title: "Kalasa Art Gallery",
        Icon: FaPalette,
        imgSrc: "/kalasa.png",
        size: "cover",
        description:"" },
    {
        id: 3,
        title: "World2MM",
        Icon: FaNewspaper,
        imgSrc: "world2.png", description: "Talking to the world from Myanmar",
        size: "contain"
    },
    {
        id: 4,
        title: "Central World",
        Icon: FaNewspaper,
        imgSrc: "cw.png",
        description: "",
        size: "cover"
    },
    {
        id: 5,
        title: "Ohio Myanmar",
        Icon: FaBuilding,
        imgSrc: "ohio.png",
        size: "cover",
        description:
            "Ohio Myanmar International's global perspective drives its dedication to fostering international communication and fostering global business collaborations. It embraces a non-local approach, emphasizing the importance of transcending geographical boundaries to create a meaningful impact on a global scale."
    },
    {
        id: 6,
        title: "M Group",
        Icon: MdOutlineSportsSoccer,
        imgSrc: "mgp.png",
        size: "cover",
        description: "M Group is a groups of company for presenting news about the sports and esports."
    },
];
