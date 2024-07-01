import { FaPlus } from "react-icons/fa6";
import SearchBar from "../serachbar";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import DataCard from "../card/DataCard";
import DropDown from "../dropdown/DropDown";

const DataContent = () => {
    return (
        <div className=" grid grid-cols-[20%,80%] gap-1 px-1">
            <div className="h-full w-full mt-10">
                <div className=" mt-[2.5rem]">
                    <button className=" flex px-6 py-2  rounded-sm text-white items-center bg-red-950 gap-5">
                        <span className=" text-2xl">
                            <FaPlus />
                        </span>
                        <p className=" text-xl">Add Datasets</p>
                    </button>
                </div>
                <div className=" border rounded-md shadow-sm h-full pt-10">
                    <DropDown
                        label="Data Group"
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
                    <DropDown
                        label="Tags"
                        options={[
                            {
                                name: "CSV",
                                value: 10,
                            },
                            {
                                name: "Forecast",
                                value: 10,
                            },
                        ]}
                    />
                    <DropDown
                        label="Formats"
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
                        ]}
                    />
                </div>
            </div>
            <div className=" h-full w-full">
                <div className="grid grid-cols-2 items-center gap-10">
                    <SearchBar
                        placeholder={"search datasets"}
                        onChange={() => console.log("hello")}
                    />
                    <div className=" flex items-center gap-2 text-2xl cursor-pointer">
                        <p>Relevance</p>
                        <IoIosArrowDown />
                    </div>
                </div>
                <div className="border mt-[5rem] flex flex-col gap-2 rounded-md shadow-sm h-full p-3">
                    <DataCard />
                    <DataCard />
                    <DataCard />
                    <DataCard />
                </div>
            </div>
        </div>
    );
};

export default DataContent;
