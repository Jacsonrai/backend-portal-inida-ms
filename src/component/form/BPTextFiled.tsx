import React from "react";

interface BPTextFiledProps extends React.HTMLAttributes<HTMLInputElement> {
    name: string;
    placeholder: string;
    label: string;
    type?: string;
}
const BPTextFiled = ({
    name,
    label,
    placeholder,
    type,
    ...rest
}: BPTextFiledProps) => {
    return (
        <div className=" flex flex-col">
            <label>{label}</label>
            <input
                {...rest}
                type={type ?? "text"}
                name={name}
                placeholder={placeholder}
                className=" border outline-none text-lg p-2 mt-1"
            />
        </div>
    );
};

export default BPTextFiled;
