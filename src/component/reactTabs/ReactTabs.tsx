import React, { ReactNode, useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import "./custom.css";

interface ReactTabsProps {
    tabItems: ItemsData[];
}
interface ItemsData {
    label: string;
    icon?: string;
    component: ReactNode;
}
export const ReactTabs = ({ tabItems }: ReactTabsProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    return (
        <div className="card">
            <TabView
                onTabChange={(e) => setActiveIndex(e.index)}
                activeIndex={activeIndex}
            >
                {tabItems.map((item: ItemsData, index: number) => (
                    <TabPanel key={index} header={<span>{item.label}</span>}>
                        {activeIndex === index && item.component}
                    </TabPanel>
                ))}
            </TabView>
        </div>
    );
};
