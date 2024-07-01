import React from "react";
import MainLayout from "../component/layout/mainlayout";
import Tabs from "../component/tabs/tabs";
import usePageTitle from "../hooks/usePageTitle";
import MyDataSetContent from "../component/mydataset/mydataset";

const MyDatasets = () => {
    usePageTitle({ title: "My Datasets" });
    return (
        <MainLayout
            breadcrumbs={[{ name: "My Datasets", path: "/my-datasets" }]}
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
            <MyDataSetContent />
        </MainLayout>
    );
};

export default MyDatasets;
