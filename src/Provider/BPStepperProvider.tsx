import { ReactElement, ReactNode } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import CustomStepper from "../component/stepper/stepper";

interface stepperProps {
    stepperHeader: stepperHeaderItem[];
    onSubmit: (data: any) => void;
}
interface stepperHeaderItem {
    label: string;
    component: ReactNode;
}
const BPStepperProvider = (props: {
    onSubmit: SubmitHandler<any>;
    defaultValues: any;
    stepperHeader: stepperProps["stepperHeader"];
}) => {
    const methods = useForm(props.defaultValues);

    return (
        <FormProvider {...methods}>
            <CustomStepper
                stepperHeader={props.stepperHeader}
                onSubmit={props.onSubmit}
            />
        </FormProvider>
    );
};

export default BPStepperProvider;
