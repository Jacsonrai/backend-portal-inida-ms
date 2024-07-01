import { useState, useEffect, ReactNode, useMemo } from "react";
import {
    DataTable,
    // DataTableSelectionChangeEvent,
    DataTableSelectAllChangeEvent,
    DataTablePageEvent,
    DataTableSortEvent,
    DataTableFilterEvent,
    DataTableFilterMeta,
} from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
// import { CustomerService } from "./service/CustomerService";

interface Country {
    name: string;
    code: string;
}

interface Representative {
    name: string;
    code: string;
}

interface Customer {
    id: number;
    name: string;
    country: Country;
    company: string;
    date: string;
    status: string;
    verified: boolean;
    activity: number;
    representative: Representative;
    balance: number;
}

interface LazyTableState {
    first: number;
    rows: number;
    page: number;
    sortField?: string;
    sortOrder?: number;
    filters: DataTableFilterMeta;
}
// _________________________________________
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
}

export const ReactTable = (props: ReactTableProps) => {
    const {
        columns,
        multipleSelect = false,
        enableFilter = "menu",
        tableData,
        isLoading,
        ...rest
    } = props;

    // const [loading, setLoading] = useState<boolean>(false);
    // const [totalRecords, setTotalRecords] = useState<number>(0);
    const [customers, setCustomers] = useState<Customer[] | null>(null);
    const [selectAll, setSelectAll] = useState<boolean>(false);
    const [selectedCustomers, setSelectedCustomers] = useState<
        Customer[] | null
    >(null);
    const [lazyState, setlazyState] = useState<LazyTableState>({
        first: 0,
        rows: 10,
        page: 1,
        // sortField: null,
        // sortOrder: null,
        filters: {
            name: { value: "", matchMode: "contains" },
            "country.name": { value: "", matchMode: "contains" },
            company: { value: "", matchMode: "contains" },
            "representative.name": { value: "", matchMode: "contains" },
        },
    });

    let networkTimeout: string | number | NodeJS.Timeout | null | undefined =
        null;

    useEffect(() => {
        loadLazyData();
    }, [lazyState]);

    const loadLazyData = () => {
        // setLoading(false);

        if (networkTimeout) {
            clearTimeout(networkTimeout);
        }

        //imitate delay of a backend call
        // networkTimeout = setTimeout(() => {
        //     CustomerService.getCustomers({
        //         lazyEvent: JSON.stringify(lazyState),
        //     }).then((data) => {
        //         setTotalRecords(data.totalRecords);
        //         setCustomers(data.customers);
        //         setLoading(false);
        //     });
        // }, Math.random() * 1000 + 250);
    };

    const onPage = (event: any) => {
        setlazyState(event);
    };

    const onSort = (event: any) => {
        setlazyState(event);
    };

    const onFilter = (event: any) => {
        event["first"] = 0;
        setlazyState(event);
    };

    const onSelectionChange = (event: any) => {
        const value = event.value;

        setSelectedCustomers(value);
        setSelectAll(value.length === totalRecords);
    };
    const memorizedData = useMemo(() => tableData, [tableData]);
    console.log(tableData, "data");
    const allowEdit = (rowData: any) => {
        // console.log(rowData, "data");
        return rowData.name !== "Blue Band";
    };

    const totalRecords = tableData?.info?.pages;
    return (
        <>
            <DataTable
                {...rest}
                value={memorizedData ?? []}
                lazy
                filterDisplay={enableFilter ?? "menu"}
                dataKey="id"
                // paginator
                // first={lazyState.first}
                rows={5}
                // rowsPerPageOptions={[5, 10, 25, 50]}
                // totalRecords={totalRecords}
                // onPage={onPage}
                // onSort={onSort}
                // sortField={lazyState.sortField}
                // sortOrder={lazyState.sortOrder}
                // onFilter={onFilter}
                // filters={lazyState.filters}
                loading={isLoading}
                tableStyle={{ border: "1px solid #edeef1" }}
                // selection={selectedCustomers}
                // onSelectionChange={onSelectionChange}
                // selectAll={selectAll}
                // onSelectAllChange={onSelectAllChange}
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
                        sortable={col.sortable ?? false}
                    />
                ))}
                {/* <Column
                    rowEditor={allowEdit}
                    headerStyle={{ width: "10%", minWidth: "8rem" }}
                    bodyStyle={{ textAlign: "center" }}
                    header="Action"
                >
                    delete
                </Column> */}
            </DataTable>
        </>
    );
};
