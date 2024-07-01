import React from "react";
import MainLayout from "../component/layout/mainlayout";
import Tabs from "../component/tabs/tabs";
import usePageTitle from "../hooks/usePageTitle";

const ActivityStream = () => {
    usePageTitle({
        title: "Activity Stream",
    });
    return (
        <MainLayout
            breadcrumbs={[
                { name: "My Activity Stream", path: "/activity-stream" },
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
            <h1>Activity stream</h1>
        </MainLayout>
    );
};

export default ActivityStream;
