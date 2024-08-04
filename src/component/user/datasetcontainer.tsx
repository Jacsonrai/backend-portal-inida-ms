import React, { useState, useEffect } from "react";
import { Checkbox } from "primereact/checkbox";
import { TiArrowSortedDown } from "react-icons/ti";

interface DatasetContainerProps {
    data: {
        id: string;
        name: string;
        dataSet: {
            id: string;
            name: string;
        }[];
    };
    onChange: (id: string, isChecked: boolean) => void; // Callback to handle state change
}

const DatasetContainer: React.FC<DatasetContainerProps> = ({
    data,
    onChange,
}) => {
    const [open, setOpen] = useState<boolean>(false);
    const [parentChecked, setParentChecked] = useState<boolean>(false);
    const [subChecked, setSubChecked] = useState<boolean[]>(
        Array(data.dataSet.length).fill(false)
    );

    const handleOpenSubSet = () => {
        setOpen(!open);
    };

    const onParentChange = (e: any) => {
        const isChecked = e.checked;
        setParentChecked(isChecked);
        setSubChecked(subChecked.map(() => isChecked)); // Toggle all sub-checkboxes
        onChange(data.id, isChecked); // Send the parent id and checked state
    };

    const onSubChange = (e: any, index: number) => {
        const updatedSubChecked = subChecked.map((checked, i) =>
            i === index ? e.checked : checked
        );

        setSubChecked(updatedSubChecked);
        setParentChecked(updatedSubChecked.every(Boolean)); // Check if all are checked
        onChange(data.dataSet[index].id, e.checked); // Send the sub id and checked state
    };

    useEffect(() => {
        // Sync parent checkbox state with sub-checkboxes
        setParentChecked(subChecked.every(Boolean));
    }, [subChecked]);

    return (
        <>
            <div
                onClick={handleOpenSubSet}
                className="flex items-center gap-1 hover:cursor-pointer"
            >
                <p className="font-bold flex-grow">{data?.name}</p>
                <Checkbox
                    inputId={data?.id}
                    name={data?.name}
                    value={data?.id}
                    onChange={onParentChange}
                    checked={parentChecked}
                />
                <TiArrowSortedDown />
            </div>
            {open &&
                data?.dataSet?.map((set, index) => (
                    <div key={set.id} className="px-20">
                        <div className="flex items-center gap-1 hover:cursor-pointer">
                            <p className="font-semibold flex-grow">
                                {set?.name}
                            </p>
                            <Checkbox
                                inputId={set?.id}
                                name={set?.name}
                                value={set?.id}
                                onChange={(e) => onSubChange(e, index)}
                                checked={subChecked[index]}
                            />
                        </div>
                    </div>
                ))}
        </>
    );
};

export default DatasetContainer;
