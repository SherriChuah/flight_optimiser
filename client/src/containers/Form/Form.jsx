// import { useState } from "react";
// import { Heading, Button, CustomForm, Title, SubTitle, Success } from "./FormStyle"
// // import { DestinationStep } from "../../components/FormSteps/DestinationStep/DestinationStep";

import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import { ALL_STEPS_LIST, STEP_INFO } from "./FormConstants";

// export const Form = () => {
//     const [step, setStep] = useState(STEPS.STEP_1)
//     const [form, setForm] = useState({})

//     const onChange = (e)=>{
//         const {value, name } = e.target
//         setForm(prev=>({...prev, [name]:value}))
//     }
//     const onItemClick = ({ fieldName, value })=>{
//         setForm(prev => ({ ...prev, [fieldName]: value }))
//     }

//     const incrementStep = () => {
//         const nextSteps = NEXT_STEP[step]
//         if(nextSteps!==STEPS.SUBMIT){
//             setStep(nextSteps)
//             return
//         }
//         setStep(STEPS.STEP_1)
//     }

//     const submitForm = (e) => {
//         e.preventDefault()
//         incrementStep()
//     }

//     // return (
//     //     <div>
//     //         <div className="flex-center py-10">
//     //             <Progress currentStep={step} />
//     //         </div>
//     //         {HEADERS[step] && <Heading>
//     //             <Title className="title text-center">{HEADERS[step].title}</Title>
//     //             <SubTitle className="sub-title text-mute text-center">{HEADERS[step].subTitle}</SubTitle>
//     //         </Heading>}
//     //         <CustomForm onSubmit={submitForm}>
//     //             {step !== STEPS.STEP_4 && FORM[step].map(item => (
//     //                 <Input key={item.name} {...item} onChange={onChange} form={form} onClick={onItemClick}/>
//     //             ))}
//     //             {step === STEPS.STEP_4 && (
//     //                 <div>
//     //                     <div className="flex-center">
//     //                         <Success className='flex-center'>&#10003;</Success>
//     //                     </div>
//     //                     <Heading>
//     //                         <Title className="title text-center">{SUBMIT_HEADER[step].title.replace("#Eden", form.fullName || "Eden")}</Title>
//     //                         <SubTitle className="sub-title text-mute text-center">{SUBMIT_HEADER[step].subTitle}</SubTitle>
//     //                     </Heading>
//     //                 </div>)
//     //             }
//     //             <Button type="submit" className='primary-bg-color'>{
//     //                 step === STEPS.STEP_4 ? BUTTON_TEXT.launch : BUTTON_TEXT.default
//     //             }</Button>
//     //         </CustomForm>
//     //     </div>
//     // )

//     return (
//         <div className="flex-center py-10">
//             <FormWizard
//                 title="Testing"
//                 nextButtonText="Go next"
//             >
//                 {ALL_STEPS_LIST.map((_, index, arr) => {
//                     return (
//                         <FormWizard.TabContent
//                             title={HEADERS[step] && <Heading>
//                                 <Title className="title text-center">{HEADERS[step].title}</Title>
//                                 {/* <SubTitle className="sub-title text-mute text-center">{HEADERS[step].subTitle}</SubTitle> */}
//                             </Heading>} // use the config to add titles
//                             // children={({ accomplished }) => (
//                             //     <ChildProgress className='flex-center' accomplished={accomplished}>
//                             //         {accomplished && index+1}
//                             //         {!accomplished && <div className='white-bg flex-center'>
//                             //             {index + 1}
//                             //         </div>}
//                             //     </ChildProgress>
//                             // )}
//                         />
//                     );
//                 })}
//             </FormWizard>
//         </div>
//     );
// }

export const Form = () => {

    // const [step, setStep] = useState(STEPS.STEP_1)

    const handleComplete = () => {
        console.log("Form completed!");
        // Handle form completion logic here
    };
    // const tabChanged = ({ prevIndex, nextIndex }) => {
    //     console.log("prevIndex", prevIndex);
    //     console.log("nextIndex", nextIndex);
    // };

    // const incrementStep = () => {
    //     const nextSteps = NEXT_STEP[step]
    //     if(nextSteps!==STEPS.SUBMIT){
    //         setStep(nextSteps)
    //         return
    //     }
    //     setStep(STEPS.STEP_1)
    // }

    return (
        <div>
            <FormWizard
                stepSize="xs"
                shape="circle"
                color="var(--primary)"
                onComplete={handleComplete}
                // nextButtonDisabled={!isNextButtonEnabled}
                // onTabChange={tabChanged}
            >
                {ALL_STEPS_LIST.map((step, index, arr) => {
                    const StepComponent = STEP_INFO[step].content;
                    return (
                        <FormWizard.TabContent
                            title={STEP_INFO[step] && STEP_INFO[step].progress_title}
                        ><StepComponent step={step} /></FormWizard.TabContent>
                    );
                })}

            </FormWizard>
        </div>
    );
};
