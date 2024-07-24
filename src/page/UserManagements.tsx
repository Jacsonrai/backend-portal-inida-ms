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
        >
            <User />
        </MainLayout>
    );
};

export default UserManagements;
