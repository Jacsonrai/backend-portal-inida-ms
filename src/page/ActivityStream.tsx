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
        >
            <h1>Activity stream</h1>
        </MainLayout>
    );
};

export default ActivityStream;
