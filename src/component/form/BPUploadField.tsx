import React from "react";
import { IoMdCloudUpload } from "react-icons/io";

interface BPUploadFiledProps extends React.HTMLAttributes<HTMLInputElement> {
    name: string;
    placeholder?: string;
    label?: string;
    type?: string;
    accpet?: string;
    refs: React.RefObject<HTMLInputElement>;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: () => void;
    loading: boolean;
    file: fileType | null;
}

interface fileType {
    name: string;
    type: string;
    preview: string;
}

const BPUploadField: React.FC<BPUploadFiledProps> = ({
    name,
    accpet,
    onChange,
    handleClick,
    refs,
    loading,
    file,
    ...rest
}) => {
    return (
        <>
            <div className="w-fit">
                <div
                    onClick={handleClick}
                    className="flex gap-1 shadow items-center cursor-pointer border rounded-sm px-4 py-1"
                >
                    <IoMdCloudUpload className="text-2xl" />
                    <p className="text-md text-gray-500">
                        {loading
                            ? `Uploading...`
                            : file
                            ? `Uploaded`
                            : `Upload`}
                    </p>
                    <input
                        ref={refs}
                        onChange={onChange}
                        type="file"
                        accept={accpet ?? "*"}
                        className="hidden"
                    />
                </div>
            </div>
            {file && (
                <div className="flex gap-6 items-center">
                    <p>{file.name}</p>
                    <a
                        href={file.preview}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border p-1 rounded-sm"
                    >
                        Preview
                    </a>
                </div>
            )}
        </>
    );
};

export default BPUploadField;
