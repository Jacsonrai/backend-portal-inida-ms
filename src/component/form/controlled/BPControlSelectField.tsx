import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import BPSelectField from "../BPSelectField";

interface SelectOptionItem {
    value: number | string;
    label: string;
}

const BPControlSelectField = (props: {
    name: string;
    required?: boolean;
    placeholder?: string;
    label: string;
    options: SelectOptionItem[];
}) => {
    const { name, required, placeholder, options, label, ...rest } = props;
    const { control } = useFormContext();
    return (
        <Controller
            name={name}
            control={control}
            rules={{
                required: required ? `${name} filed is required` : false,
            }}
            render={({ field, fieldState: { error } }) => (
                <>
                    <BPSelectField
                        {...field}
                        {...rest}
                        style={{
                            border: `1px solid ${error ? "red" : "#e5e7eb"}`,
                        }}
                        placeholder={placeholder ?? ""}
                        label={required ? `${label} *` : label}
                        onChange={(
                            event: React.ChangeEvent<HTMLSelectElement>
                        ) => field.onChange(event.target.value)}
                        options={options}
                    />
                    {error && (
                        <p className=" text-red-500 capitalize text-xs">
                            {error.message}
                        </p>
                    )}
                </>
            )}
        />
    );
};

export default BPControlSelectField;
