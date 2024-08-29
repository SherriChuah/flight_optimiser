import { CustomInput, InputWrapper, Label, CustomCheck, LogoImg } from "./Input_style";

const CheckBox = ({ icon, heading, subHeading, onClick, name, form }) => (
    <CustomCheck onClick={() => onClick({ value: name, fieldName: 'onBoardType' })} active={form.onBoardType===name}>
        <LogoImg src={icon}/>
        <p className="heading">{heading}</p>
        <p className='sub-heading text-mute'>{subHeading}</p>
    </CustomCheck>
)

const MultiCheck = ({ elements, ...other })=>(
    <div className="flex-center">
        {elements.map(item => <CheckBox {...item} {...other}  />)}
    </div>
)


export const InputBox = ({ label, onChange, name, placeholder, form }) => (
    <InputWrapper>
        <Label htmlFor={label}>{label}</Label>
        <CustomInput placeholder={placeholder} onChange={onChange} name={name} value={form[name]} />
    </InputWrapper>
)

const Mapper = {
    checkbox: CheckBox,
    default: InputBox,
    groupCheckBox: MultiCheck
}

export const Input = (props) => {  
    console.log("THIS IS HERE", props)
    const Component = Mapper[props.type] || Mapper.default
    return <Component {...props} />
}

Input.defaultProps = {
    type:'default'
}