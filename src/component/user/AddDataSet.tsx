import React from "react";
import DatasetContainer from "./datasetcontainer";

const dataGroupData = [
    {
        id: "data-group-1",
        name: "Data Group 1",
        dataSet: [
            {
                id: "data-set-1",
                name: "Data Set 1",
            },
            {
                id: "data-set-2",
                name: "Data Set 2",
            },
        ],
    },
    {
        id: "data-group-2",
        name: "Data Group 2",
        dataSet: [
            {
                id: "data-set-3",
                name: "Data Set 3",
            },
            {
                id: "data-set-4",
                name: "Data Set 4",
            },
        ],
    },
];

const AddDataSet = ({ handleOpenAdd }: any) => {
    const handleCheckboxChange = (id: string, isChecked: boolean) => {
        console.log(
            `Checkbox with id ${id} is now ${
                isChecked ? "checked" : "unchecked"
            }`
        );
        // Here you can integrate this logic with your backend or other state management logic
    };

    return (
        <div className=" flex  gap-5 p-2">
            <div className=" flex-grow">
                <h5 className="font-bold">Add a Data Group or a Dataset</h5>
                <div className="py-4 px-2 shadow border flex flex-col gap-2">
                    {dataGroupData?.map((data) => (
                        <DatasetContainer
                            key={data.id}
                            data={data}
                            onChange={handleCheckboxChange}
                        />
                    ))}
                </div>
            </div>

            <div className=" mt-6">
                <button
                    onClick={() => handleOpenAdd(false)}
                    className=" bg-red-800 text-xl px-5 py-2 text-white"
                >
                    save
                </button>
            </div>
        </div>
    );
};

export default AddDataSet;
