import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import BPTextFiled from "../BPTextFiled";

const BPControlTextFiled = (props: {
    name: string;
    required?: boolean;
    placeholder?: string;
    label: string;
}) => {
    const { name, required, placeholder, label, ...rest } = props;
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
                    <BPTextFiled
                        {...field}
                        {...rest}
                        placeholder={placeholder ?? ""}
                        label={required ? `${label} *` : label}
                        style={{
                            border: `1px solid ${error ? "red" : "#e5e7eb"}`,
                        }}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => field.onChange(event.target.value)}
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

export default BPControlTextFiled;
