import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoTrashBin } from "react-icons/io5";
const DatasetDropList = ({ data }: any) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => {
        setOpen(!open);
    };
    return (
        <>
            <div
                className=" flex items-center bg-purple-400 p-4 hover:cursor-pointer"
                onClick={handleOpen}
            >
                <p className="font-bold flex-grow">{data?.name}</p>
                {open ? (
                    <MdKeyboardArrowUp fontSize={"1.4rem"} />
                ) : (
                    <MdKeyboardArrowDown fontSize={"1.4rem"} />
                )}
            </div>
            {open &&
                data?.datasets?.map((set: any) => (
                    <div className=" flex items-center px-20 border-b-2 py-4">
                        <p className=" flex-grow">{set?.name}</p>
                        <button>
                            <IoTrashBin
                                fontSize={"2rem"}
                                className=" text-white p-2 rounded-[50%] hover:bg-orange-500 bg-purple-950"
                            />
                        </button>
                    </div>
                ))}
        </>
    );
};

export default DatasetDropList;
