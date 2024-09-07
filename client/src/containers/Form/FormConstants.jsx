// import Single from 'template/images/single.png'
// import Group from 'template/images/group.png'

import { DestinationStep } from "../../components/FormSteps/DestinationStep/DestinationStep"


export const STEP_INFO = {
    STEP_1: {
        progress_title: 'Destination',
        content: DestinationStep
    },
    STEP_2: {
        progress_title: "Search Details",
    },
    STEP_3: {
        progress_title: "People Details"
    },
    STEP_4: {
        progress_title: "Flight Results"
    }
}

// export const SUBMIT_HEADER = {
//     STEP_4: {
//         title: "Flight Results",
//         subTitle: "You have completed onboarding, you can start using the Eden!"
//     }
// }

// export const WEBSITE = 'www.eden.com/'

// export const BUTTON_TEXT = {
//     default:'Create Workspace',
//     launch:'Launch Eden'
// }

// export const STEPS = {
//     STEP_1: 'STEP_1',
//     STEP_2: 'STEP_2',
//     STEP_3: 'STEP_3',
//     STEP_4: 'STEP_4',
//     SUBMIT:'SUBMIT'
// }

// const { SUBMIT, ...ALL_STEPS } = STEPS
export const ALL_STEPS_LIST = Object.keys(STEP_INFO)

// export const NEXT_STEP = {
//     STEP_1: 'STEP_2',
//     STEP_2: 'STEP_3',
//     STEP_3: 'STEP_4',
//     STEP_4: 'SUBMIT',
// }


export const FORM_CONTENT = {
    STEP_1: [{
        name: "airport-search",
        label: "",
        placeholder: "Search for airport...",
    }],
    STEP_2: [{
        name: "workSpaceName",
        label: "Workspace Name",
        placeholder: "Eden",
    }, {
        name: "workSpaceUrl",
        label: "Workspace Url (Optional)",
        placeholder: "Example.com",
        type: 'website'
    },
    ],
    STEP_3: [{
        type:'groupCheckBox',
        elements:[
            {
                name:'single',
                icon: "Hello",
                heading: "For myself",
                subHeading: "Write better. Think more clearly. Stay organized.",
            }, {
                name:"group",
                icon: "Hello",
                heading: "With My team",
                subHeading: "Wikis, docs, tasks & projects. all in one place",
            }
        ]
    }]
}
