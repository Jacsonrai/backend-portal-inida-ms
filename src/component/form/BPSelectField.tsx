import React from "react";

interface BPSelectPops extends React.HTMLAttributes<HTMLSelectElement> {
    name: string;
    placeholder?: string;
    label: string;
    options: SelectOptionItem[];
}
interface SelectOptionItem {
    value: number | string;
    label: string;
}
const BPSelectField = ({
    name,
    label,
    placeholder,
    options,
    defaultValue,
    ...rest
}: BPSelectPops) => {
    return (
        <div className="flex flex-col">
            <label>{label}</label>
            <select
                {...rest}
                className="border outline-none text-lg py-2 mt-1 bg-transparent"
                name={name}
                defaultValue={defaultValue ?? ""}
            >
                <option value="" disabled hidden>
                    {placeholder ?? "Select an option"}
                </option>
                {options?.map((option) => (
                    <option value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default BPSelectField;
