import React from "react";
import "src/share/input_text/Input_Text.scss";

interface InputTextProps {
    titleInput: string;
    onDataSentInput: (dataFromChildInput: string) => void;
}

const InputText: React.FC<InputTextProps> = ({titleInput,onDataSentInput}) => {

    const handleMenuItemClick = ( title: string) => {
        onDataSentInput(title);
    };
    return (
        <div className="wrapper-input">
            <label>
                <input required type="text" className="input" onChange={(e) => handleMenuItemClick(e.target.value)} />
                <span>{titleInput}</span>
            </label>
        </div>
    );
};

export default InputText;
