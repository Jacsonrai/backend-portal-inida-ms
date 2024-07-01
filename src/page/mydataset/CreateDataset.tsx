import React from "react";
import MainLayout from "../../component/layout/mainlayout";
import Tabs from "../../component/tabs/tabs";
import usePageTitle from "../../hooks/usePageTitle";
import MyDataSetContent from "../../component/mydataset/mydataset";
import CreateMydata from "../../component/mydataset/createmydata";

const CreateDataset = () => {
    usePageTitle({ title: "Create Dataset" });
    return (
        <MainLayout
            breadcrumbs={[
                { name: "My Datasets", path: "/my-datasets" },
                { name: "Create Dataset", path: "/my-datasets" },
            ]}
            inputTabElements={
                <Tabs
                    tabData={[
                        {
                            name: "All Datasets",
                            path: "/data",
                        },
                        {
                            name: "My Datasets",
                            path: "/my-datasets",
                        },
                        {
                            name: "Activity Stream",
                            path: "/activity-stream",
                        },
                        {
                            name: "User Managements",
                            path: "/user-managements",
                        },
                    ]}
                />
            }
        >
            <CreateMydata />
        </MainLayout>
    );
};

export default CreateDataset;