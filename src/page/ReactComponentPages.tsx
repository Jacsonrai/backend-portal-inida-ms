import React, { useEffect } from "react";
import { ReactTabs } from "../component/reactTabs/ReactTabs";
import { ReactTable } from "../component/reactTables/ReactTable";
import { useTable } from "../component/reactTables/useTable";

const ReactComponentPages = () => {
    const { data, loading } = useTable({
        url: "https://rickandmortyapi.com/api/character",
    });

    return (
        // <ReactTabs
        //     tabItems={[
        //         { label: "Header 1", component: <h1>hello1</h1> },
        //         { label: "Header 2", component: <h1>hello2</h1> },
        //         { label: "Header 3", component: <h1>hello3zwh</h1> },
        //     ]}
        // />
        <ReactTable
            enableFilter="row"
            tableData={data !== null && data}
            isLoading={loading}
            columns={[
                {
                    header: "Name",
                    field: "name",
                    filter: true,
                    filterPlaceholder: "search by name",
                },
                {
                    header: "Status",
                    field: "status",
                    filter: true,
                    filterPlaceholder: "search by status",
                    body: (rowData: any) => {
                        return (
                            <div
                                className={
                                    rowData.status === "Alive"
                                        ? " text-green-600"
                                        : " text-red-500"
                                }
                            >
                                {rowData.status}
                            </div>
                        );
                    },
                },
                {
                    header: "Created",
                    field: "created",
                    filter: true,
                    filterPlaceholder: "search by status",
                },
                {
                    header: "Species",
                    field: "species",
                    filter: true,
                    filterPlaceholder: "search by species",
                    body: (rowData: any) => {
                        return (
                            <div className=" text-red-500">
                                {rowData.species}
                            </div>
                        );
                    },
                },
            ]}
        />
    );
};

export default ReactComponentPages;
