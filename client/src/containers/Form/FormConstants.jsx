import { DestinationStep } from "../../components/FormSteps/DestinationStep/DestinationStep";
import { SearchDetailsStep } from "../../components/FormSteps/SearchDetailsStep/SearchDetailsStep";
import { PeopleDetailsStep } from "../../components/FormSteps/PeopleDetailsStep/PeopleDetailsStep";
import { FlightResultStep } from "../../components/FormSteps/FlightResultStep/FlightResultStep";



export const STEP_INFO = {
    STEP_1: {
        progress_title: 'Destination',
        content: DestinationStep
    },
    STEP_2: {
        progress_title: "Search Details",
        content: SearchDetailsStep
    },
    STEP_3: {
        progress_title: "People Details",
        content: PeopleDetailsStep
    },
    STEP_4: {
        progress_title: "Flight Results",
        content: FlightResultStep
    }
}

export const ALL_STEPS_LIST = Object.keys(STEP_INFO)

export const FORM_CONTENT = {
    STEP_1: [{
        name: "airport-search",
        label: "",
        placeholder: "Search for airport...",
    }],
    STEP_2: [],
    STEP_3: []
}