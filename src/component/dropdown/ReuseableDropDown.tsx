import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface DropDownOption {
    name: string;
    value: number | string;
}
interface DropDownProps {
    options: DropDownOption[];
    checkEnable?: boolean;
    getDropValue: (T: number | string) => void;
}
const ResuableDropDown = ({
    options,
    checkEnable,
    getDropValue,
}: DropDownProps) => {
    const [open, setOpen] = useState(true);
    const [selectedName, setSelectedName] = useState<string>(
        options?.length > 0 ? options[0].name : ""
    );
    const handleCLick = (value: number | string, name: string) => {
        setSelectedName(name);
        getDropValue(value);
        setOpen(false);
    };

    return (
        <div className=" relative">
            <div
                onClick={() => setOpen(!open)}
                className="w-fit gap-4 px-3 flex items-center py-2  text-black cursor-pointer"
            >
                <p className=" text-xl">{selectedName}</p>
                {open ? (
                    <IoIosArrowUp className=" text-lg" />
                ) : (
                    <IoIosArrowDown className=" text-lg" />
                )}
            </div>
            {open && (
                <div className=" absolute border shadow bg-white flex flex-col">
                    {options?.length > 0 &&
                        options?.map((option, index) => (
                            <div
                                onClick={() =>
                                    handleCLick(option?.value, option?.name)
                                }
                                key={index}
                                className=" hover:cursor-pointer border-b py-2"
                            >
                                <p className=" text-lg pr-24 pl-4">
                                    {option?.name}
                                </p>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default ResuableDropDown;
