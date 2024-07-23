import React from "react";
import BPControlTextFiled from "../../../component/form/controlled/BPControlTextFiled";

import BPControlUploadField from "../../../component/form/controlled/BPControlUploadField";

const AddDataForm = () => {
    return (
        <div className=" flex flex-col gap-2">
            <BPControlTextFiled
                placeholder="e.g A descriptive description"
                label="project"
                name="project"
                required
            />
            <BPControlUploadField name="file" required label="upload files" />
        </div>
    );
};

export default AddDataForm;
