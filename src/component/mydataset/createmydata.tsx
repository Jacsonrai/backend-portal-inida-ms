import React from "react";

import Stepper from "../stepper/stepper";
import AddDataForm from "../../page/mydataset/component/AddDataForm";
import CreateDatasetForm from "../../page/mydataset/component/CreateDatasetForm";
const CreateMydata = () => {
    const stepperItem = [
        {
            label: "Create Dataset",
            component: <CreateDatasetForm />,
        },
        {
            label: "Add Data",
            component: <AddDataForm />,
        },
    ];
    return (
        <div className=" grid grid-cols-[30%,70%]">
            <div className=" border mt-6"></div>
            <Stepper stepperHeader={stepperItem} />
        </div>
    );
};

export default CreateMydata;
