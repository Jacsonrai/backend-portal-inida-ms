import React, { ReactNode, useState } from "react";
import { Steps } from "primereact/steps";
import { MenuItem } from "primereact/menuitem";
import { useFormContext } from "react-hook-form";

interface stepperProps {
    stepperHeader: stepperHeaderItem[];
}
interface stepperHeaderItem {
    label: string;
    component: ReactNode;
}
export default function CustomStepper({ stepperHeader }: stepperProps) {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const { trigger } = useFormContext();
    const itemRenderer = (item: any, itemIndex: any) => {
        const isActiveItem = activeIndex === itemIndex;
        return (
            <div
                className={`inline-flex 
			${isActiveItem ? " bg-green-400" : " bg-slate-300"}
		     text-center  text-white h-[3rem] border relative flex-grow align-items-center justify-content-center align-items-center  cursor-pointer`}
                // onClick={() => setActiveIndex(itemIndex)}
            >
                <div className=" flex items-center">
                    <div className=" ml-8 relative bg-white text-black rounded-full h-[2rem] w-[2rem] flex items-center justify-center">
                        <p className="absolute inset-0 flex items-center justify-center">
                            {itemIndex + 1}
                        </p>
                    </div>

                    <p className=" text-xl p-2">{item.label}</p>
                </div>
                {itemIndex !== items.length - 1 && (
                    <div
                        style={{
                            position: "absolute",
                            right: -24,
                            top: -1,
                            zIndex: 1000,
                            borderTop: "24px solid transparent",
                            borderBottom: "24px solid transparent",
                            borderLeft: isActiveItem
                                ? "24px solid #4ade80"
                                : "24px solid #cbd5e1 ",
                        }}
                    />
                )}
            </div>
        );
    };

    const items: MenuItem[] = stepperHeader?.map((item, index) => ({
        label: item.label,
        template: (item) => itemRenderer(item, index),
    }));
    const filterComponent = stepperHeader?.filter(
        (_, index) => index === activeIndex
    );
    const handlePrevious = () => {
        if (activeIndex > 0) {
            setActiveIndex((prevIndex) => prevIndex - 1);
        }
    };

    const handleNext = async () => {
        const isValid = await trigger();

        if (isValid) {
            if (activeIndex < stepperHeader.length - 1) {
                setActiveIndex((prevIndex) => prevIndex + 1);
            }
        }
    };

    return (
        <div className="card w-full">
            <Steps
                model={items}
                activeIndex={activeIndex}
                readOnly={false}
                className="m-2 pt-4"
            />

            <div className=" px-4 py-5  w-full">
                {filterComponent[0].component}
            </div>
            <div className="flex px-4 mb-4 justify-end mt-4 gap-2">
                {activeIndex !== 0 && (
                    <button
                        onClick={handlePrevious}
                        className="px-4 py-2 bg-gray-300 rounded-md"
                    >
                        Previous
                    </button>
                )}
                {activeIndex === stepperHeader.length - 1 ? (
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                        Submit
                    </button>
                ) : (
                    <button
                        onClick={handleNext}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                        Next
                    </button>
                )}
            </div>

            <style>
                {`
                .p-steps .p-steps-item::before {
                    display: none !important;
                }
            `}
            </style>
        </div>
    );
}
