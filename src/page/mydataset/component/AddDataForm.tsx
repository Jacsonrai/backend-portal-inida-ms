import React from "react";
import BPControlTextFiled from "../../../component/form/controlled/BPControlTextFiled";

const AddDataForm = () => {
    return (
        <BPControlTextFiled
            placeholder="e.g A descriptive description"
            label="project"
            name="project"
        />
    );
};

export default AddDataForm;
