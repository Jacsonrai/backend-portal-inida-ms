import React, { useRef, useState, useEffect } from "react";
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
    const dropDownRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const [selectedName, setSelectedName] = useState<string>(
        options?.length > 0 ? options[0].name : ""
    );

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropDownRef.current &&
            !dropDownRef.current.contains(event.target as Node)
        ) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClick = (value: number | string, name: string) => {
        setSelectedName(name);
        getDropValue(value);
        setOpen(false);
    };

    return (
        <div ref={dropDownRef} className="relative">
            <div
                onClick={() => setOpen(!open)}
                className="w-fit gap-4 px-3 flex items-center py-2 text-black cursor-pointer"
            >
                <p className="text-xl">{selectedName}</p>
                {open ? (
                    <IoIosArrowUp className="text-lg" />
                ) : (
                    <IoIosArrowDown className="text-lg" />
                )}
            </div>
            {open && (
                <div className="absolute border shadow bg-white flex flex-col">
                    {options?.length > 0 &&
                        options.map((option, index) => (
                            <div
                                onClick={() =>
                                    handleClick(option.value, option.name)
                                }
                                key={index}
                                className="hover:cursor-pointer border-b py-2"
                            >
                                <p className="text-lg pr-24 pl-4">
                                    {option.name}
                                </p>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default ResuableDropDown;
