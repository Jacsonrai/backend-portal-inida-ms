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
        >
            <MyDataSetContent />
        </MainLayout>
    );
};

export default MyDatasets;
