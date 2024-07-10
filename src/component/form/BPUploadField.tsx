import React, { useRef } from "react";
import { IoMdCloudUpload } from "react-icons/io";

interface BPUploadFiledProps extends React.HTMLAttributes<HTMLInputElement> {
    name: string;
    placeholder?: string;
    label?: string;
    type?: string;
    accpet?: string;
}
const BPUploadField = ({
    name,
    label,
    type,
    accpet,
    ...rest
}: BPUploadFiledProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = () => {
        inputRef.current?.click();
    };
    const handleFileChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        if (file) {
            const formData = new FormData();
            formData.append("file", file);
            const res = await fetch("http://localhost:5001/upload", {
                method: "POST",
                body: formData,
            });
            console.log(res, "res");
        }
    };
    return (
        <div className=" w-fit">
            <div
                onClick={handleClick}
                className="flex gap-1 shadow items-center cursor-pointer border rounded-sm px-4 py-1"
            >
                <IoMdCloudUpload className=" text-2xl" />
                <p className=" text-md text-gray-500">Upload</p>
                <input
                    {...rest}
                    name={name}
                    ref={inputRef}
                    onChange={handleFileChange}
                    type="file"
                    accept={accpet ?? "*"}
                    className="hidden"
                />
            </div>
        </div>
    );
};

export default BPUploadField;
