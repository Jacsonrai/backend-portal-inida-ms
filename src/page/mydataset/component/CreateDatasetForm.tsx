import React from "react";
import BPTextFiled from "../../../component/form/BPTextFiled";
import BPTextArea from "../../../component/form/BPTextArea";

const CreateDatasetForm = () => {
    return (
        <form>
            <div className=" flex flex-col gap-2">
                <BPTextFiled
                    placeholder="e.g A Descriptive Title"
                    label="Title"
                    name="title"
                />
                <BPTextArea
                    placeholder="description"
                    name="description"
                    label="description"
                />

                <BPTextFiled
                    placeholder="e.g A Descriptive Title"
                    label="Tags"
                    name="tags"
                />
                <BPTextFiled
                    placeholder="e.g A Descriptive Title"
                    label="License"
                    name="license"
                />
                <BPTextFiled
                    placeholder="e.g A Descriptive Title"
                    label="Organization"
                    name="title"
                />
                <BPTextFiled
                    placeholder="e.g A Descriptive Title"
                    label="Visibility"
                    name="title"
                />
                <BPTextFiled
                    placeholder="e.g A Descriptive Title"
                    label="Source"
                    name="title"
                />
                <BPTextFiled placeholder="10.0" label="Version" name="title" />
                <BPTextFiled
                    placeholder="Jhon Doe"
                    label="Author"
                    name="title"
                />
                <BPTextFiled
                    placeholder="jhon@example.com"
                    label="Authr Email"
                    name="title"
                />
                <BPTextFiled
                    placeholder="Joe Blooger"
                    label="Maintainer"
                    name="title"
                />
                <BPTextFiled
                    placeholder="e.g A Descriptive Title"
                    label="Joe@example.com"
                    name="title"
                />
            </div>
        </form>
    );
};

export default CreateDatasetForm;
