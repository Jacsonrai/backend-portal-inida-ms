import BPControlTextFiled from "../../../component/form/controlled/BPControlTextFiled";
import BPControlSelectField from "../../../component/form/controlled/BPControlSelectField";
import BPControlTextAreaField from "../../../component/form/controlled/BPControlTextAreaField";

const CreateDatasetForm = () => {
    return (
        <div className=" flex flex-col gap-2">
            <BPControlTextFiled
                placeholder="e.g A Descriptive Title"
                label="Title"
                name="title"
                required
            />
            <BPControlTextAreaField
                placeholder="e.g A Descriptive Title"
                label="Description"
                name="description"
                required
            />
            <BPControlTextFiled
                placeholder="e.g A Descriptive Title"
                label="Tags"
                name="tags"
                required
            />
            <BPControlSelectField
                name="license"
                label="License"
                placeholder="Select the license..."
                options={[
                    {
                        value: "group1",
                        label: "Group 1",
                    },
                    {
                        value: "group2",
                        label: "Group 2",
                    },
                ]}
                required
            />
            <BPControlSelectField
                name="organization"
                label="Organization"
                placeholder="Select the organizations..."
                options={[
                    {
                        value: "group1",
                        label: "Group 1",
                    },
                    {
                        value: "group2",
                        label: "Group 2",
                    },
                ]}
                required
            />
            <BPControlSelectField
                name="visibility"
                label="Visibility"
                placeholder="Select the visibility..."
                options={[
                    {
                        value: "group1",
                        label: "Group 1",
                    },
                    {
                        value: "group2",
                        label: "Group 2",
                    },
                ]}
                required
            />
            <BPControlTextFiled
                placeholder="e.g A Descriptive Title"
                label="Source"
                name="source"
                required
            />
            <BPControlTextFiled
                placeholder="e.g A Descriptive Title"
                label="Version"
                name="version"
                required
            />
            <BPControlTextFiled
                placeholder="e.g A Descriptive Title"
                label="Author"
                name="author"
                required
            />
            <BPControlTextFiled
                placeholder="e.g A Descriptive Title"
                label="Author Details"
                name="author_details"
                required
            />
        </div>
    );
};

export default CreateDatasetForm;
