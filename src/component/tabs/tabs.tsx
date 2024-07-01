import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface TabsInterfaceProps {
    tabData: TabItem[];
}
interface TabItem {
    name: string;
    path: string;
}

const Tabs = ({ tabData }: TabsInterfaceProps) => {
    const path = useLocation().pathname;
    const navigate = useNavigate();
    return (
        <div className="flex gap-1 flex-wrap items-center">
            {tabData.length > 0 &&
                tabData?.map((item, index) => (
                    <div
                        className={`py-3 px-10 ${
                            path === item.path ? " bg-white" : "bg-slate-200"
                        }  rounded-sm cursor-pointer`}
                        key={index}
                        onClick={() => navigate(item.path)}
                    >
                        <p className=" text-lg text-black">{item.name}</p>
                    </div>
                ))}
        </div>
    );
};

export default Tabs;
