interface IInputProps {
    type: string;
    placeholder: string;
}


const Input = ({type, placeholder}: IInputProps) =>{
    return <Input type={type} placeholder={placeholder}/>;
};

export default Input;