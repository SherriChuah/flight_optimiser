// import { useState } from "react";
// import { Heading, Button, CustomForm, Title, SubTitle, Success } from "./FormStyle"
// // import { DestinationStep } from "../../components/FormSteps/DestinationStep/DestinationStep";

import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import { ALL_STEPS_LIST, STEP_INFO } from "./FormConstants";

export const Form = () => {

    const handleComplete = () => {
        console.log("Form completed!");
        // Handle form completion logic here
    };

    // const checkValidateTab = () => {
    //     console.log(firstTabInput);
    //     if (firstTabInput === "") {
    //       return false;
    //     }
    //     return true;
    // };

    // const errorMessages = () => {
    //     // alert("Please fill in the required fields");
    //     return <span style={{ color: "red", fontSize: "14px" }}>This field is required</span>;
    // };

    return (
        <div>
            <FormWizard
                stepSize="xs"
                shape="circle"
                color="var(--primary)"
                onComplete={handleComplete}
            >
                {ALL_STEPS_LIST.map((step, index, arr) => {
                    const StepComponent = STEP_INFO[step].content;
                    return (
                        <FormWizard.TabContent
                            title={STEP_INFO[step] && STEP_INFO[step].progress_title}
                            // {...FORM_VALIDATION[step]}
                        ><StepComponent step={step} /></FormWizard.TabContent>
                    );
                })}

            </FormWizard>
        </div>
    );
};
