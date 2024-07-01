import React from "react";
import MainLayout from "../component/layout/mainlayout";
import Tabs from "../component/tabs/tabs";
import usePageTitle from "../hooks/usePageTitle";
import User from "../component/user/User";

const UserManagements = () => {
    usePageTitle({
        title: "User managements",
    });
    return (
        <MainLayout
            breadcrumbs={[
                { name: "User Managment", path: "/user-managements" },
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
            <User />
        </MainLayout>
    );
};

export default UserManagements;
