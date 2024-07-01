import React, { useMemo, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Checkbox } from "primereact/checkbox";

interface DropDownOption {
    name: string;
    value: number;
}
interface DropDownProps {
    options: DropDownOption[];
    label: string;
    checkEnable?: boolean;
}
const DropDown = ({ options, label, checkEnable }: DropDownProps) => {
    const [open, setOpen] = useState(true);
    const [lastIndex, setLastIndex] = useState(10);
    const memorizedData: DropDownOption[] = useMemo(() => {
        return options.slice(0, lastIndex);
    }, [options, lastIndex]);
    const handleShowMore = () => {
        setLastIndex((prevIndex) => prevIndex + 10);
    };

    const handleShowLess = () => {
        setLastIndex(4);
    };

    return (
        <div>
            <div
                onClick={() => setOpen(!open)}
                className=" border flex items-center justify-between pr-3 pl-5 py-4 bg-gray-200  text-black cursor-pointer"
            >
                <p className=" text-xl">{label}</p>
                {open ? (
                    <IoIosArrowUp className=" text-lg" />
                ) : (
                    <IoIosArrowDown className=" text-lg" />
                )}
            </div>
            <div
                className={`py-2 px-4 flex-col gap-3 ${
                    open ? "flex" : "hidden"
                }`}
            >
                {memorizedData?.length > 0 ? (
                    <>
                        {memorizedData.map((data, index) => (
                            <React.Fragment key={index}>
                                <div className=" flex items-center gap-5 justify-between">
                                    <h4 className=" text-xl grow">
                                        {data.name}
                                    </h4>
                                    <div className="  bg-black rounded-3xl text-white text-lg px-4">
                                        <p>{data.value}</p>
                                    </div>
                                    <div
                                        className={
                                            checkEnable ? "block" : "hidden"
                                        }
                                    >
                                        <Checkbox
                                            inputId="ingredient1"
                                            name="pizza"
                                            value="Cheese"
                                            onChange={() =>
                                                console.log("hello")
                                            }
                                            checked={true}
                                        />
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}

                        {options.length <= 10 ? (
                            <></>
                        ) : lastIndex < options.length ? (
                            <div
                                className="mt-5 mb-10 cursor-pointer"
                                onClick={handleShowMore}
                            >
                                <p className="text-xl">Show more</p>
                            </div>
                        ) : (
                            <div
                                className="mt-5 mb-10 cursor-pointer"
                                onClick={handleShowLess}
                            >
                                <p className="text-xl">Show less</p>
                            </div>
                        )}
                    </>
                ) : (
                    <p className=" text-center text-red-500">Do Data found</p>
                )}
            </div>
        </div>
    );
};

export default DropDown;
