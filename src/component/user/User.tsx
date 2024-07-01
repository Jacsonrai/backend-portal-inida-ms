import { FaPlus } from "react-icons/fa6";
import SearchBar from "../serachbar";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Dropdown } from "primereact/dropdown";
import DropDown from "../dropdown/DropDown";
import { ReactTable } from "../reactTables/ReactTable";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
    const [loading, setLoading] = useState<Boolean | undefined>(undefined);
    const [userList, setUserList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            const data = await fetch("http://localhost:5001/api/v1/user/list");

            const responseJson = await data.json();
            if (responseJson) {
                setUserList(responseJson.data);
                setLoading(false);
            }
        };
        fetchData();
    }, []);
   
    return (
        <div className=" grid grid-cols-[20%,80%] gap-1 px-1">
            <div className="h-full w-full mt-10">
                <div className=" mt-[2.5rem]">
                    <button className=" flex px-6 py-2  rounded-sm text-white items-center bg-red-950 gap-5">
                        <span className=" text-2xl">
                            <FaPlus />
                        </span>
                        <p className=" text-xl">Create New User</p>
                    </button>
                </div>
                <div className=" border rounded-md shadow-sm h-full min-h-[50rem]">
                    <div className=" mt-4">
                        <DropDown
                            label="Data Groups"
                            checkEnable
                            options={[
                                {
                                    name: "CSV",
                                    value: 10,
                                },
                                {
                                    name: "Forecast",
                                    value: 10,
                                },
                                {
                                    name: "Demand",
                                    value: 10,
                                },
                                {
                                    name: "Constraint",
                                    value: 10,
                                },
                                {
                                    name: "test data1",
                                    value: 10,
                                },
                                {
                                    name: "test data2",
                                    value: 10,
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
            <div className=" h-full w-full">
                <div className="grid grid-cols-2 items-center gap-10">
                    <SearchBar
                        placeholder={"search"}
                        onChange={() => console.log("hello")}
                    />
                    <div className=" flex items-center gap-2 text-2xl cursor-pointer">
                        <p>Relevance</p>
                        <IoIosArrowDown />
                    </div>
                </div>

                <div className="border mt-[5rem] flex flex-col gap-2 rounded-md shadow-sm h-full p-3">
                    <ReactTable
                        columns={[
                            {
                                field: "",
                                header: "User",
                                headerStyle: { fontSize: "1.2rem" },
                                body: (row: any) => (
                                    <p>
                                        {row.FirstName} {row.LastName}
                                    </p>
                                ),
                            },
                            {
                                field: "role",
                                header: "Role",
                                headerStyle: { fontSize: "1.2rem" },
                            },
                            {
                                field: "manage",
                                header: "Manage",
                                headerStyle: {
                                    width: "10%",
                                    minWidth: "8rem",
                                    fontSize: "1.2rem",
                                },
                            },
                        ]}
                        stripedRows
                        tableData={userList ?? []}
                        isLoading={false}
                    />
                </div>
            </div>
        </div>
    );
};

export default User;
