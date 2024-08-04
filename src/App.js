import React from "react";
import Header from "./component/header";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import DataPage from "./page/Data";
import ActivityStream from "./page/ActivityStream";
import MyDatasets from "./page/MyDatasets";
import UserManagements from "./page/UserManagements";
import ReactComponentTabs from "./page/ReactComponentPages";
import CreateDataset from "./page/mydataset/CreateDataset";
import UserDetails from "./component/user/UserDetails";
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/data" element={<DataPage />} />
                <Route path="/activity-stream" element={<ActivityStream />} />
                <Route path="/my-datasets" element={<MyDatasets />} />
                <Route path="/user-managements" element={<UserManagements />} />
                <Route path="/user-managements/:id" element={<UserDetails />} />
                <Route path="/component" element={<ReactComponentTabs />} />
                <Route path="/my-datasets/create" element={<CreateDataset />} />
            </Routes>
        </>
    );
}

export default App;
