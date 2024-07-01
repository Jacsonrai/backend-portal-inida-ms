import React from "react";
import { IoSearchOutline } from "react-icons/io5";

interface SearchBarProps {
    name?: string;
    placeholder: string;
    onChange: any;
}
const SearchBar = ({ name, placeholder, onChange }: SearchBarProps) => {
    return (
        <div className=" flex items-center border-2 rounded-md border-red-950 w-full">
            <input
                className="outline-none min-h-10 p-2 text-xl w-full"
                name={name}
                placeholder={placeholder ?? "Search..."}
                onChange={onChange}
            />
            <div className="icon w-fit text-2xl bg-orange-800 p-3">
                <IoSearchOutline color="white" />
            </div>
        </div>
    );
};

export default SearchBar;
