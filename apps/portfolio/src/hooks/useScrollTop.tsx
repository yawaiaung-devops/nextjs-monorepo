"use client";
import { useEffect, useState } from "react";

const useScrollTop = () => {
    const [top, setIsAtTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        // Check scroll position on mount
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return top;
};

export default useScrollTop;