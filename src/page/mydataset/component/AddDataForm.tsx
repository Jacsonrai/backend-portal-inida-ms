import React from "react";
import BPControlTextFiled from "../../../component/form/controlled/BPControlTextFiled";
import BPUploadField from "../../../component/form/BPUploadField";

const AddDataForm = () => {
    return (
        <div className=" flex flex-col gap-2">
            <BPControlTextFiled
                placeholder="e.g A descriptive description"
                label="project"
                name="project"
                required
            />
            <BPUploadField name="upload" />
        </div>
    );
};

export default AddDataForm;
