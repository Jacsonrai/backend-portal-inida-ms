import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

interface RoleSelectorProps {
    options: OptionItems[];
    rows: any;
    name: string;
}
interface OptionItems {
    label: string;
    value: string | number;
}

const RoleSelector = ({ options, rows, name }: RoleSelectorProps) => {
    const [selectedValue, setSelectedValue] = useState<string | number>("");
    const [pendingValue, setPendingValue] = useState<string | number>("");
    const [showDialog, setShowDialog] = useState(false);

    const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPendingValue(event.target.value);
        setShowDialog(true);
    };

    const confirmRoleChange = () => {
        setSelectedValue(pendingValue);
        setShowDialog(false);
        console.log("Role changed:", pendingValue);
        console.log(rows, "rows");
    };

    const cancelRoleChange = () => {
        setPendingValue(selectedValue);
        setShowDialog(false);
    };

    return (
        <>
            <select
                className="bg-transparent focus:outline-none pr-6"
                name={name}
                value={selectedValue}
                onChange={handleRoleChange}
            >
                {options?.map((item, index) => (
                    <option
                        className="bg-gray-200"
                        value={item.value}
                        key={index}
                    >
                        {item?.label}
                    </option>
                ))}
            </select>

            <Dialog
                visible={showDialog}
                header="Please Confirm to Proceed"
                className="custom-dialog p-0"
                footer={
                    <div className=" border bg-red-800 m-0 px-2 py-4 flex gap-2 flex-row-reverse">
                        <Button
                            label="Confirm"
                            className=" border-none bg-white text-red-800"
                            severity="danger"
                            onClick={confirmRoleChange}
                        />
                        <Button
                            label="Cancel"
                            className=" border-none outline-none text-white underline"
                            outlined
                            onClick={cancelRoleChange}
                        />
                    </div>
                }
                onHide={cancelRoleChange}
            >
                <p>This action will change the role for selected user!</p>
            </Dialog>
        </>
    );
};

export default RoleSelector;
