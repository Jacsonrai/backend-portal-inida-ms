import React from "react";

const DataCard = () => {
    return (
        <div className=" rounded border shadow px-4 ">
            <div className=" flex items-center py-4 justify-between">
                <p className=" text-2xl font-semibold">Title</p>
                <p className=" text-xl">Data Group</p>
            </div>
            <p className="text-xl font-medium">version</p>
            <div className="my-5 text-justify pr-10 text-lg">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className=" mt-10 mb-5 text-white bg-blue-600 w-fit text-xl px-5 py-2 rounded-3xl">
                <p>excel</p>
            </div>
        </div>
    );
};

export default DataCard;
