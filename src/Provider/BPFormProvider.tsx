import { ReactElement, ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";

const BPFromProvider = (props: {
    onSubmit: any;
    defaultValues: any;
    children: ReactNode;
}) => {
    const methods = useForm(props.defaultValues);
    const { handleSubmit } = methods;

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(props.onSubmit)}>
                {props.children}
            </form>
        </FormProvider>
    );
};

export default BPFromProvider;
