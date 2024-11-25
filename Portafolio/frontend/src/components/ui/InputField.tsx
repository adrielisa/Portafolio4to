import { UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
    label: string;
    placeholder: string;
    type?: string; //If it is text, email password..
    register: UseFormRegisterReturn;
    error?: string; //When the validation fails, this message will appear
    classname?: string;
}

const InputField: React.FC<InputFieldProps> = ({label, placeholder, type = 'text', register, error, classname}) => {
    return(
        <div className={`mb-4 ${classname}`}> {/*Usamos doble {} porque al no ser estático se debe usar*/ }
            <label className="block mb-1 font-semibold">{label}</label>
            <input 
            type={type} 
            placeholder={placeholder}
            {...register} //Connects the field to the react hook form, using the register object, allowing its management and validatios
            />
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default InputField;