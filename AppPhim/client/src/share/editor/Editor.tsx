import React, { useState, useRef } from "react";
import "src/share/editor/Editor.scss";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface ModalAddProps {}

const Editors: React.FC<ModalAddProps> = () => {
    const editorRef = useRef<Editor | null>(null);
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

    const handleEditorChange = (newEditorState: EditorState) => {
        setEditorState(newEditorState);
    };

    const handleEditorImage = () => {
        return new Promise((resolve, reject) => {
            resolve({ data: { link: "https://i.pinimg.com/564x/ab/e6/17/abe617102e9fcad4ed11c066a367c0ba.jpg" } });
        });
    };

    const toolbar = {
        options: ["inline", "blockType", "fontSize", "fontFamily", "list", "textAlign", "colorPicker", "link", "embedded", "emoji", "image", "remove", "history"],
        inline: {
            inDropdown: false,
            dropdownClassName: "custom-font-size-dropdown",
            options: ["bold", "italic", "underline"],
        },
        blockType: {
            inDropdown: false,
            options: ["Normal", "H1", "H2", "H3", "H4", "H5", "H6"],
        },
        fontSize: {
            inDropdown: true,
            options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
        },
        fontFamily: {
            inDropdown: true,
            options: ["Arial", "Georgia", "Impact", "Tahoma", "Times New Roman", "Verdana"],
        },
        list: {
            inDropdown: false,
            options: ["unordered", "ordered"],
        },
        textAlign: {
            options: ["left", "center", "right", "justify"],
        },
        image: {
            // component: handleEditorImage(),
            urlEnabled: true,
            uploadEnabled: true,
            alignmentEnabled: true,
            // uploadCallback: handleEditorImage(),
            previewImage: false,
            inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
            defaultSize: {
                height: "auto",
                width: "auto",
            },
        },
    };

    return (
        <div>
            <Editor
                ref={editorRef}
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                toolbar={toolbar}
                wrapperClassName="editor-wrapper"
                editorClassName="editor-content"
                toolbarClassName="toolbar-class"
                mention={{
                    separator: " ",
                    trigger: "@",
                    suggestions: [
                        { text: "APPLE", value: "apple", url: "apple" },
                        { text: "BANANA", value: "banana", url: "banana" },
                        { text: "CHERRY", value: "cherry", url: "cherry" },
                        { text: "DURIAN", value: "durian", url: "durian" },
                        { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
                        { text: "FIG", value: "fig", url: "fig" },
                        { text: "GRAPEFRUIT", value: "grapefruit", url: "grapefruit" },
                        { text: "HONEYDEW", value: "honeydew", url: "honeydew" },
                    ],
                }}
            />
        </div>
    );
};

export default Editors;
