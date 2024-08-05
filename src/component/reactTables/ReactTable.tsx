import { useState, useEffect, ReactNode, useMemo } from "react";
import { DataTable, DataTableFilterMeta } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { ImCross } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { Dialog } from "primereact/dialog";

interface TableColumnsItem {
    field: string;
    header: string;
    body?: any;
    filter?: boolean;
    filterPlaceholder?: string;
    headerStyle?: any;
    sortable?: boolean;
}
interface ReactTableProps {
    columns: TableColumnsItem[];
    multipleSelect?: boolean;
    enableFilter?: "menu" | "row";
    tableData: any;
    isLoading: boolean;
    stripedRows?: boolean;
    enableAction?: boolean;
    onSelectedNaviagte?: string;
    excludeFieldsFromNavigation?: string[];
}

export const ReactTable = (props: ReactTableProps) => {
    const {
        columns,
        multipleSelect = false,
        enableFilter = "menu",
        tableData,
        isLoading,
        enableAction,
        onSelectedNaviagte,
        excludeFieldsFromNavigation = [],
        ...rest
    } = props;

    const [deleteDialog, setDeleteDialog] = useState(false);
    const navigate = useNavigate();
    const memorizedData = useMemo(() => tableData, [tableData]);
    const handleSelectedRow = (row: any, column: any) => {
        if (!excludeFieldsFromNavigation.includes(column.target.name)) {
            navigate(`${onSelectedNaviagte}/${row.id}`);
        }
    };
    const confirmDeleteSelected = () => {
        setDeleteDialog(true);
    };
    const actionBodyTemplate = () => {
        return (
            <div className="flex items-center justify-center">
                <Button
                    className=" rounded-[50%] h-[2rem] w-[2rem] p-1"
                    severity="danger"
                    onClick={confirmDeleteSelected}
                >
                    <ImCross className="h-[2.5rem] w-[2.5rem]" />
                </Button>
            </div>
        );
    };
    const hideDeleteDialog = () => {
        setDeleteDialog(false);
    };
    const deleteFooterTemplate = (
        <div className=" border bg-red-800 m-0 px-2 py-4 flex gap-2 flex-row-reverse">
            <Button
                label="Confirm Delete"
                className=" border-none bg-white text-red-800"
                severity="danger"
                // onClick={deleteSelectedProducts}
            />
            <Button
                label="Cancel"
                className=" border-none outline-none text-white underline"
                outlined
                onClick={hideDeleteDialog}
            />
        </div>
    );
    return (
        <>
            <DataTable
                {...rest}
                value={memorizedData ?? []}
                lazy
                size="small"
                filterDisplay={enableFilter ?? "menu"}
                dataKey="id"
                rows={10}
                rowsPerPageOptions={[5, 10, 25, 50]}
                paginator
                loading={isLoading}
                selectionMode="single"
                onSelectionChange={(e: any) =>
                    handleSelectedRow(e.value, e.originalEvent)
                }
                tableStyle={{ border: "1px solid #edeef1" }}
            >
                {multipleSelect && (
                    <Column
                        selectionMode="multiple"
                        headerStyle={{ width: "1rem" }}
                    />
                )}

                {columns?.map((col, index) => (
                    <Column
                        key={index}
                        field={col.field}
                        header={col.header}
                        filter={col.filter ?? false}
                        filterPlaceholder={col.filterPlaceholder ?? ""}
                        body={col.body}
                        headerStyle={col.headerStyle ?? { width: "3rem" }}
                        sortable
                    />
                ))}
                {enableAction && (
                    <Column
                        header="Suspend user"
                        body={actionBodyTemplate}
                        exportable={false}
                        headerStyle={{
                            fontSize: "1.2rem",
                            width: 100,
                        }}
                    />
                )}
            </DataTable>
            <Dialog
                visible={deleteDialog}
                style={{ width: "32rem" }}
                className="custom-dialog"
                breakpoints={{ "960px": "75vw", "641px": "90vw" }}
                header="Confirm Delete"
                modal
                footer={deleteFooterTemplate}
                onHide={hideDeleteDialog}
            >
                <div className="confirmation-content p-0">
                    <p>Do you want to proceed with this role</p>
                </div>
            </Dialog>
        </>
    );
};
