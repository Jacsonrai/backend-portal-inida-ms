import React from "react";

import BPControlTextFiled from "../../../component/form/controlled/BPControlTextFiled";

const CreateDatasetForm = () => {
    return (
        <BPControlTextFiled
            placeholder="e.g A Descriptive Title"
            label="Title"
            name="title"
            required
        />
    );
};

export default CreateDatasetForm;
