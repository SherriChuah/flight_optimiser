import { useState, useRef, useEffect } from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import { ALL_STEPS_LIST, STEP_INFO } from "./FormConstants";
import { getFormValidation } from './FormConfig';
import { Button, FormContainer, Title } from './FormStyle';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';


export const Form = () => {
    const navigate = useNavigate();

    const [responseMessage, setResponseMessage] = useState([]);

    const [destinationValue, setDestinationValue] = useState('');
    const [travelDates, setTravelDates] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const [peopleDetails, setPeopleDetails] = useState([]);


    const handleComplete = async (e) => {
        console.log("Form completed!");

        const dataToSend = { data: {
            destination: destinationValue,
            travelDates: travelDates,
            peopleDetails: peopleDetails
        }}

        try {
            const response = await axios.post('http://127.0.0.1:8080/process-search', dataToSend)

            setResponseMessage(response.data.message);
        } catch (error) {
            console.error('Error posting data:', error);

            setResponseMessage('An error occurred. Please try again');
        };

        navigate('/results', { state: { destinationValue, travelDates, peopleDetails} });
    };

    const handleInputChange = (setFunction, newInputValue) => {
        setFunction(newInputValue);
    };

    const FORM_VALIDATION = getFormValidation(setDestinationValue, destinationValue, setTravelDates, setPeopleDetails, peopleDetails);

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

    return (
        <FormContainer>
            <Title>Booking Flights <br />Made Easier.</Title>

            <FormWizard
                ref={formWizardRef}
                stepSize="xs"
                shape="circle"
                color="var(--primary)"
                onComplete={handleComplete}
                // onTabChange={tabChanged}
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
                finishButtonTemplate={(handleComplete) => (
                    <Button onClick={handleComplete}>
                    Results
                    </Button>
                )}
            >
                {ALL_STEPS_LIST.map((step, index, arr) => {
                    const StepComponent = STEP_INFO[step].content;
                    return (
                        <FormWizard.TabContent
                            key={step}
                            title={STEP_INFO[step] && STEP_INFO[step].progress_title}
                            {...FORM_VALIDATION[step]['attributes']}
                        ><StepComponent 
                            step={step} 
                            inputValidation={[handleInputChange, FORM_VALIDATION[step]?.function ?? defaultFunction]} 
                            goToTab={goToTab}
                            inputValue={index == 0 ? destinationValue : index == 1 ? travelDates : index == 2 ? peopleDetails : [destinationValue, travelDates, peopleDetails]}
                        /></FormWizard.TabContent>
                    );
                })}
            </FormWizard>
        </FormContainer>
        
    );
};
