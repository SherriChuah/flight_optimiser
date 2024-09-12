import { useState, useRef } from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import { ALL_STEPS_LIST, STEP_INFO } from "./FormConstants";
import { getFormValidation } from './FormConfig';
import { Button } from './FormStyle';


export const Form = () => {
    const [destinationValue, setDestinationValue] = useState('');

    const handleComplete = () => {
        console.log("Form completed!");
        // Handle form completion logic here
    };

    const handleInputChange = (setFunction, newInputValue) => {
        setFunction(newInputValue);
    };

    const FORM_VALIDATION = getFormValidation(setDestinationValue, destinationValue);

    const defaultFunction = () => {};

    // const formWizardRef = useRef(null);

    // const goToStep = (stepIndex) => {
    //     if (formWizardRef.current) {
    //         formWizardRef.current.goToStep(stepIndex);
    //     }
    // };

    const tabChanged = ({
        prevIndex,
        nextIndex,
      }) => {
        console.log("prevIndex", prevIndex);
        console.log("nextIndex", nextIndex);
      };

    return (
        <FormWizard
            stepSize="xs"
            shape="circle"
            color="var(--primary)"
            onComplete={handleComplete}
            onTabChange={tabChanged}
            nextButtonTemplate={(handleNext) => (
                <Button onClick={handleNext}>
                  Next
                </Button>
            )}
        >
            {ALL_STEPS_LIST.map((step, index, arr) => {
                const StepComponent = STEP_INFO[step].content;
                return (
                    <FormWizard.TabContent
                        title={STEP_INFO[step] && STEP_INFO[step].progress_title}
                        {...FORM_VALIDATION[step]['attributes']}
                    ><StepComponent step={step} inputValidation={[handleInputChange, FORM_VALIDATION[step]?.function ?? defaultFunction]} /></FormWizard.TabContent>
                );
            })}

        </FormWizard>
    );
};
