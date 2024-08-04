import React, { useState } from "react";
import MainLayout from "../layout/mainlayout";
import { userData } from "./userData";
import { useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import SearchBar from "../serachbar";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import DataCard from "../card/DataCard";
import DropDown from "../dropdown/DropDown";
import UserDatasetList from "./UserDatasetList";

const UserDetails = () => {
    const { id } = useParams();
    const filterUserData = userData?.find((user) => user?.id.toString() === id);
    const [openAdd, setOpenAdd] = useState<boolean>(false);
    const handleCreate = () => {
        setOpenAdd(true);
    };
    return (
        <MainLayout
            breadcrumbs={[
                { name: "User Managment", path: "/user-managements" },
                {
                    name: `${filterUserData?.username}`,
                    path: `/user-managements/${id}`,
                },
            ]}
        >
            <div className=" grid grid-cols-[20%,80%] gap-1 px-1">
                <div className="h-full w-full mt-10">
                    <div className=" mt-[2.5rem]">
                        <button
                            onClick={handleCreate}
                            className=" flex px-6 py-2  rounded-sm text-white items-center bg-red-950 gap-5"
                        >
                            <span className=" text-2xl">
                                <FaPlus />
                            </span>
                            <p className=" text-xl">Add datasets</p>
                        </button>
                    </div>
                    <div className=" border rounded-md shadow-sm h-full">
                        <div className=" px-2">
                            <figure className=" border">
                                <img
                                    src="https://imgs.search.brave.com/RnZsci4qtHZk23FUI2ic9EMsnQ4CuNtoTa6mfk6xNzo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2JmLzY0/LzkzL2JmNjQ5MzIz/ZDY2NTlhNWZiYzgw/NmE5Yzg4NjMxNDhi/LmpwZw"
                                    alt=""
                                    className=" h-96 w-full object-fill"
                                />
                            </figure>
                            <div className=" mt-1 leading-6">
                                <h4 className=" text-xl font-semibold">
                                    Richard Hubbert(ESO)
                                </h4>
                                <p className=" text-lg">
                                    You have not provided the bio graphy
                                </p>
                                <div className="grid grid-cols-2 mt-4 gap-4">
                                    <span>
                                        <p className=" text-lg font-medium">
                                            Followers
                                        </p>
                                        <p className=" font-semibold">0</p>
                                    </span>
                                    <span>
                                        <p className=" text-lg font-medium">
                                            Datasets
                                        </p>
                                        <p className=" font-semibold">0</p>
                                    </span>
                                    <span>
                                        <p className=" text-lg font-medium">
                                            Edits
                                        </p>
                                        <p className=" font-semibold">0</p>
                                    </span>
                                </div>
                                <div className=" mt-6 flex gap-6 flex-col">
                                    <span className=" leading-7">
                                        <p className=" text-lg font-bold">
                                            Username
                                        </p>
                                        <p className=" font-medium">
                                            Richar hubbert
                                        </p>
                                    </span>

                                    <span className=" leading-7">
                                        <p className=" text-lg font-bold">
                                            Email
                                        </p>
                                        <p className=" font-medium">
                                            Richar hubbert
                                        </p>
                                    </span>

                                    <span className=" leading-7">
                                        <p className=" text-lg font-bold">
                                            Member Since
                                        </p>
                                        <p className=" font-medium">
                                            richarhubbert@gmail.com
                                        </p>
                                    </span>

                                    <span className=" leading-7">
                                        <p className=" text-lg font-bold">
                                            State
                                        </p>
                                        <p className=" font-medium">
                                            March 14, 2024
                                        </p>
                                    </span>

                                    <span className=" leading-7">
                                        <p className=" text-lg font-bold">
                                            API Key - Private
                                        </p>
                                        <p className=" font-medium">
                                            fgty-12h4-jklt-yupt-trqes1267kslz
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" h-full w-full">
                    <div className="grid grid-cols-2 items-center gap-10">
                        <SearchBar
                            placeholder={"search datasets"}
                            onChange={() => console.log("hello")}
                        />
                    </div>
                    <div className="border mt-[5rem] flex flex-col rounded-md shadow-sm h-full">
                        <UserDatasetList
                            handleOpenAdd={setOpenAdd}
                            openAdd={openAdd}
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default UserDetails;
