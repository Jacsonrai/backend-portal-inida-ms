import DatasetDropList from "./DatasetDropList";

const DataSetList = () => {
    return (
        <>
            <div className=" bg-red-900 p-4">
                <h5 className=" text-white">Datasets</h5>
            </div>
            <div>
                {dataSetList?.map((dataSet, index) => (
                    <DatasetDropList data={dataSet} />
                ))}
            </div>
        </>
    );
};

export default DataSetList;
const dataSetList = [
    {
        id: 1,
        name: "group data 1",
        datasets: [
            {
                id: 1,
                name: "dataset1",
            },
        ],
    },
];
