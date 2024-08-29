// import "react-step-progress-bar/styles.css";
// import { Step, ProgressBar } from "react-step-progress-bar";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import { ALL_STEPS_LIST } from "../../containers/Form/Form_constants";
import { ChildProgress } from "./Progress_style";



const getStepPosition = (currentStep) => {
    return ALL_STEPS_LIST.findIndex(step => step === currentStep) + 1;
};

export const Progress = ({ currentStep }) => (
    // <ProgressBar
    //     width={500}
    //     percent={100 * (getStepPosition(currentStep) / ALL_STEPS_LIST.length)}
    //     filledBackground="#664de5"
    //     height={2}
    // >
    //     {ALL_STEPS_LIST.map((_, index, arr) => {
    //         return (
    //             <Step
    //                 position={100 * (index / arr.length)}
    //                 transition="scale"
    //                 children={({ accomplished }) => (
    //                     <ChildProgress className='flex-center' accomplished={accomplished}>
    //                         {accomplished && index+1}
    //                         {!accomplished && <div className='white-bg flex-center'>
    //                             {index + 1}
    //                         </div>}
    //                     </ChildProgress>
    //                 )}
    //             />
    //         );
    //     })}
    // </ProgressBar>
    <FormWizard
        title="Testing"
        nextButtonText="Go next"
    >
        {ALL_STEPS_LIST.map((_, index, arr) => {
            return (
                <FormWizard.TabContent
                    title="" // use the config to add titles
                    // children={({ accomplished }) => (
                    //     <ChildProgress className='flex-center' accomplished={accomplished}>
                    //         {accomplished && index+1}
                    //         {!accomplished && <div className='white-bg flex-center'>
                    //             {index + 1}
                    //         </div>}
                    //     </ChildProgress>
                    // )}
                />
            );
        })}
    </FormWizard>
);

