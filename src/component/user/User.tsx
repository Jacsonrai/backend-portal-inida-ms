import SearchBar from "../serachbar";
import { ReactTable } from "../reactTables/ReactTable";
import { userData } from "./userData";
import ResuableDropDown from "../dropdown/ReuseableDropDown";
import { useState } from "react";
import RoleSelector from "./RoleSelector";

const User = () => {
    const [selectedRole, setSelectedRole] = useState<string | number>("");

    return (
        <div className="flex items-center justify-center p-2 ">
            <div className="w-full max-w-5xl">
                <div className="grid grid-cols-2 items-center gap-10">
                    <SearchBar
                        placeholder={"search"}
                        onChange={() => console.log("hello")}
                    />
                </div>
                <div className="mt-20">
                    <ReactTable
                        enableAction
                        onSelectedNaviagte="/user-managements"
                        columns={[
                            {
                                field: "username",
                                header: "User Name",
                                headerStyle: {
                                    fontSize: "1.2rem",
                                    width: 200,
                                },
                            },
                            {
                                field: "role",
                                header: "Role",
                                headerStyle: {
                                    fontSize: "1.2rem",
                                    width: 200,
                                },
                                body: (rows: any) => (
                                    <RoleSelector
                                        rows={rows}
                                        name="role"
                                        options={[
                                            {
                                                label: "Guest",
                                                value: "guest",
                                            },
                                            {
                                                label: "Admin",
                                                value: "admin",
                                            },
                                            {
                                                label: "Editor",
                                                value: "editor",
                                            },
                                        ]}
                                    />
                                ),
                            },
                            {
                                field: "created_at",
                                header: "Member Since",
                                headerStyle: {
                                    fontSize: "1.2rem",
                                    width: 200,
                                },
                            },
                        ]}
                        stripedRows
                        tableData={userData ?? []}
                        isLoading={false}
                        excludeFieldsFromNavigation={["role"]} // exclude role field from navigation
                    />
                </div>
            </div>
        </div>
    );
};

export default User;
