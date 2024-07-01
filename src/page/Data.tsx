import React from "react";
import MainLayout from "../component/layout/mainlayout";
import usePageTitle from "../hooks/usePageTitle";
import Tabs from "../component/tabs/tabs";

import DataContent from "../component/data/DataContent";

const Data = () => {
    usePageTitle({ title: "Datasets" });
    return (
        <MainLayout
            breadcrumbs={[{ name: "Datasets", path: "/data" }]}
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
            <DataContent />
        </MainLayout>
    );
};

export default Data;
