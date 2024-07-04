import React from "react";

import Stepper from "../stepper/stepper";
import AddDataForm from "../../page/mydataset/component/AddDataForm";
import CreateDatasetForm from "../../page/mydataset/component/CreateDatasetForm";

import BPFromProvider from "../../Provider/BPFormProvider";
const CreateMydata = () => {
    const defaultValue = {
        title: "",
        project: "",
    };
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
    const handleCreateDataset = (data: any) => {
        console.log(data, "datas");
    };
    return (
        <BPFromProvider
            defaultValues={defaultValue}
            onSubmit={handleCreateDataset}
        >
            <div className=" grid grid-cols-[30%,70%]">
                <div className=" border mt-6"></div>
                <Stepper stepperHeader={stepperItem} />
            </div>
        </BPFromProvider>
    );
};

export default CreateMydata;
