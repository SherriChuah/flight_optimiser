import { checkValidateTab, errorMessages, filledMinimumTwo, filledMinimumTwoErrorMessage } from '../../errorChecking/validationCheck';

export const getFormValidation = (setDestinationValue, destinationValue, setTravelDates, setPeopleDetails, peopleDetails) => {
    return {
        STEP_1: {
            function: setDestinationValue
        },
        STEP_2: {
            attributes: {isValid: checkValidateTab(destinationValue), validationError: errorMessages},
            function: setTravelDates
        },
        STEP_3: {
            function: setPeopleDetails
        },
        STEP_4: {
            attributes: {isValid: filledMinimumTwo(peopleDetails), validationError: filledMinimumTwoErrorMessage},
        }
    }
}