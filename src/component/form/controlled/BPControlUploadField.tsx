import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import BPUploadField from "../BPUploadField";
const BPControlUploadField = (props: {
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
                    <BPUploadField {...field} {...rest} />
                </>
            )}
        />
    );
};

export default BPControlUploadField;
