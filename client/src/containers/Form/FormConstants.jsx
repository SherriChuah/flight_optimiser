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

export const ALL_STEPS_LIST = Object.keys(STEP_INFO)

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