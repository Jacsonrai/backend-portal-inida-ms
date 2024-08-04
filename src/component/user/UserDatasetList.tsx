import React from "react";
import AddDataSet from "./AddDataSet";
import DataSetList from "./DataSetList";

const UserDatasetList = ({ handleOpenAdd, openAdd }: any) => {
    return openAdd ? (
        <AddDataSet handleOpenAdd={handleOpenAdd} />
    ) : (
        <DataSetList />
    );
};

export default UserDatasetList;
