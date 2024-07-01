import React, { HtmlHTMLAttributes, useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import SearchBar from "./serachbar";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState<boolean>(false);

    const dropDownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const redirectToData = () => {
        navigate("/data");
        setOpen(false);
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(event.target as Node)
            ) {
                // setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const handelLogin = async () => {
        // instance.loginRedirect(loginRequest);host
        window.location.href = "http://localhost:5001/api/v1/auth/sign-in";
    };

    return (
        <div className=" bg-red-950 px-4 py-2 w-full relative">
            <div className="flex items-center gap-10">
                <button
                    onClick={handelLogin}
                    className="text-white flex items-center gap-2 ml-auto cursor-pointer"
                >
                    <p>signin</p>
                    <FaUser />
                </button>
                <div className=" text-white cursor-pointer text-2xl">
                    <MdOutlineLogout />
                </div>
            </div>
            <div className=" grid grid-cols-2">
                <div
                    className=" flex items-center gap-1 cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <img src="/logo512.png" alt="" className=" h-10" />
                    <p className=" text-white">data portal backend</p>
                </div>
                <div className="grid grid-cols-[20%,20%,60%] items-center">
                    <div
                        onClick={() => navigate("/component")}
                        className=" cursor-pointer text-white"
                    >
                        <h1>Components</h1>
                    </div>
                    <div>
                        <div
                            onClick={() => setOpen(!open)}
                            className=" flex items-center gap-1 text-white cursor-pointer"
                        >
                            <div>
                                <p>DataSets</p>
                            </div>
                            {open ? (
                                <IoIosArrowUp fontSize={"1.3rem"} />
                            ) : (
                                <IoIosArrowDown fontSize={"1.3rem"} />
                            )}
                        </div>
                        <div
                            ref={dropDownRef}
                            className={`transition-height duration-500 ease-in-out overflow-hidden ${
                                open
                                    ? "max-h-[60rem] absolute w-full right-0 left-0 top-[5.1rem] z-50"
                                    : "max-h-0 hidden"
                            }`}
                        >
                            <div className="p-10 cursor-pointer text-white h-[20rem] bg-opacity-80 bg-black">
                                <p onClick={redirectToData}>
                                    Expore Data Group
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <SearchBar
                            onChange={() => console.log("hello")}
                            placeholder="search data sets.."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
