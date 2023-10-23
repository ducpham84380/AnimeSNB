import React, { useState } from "react";
import "src/share/modal_add/Modal_Add.scss";
import Editor from "src/share/editor/Editor";
import closeIcon from "src/assets/images/closeIcon.svg";
import UploadFile from "src/share/upload_file/Upload_File";
import InputText from "src/share/input_text/Input_Text";


interface ModalAddProps {
    isShow: boolean;
    title: string;
    timeSetTwoHour: Date;
    onClose: () => void;
}

const ModalAdd: React.FC<ModalAddProps> = ({ isShow, title, timeSetTwoHour, onClose }) => {
    const [nameCategory, setNameCategory] = useState("");
    const [nameCategory2, setNameCategory2] = useState("");

    const handleSetInput = (onDataSentInput: string) => {
        setNameCategory(onDataSentInput);
    };

    const handleSetInput2 = (onDataSentInput: string) => {
        setNameCategory2(onDataSentInput);
    };

    return (
        <>
            {isShow && (
                <div className="overlay-modal-add">
                    <div className="wrapper-modal-add">
                        <div className="content-modal-add">
                            <div className="div_btn_close">
                                <button className="btn_close" onClick={onClose}>
                                    <img src={closeIcon} className="iconWn" alt="warning" />
                                </button>
                            </div>
                            <div className="view-modal">
                                <div className="view-modal-add">
                                    <UploadFile />
                                    <InputText titleInput={"Title of the movie"} onDataSentInput={handleSetInput} />
                                    <InputText titleInput={"Movie Language"} onDataSentInput={handleSetInput2} />
                                    <InputText titleInput={"Date of Manufacture"} onDataSentInput={handleSetInput2} />
                                </div>
                                <div className="custom-editor">
                                    <Editor/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalAdd;
