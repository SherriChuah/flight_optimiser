import { checkValidateTab, errorMessages } from './../../errorChecking/validationCheck';

export const getFormValidation = (setDestinationValue, destinationValue) => {
    return {
        STEP_1: {
            attributes: {},
            function: setDestinationValue
        },
        STEP_2: {
            attributes: {isValid: checkValidateTab(destinationValue), validationError: errorMessages},
            
        },
        STEP_3: {
            attributes: {}
        },
        STEP_4: {
            attributes: {}
        }
    }
}