interface ButtonProps {     //A interface defines what kinds of props the componnent button will receive
    text: string; //text which will appear inside the button
    classname?: string;    // "?" add this at the end of a variable means that variable will be optional to use
    onClick?: () => void;  //This functional option will be executed when the user click the button, this doesn't receive parameters and doesn't return a value, that's why it is VOID. It is called onClick but it's just the name, i can add it the function OnClick or another one.
}

const Button: React.FC<ButtonProps> = ({ text, classname, onClick}) => { //Declare a constant called Button, it will be the component, "Reac.FC<ButtonProps>" says the Button is a functional component from react, "ButtonProps" says the component will receive props which are defined in ButtonProps
    return(
        <button
        onClick={onClick} //The function onCLick declared in ButtonProps will be "activated" giving it the function "OnClick"
        className={`text-white font-bold py-2 px-4 rounded ${classname}`} 
        >
            {text}
        </button>
    )
}

export default Button;