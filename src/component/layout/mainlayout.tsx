import React, { ReactNode } from "react";
import { GoHome } from "react-icons/go";
import { useNavigate } from "react-router-dom";
interface MainLayoutProps {
    children: ReactNode;
    title?: string;
    topBreadcrumb?: boolean;
    imageSource?: string;
    inputTabElements?: ReactNode;
    breadcrumbs?: breadcrumItems[];
}
interface breadcrumItems {
    name: string;
    path: string;
}

const MainLayout = ({
    children,
    title,
    topBreadcrumb,
    imageSource,
    inputTabElements,
    breadcrumbs = [
        {
            name: "",
            path: "",
        },
    ],
}: MainLayoutProps) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/");
    };
    return (
        <div>
            <div className=" w-full h-full relative">
                <img
                    src={
                        imageSource ??
                        "https://media.istockphoto.com/id/932084972/photo/the-sea-and-the-island.jpg?s=2048x2048&w=is&k=20&c=mj1ydcEpkp2h-NlBAcAwKoNIaxOVCMUOMFTGwmU1X2g="
                    }
                    alt="bg-img"
                    className=" w-full h-[100vh] relative -z-50"
                />
                <div
                    className={`${
                        topBreadcrumb
                            ? "top-breadcrum absolute top-5 flex text-white text-xl gap-3 left-10"
                            : "hidden"
                    } `}
                >
                    <div>
                        <p className=" font-semibold text-yellow-400 cursor-pointer">
                            Home
                        </p>
                    </div>
                    <div>/</div>
                    <div>
                        <p className=" font-semibold">Admin</p>
                    </div>
                </div>
                <div className=" absolute top-[10rem]  w-full text-center text-5xl  font-bold text-white">
                    <h1>{title}</h1>
                </div>
                <div className=" min-h-[100vh] absolute top-72 w-full bg-white">
                    <div className="w-fit left-1   absolute -top-14">
                        {inputTabElements}
                    </div>
                    <div
                        className={
                            topBreadcrumb
                                ? "hidden"
                                : "flex items-center gap-4 p-2 mt-4"
                        }
                    >
                        <div
                            className=" cursor-pointer text-2xl"
                            onClick={handleNavigate}
                        >
                            <GoHome />
                        </div>

                        {breadcrumbs?.length > 0 &&
                            breadcrumbs.map((item, index) => (
                                <>
                                    <div>/</div>
                                    <div
                                        className=" cursor-pointer"
                                        key={index}
                                        onClick={() => navigate(item.path)}
                                    >
                                        {item.name}
                                    </div>
                                </>
                            ))}
                    </div>
                    <>{children}</>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
