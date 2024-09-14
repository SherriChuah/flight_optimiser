import { useState, useRef, useEffect } from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import { ALL_STEPS_LIST, STEP_INFO } from "./FormConstants";
import { getFormValidation } from './FormConfig';
import { Button, FormContainer, Title } from './FormStyle';


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

    const formWizardRef = useRef(null);

    const goToTab = (stepIndex) => {
        if (formWizardRef.current) {
            formWizardRef.current.goToTab(stepIndex);
        }
        window.history.pushState({ stepIndex });
    };

    useEffect(() => {
        const handlePopState = (event) => {
          if (event.state && typeof event.state.stepIndex !== "undefined") {
            formWizardRef.current.goToStep(event.state.stepIndex);
          }
        };
    
        window.addEventListener("popstate", handlePopState);
    
        // Cleanup event listener when component is unmounted
        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

    const tabChanged = () => {
        console.log('Destination:', destinationValue);
      };

    return (
        <FormContainer>
            <Title>Booking Flights <br />Made Easier.</Title>

            <FormWizard
                ref={formWizardRef}
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
                backButtonTemplate={(handleNext) => (
                    <Button onClick={handleNext}>
                    Back
                    </Button>
                )}
            >
                {ALL_STEPS_LIST.map((step, index, arr) => {
                    const StepComponent = STEP_INFO[step].content;
                    return (
                        <FormWizard.TabContent
                            title={STEP_INFO[step] && STEP_INFO[step].progress_title}
                            {...FORM_VALIDATION[step]['attributes']}
                        ><StepComponent 
                            step={step} 
                            inputValidation={[handleInputChange, FORM_VALIDATION[step]?.function ?? defaultFunction]} 
                            goToTab={goToTab}
                            inputValues={index == 0 ? [destinationValue] : null}
                        /></FormWizard.TabContent>
                    );
                })}

            </FormWizard>
        </FormContainer>
        
    );
};
