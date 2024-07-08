import React from "react";

interface BPTextFiledProps extends React.HTMLAttributes<HTMLTextAreaElement> {
    name: string;
    placeholder?: string;
    label: string;
    type?: string;
}
const BPTextArea = ({
    name,
    label,
    placeholder,
    ...rest
}: BPTextFiledProps) => {
    return (
        <div className=" flex flex-col">
            <label>{label}</label>
            <textarea
                {...rest}
                name={name}
                placeholder={placeholder ?? ""}
                className=" border outline-none text-lg p-2 mt-1"
            />
        </div>
    );
};

export default BPTextArea;
