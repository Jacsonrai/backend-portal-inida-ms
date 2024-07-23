import React, { useEffect, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import BPUploadField from "../BPUploadField";

interface ResponseTypes<T> {
    message: string;
    success: boolean;
    data: T;
}
interface FileTypes {
    file_url_path: string;
    name: string;
    type: string;
}
interface fileType {
    name: string;
    type: string;
    preview: string;
}

interface BPControlUploadFieldProps {
    name: string;
    required?: boolean;
    placeholder?: string;
    label: string;
}

const BPControlUploadField: React.FC<BPControlUploadFieldProps> = (props) => {
    const { name, required, label, ...rest } = props;
    const { control, setValue } = useFormContext();

    const inputRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState<fileType | null>(null);

    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleFileChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLoading(true);
        const file = event.target.files?.[0];
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            const res = await fetch("http://localhost:5001/upload", {
                method: "POST",
                body: formData,
            });
            const responseJson: ResponseTypes<FileTypes> = await res.json();
            if (!responseJson.success) {
                setLoading(false);
                setFile(null);
            } else {
                setLoading(false);
                const uploadedFile = {
                    preview: responseJson.data.file_url_path,
                    type: responseJson.data.type,
                    name: responseJson.data.name,
                };
                setFile(uploadedFile);
                setValue(name, responseJson.data.file_url_path);
            }
        }
    };

    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: required ? `${name} field is required` : false }}
            render={({ field, fieldState: { error } }) => (
                <>
                    <BPUploadField
                        {...field}
                        {...rest}
                        refs={inputRef}
                        handleClick={handleClick}
                        onChange={handleFileChange}
                        loading={loading}
                        file={file}
                    />
                    <p className="text-red-600 text-xs">{error?.message}</p>
                </>
            )}
        />
    );
};

export default BPControlUploadField;
