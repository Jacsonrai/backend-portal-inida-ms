import React from "react";
import AddDataForm from "../../page/mydataset/component/AddDataForm";
import CreateDatasetForm from "../../page/mydataset/component/CreateDatasetForm";
import BPStepperProvider from "../../Provider/BPStepperProvider";
import BPSelectField from "../form/BPSelectField";
const CreateMydata = () => {
    const defaultValue = {
        title: "",
        project: "",
        organization: "",
        file: "",
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
        <div className=" grid grid-cols-[30%,70%]">
            <div className=" border mt-6"></div>

            <BPStepperProvider
                defaultValues={defaultValue}
                stepperHeader={stepperItem}
                onSubmit={handleCreateDataset}
            />
        </div>
    );
};

export default CreateMydata;
