import React, { useEffect } from "react";
interface pageTitleProps {
    title: string;
}
const usePageTitle = ({ title }: pageTitleProps) => {
    useEffect(() => {
        document.title = title
            ? `${title} | data portal backend`
            : "i am title";
    }, []);
};

export default usePageTitle;
