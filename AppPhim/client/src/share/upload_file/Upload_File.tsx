import React, { useState } from "react";
import uploadFileIcon from "src/assets/images/update_file.svg";
import "src/share/upload_file/Upload_File.scss";
import { RootState } from "src/app/store";
import { useAppSelector, useAppDispatch } from "src/app/hooks";
import { uploadActions } from "src/redux/reducer/upload/UploadReducer";
import { ROOT_URL_UPLOAD } from "src/config/ApiConstants";

interface UploadFileProps {}

const UploadFile: React.FC<UploadFileProps> = (props) => {
    const dispatch = useAppDispatch();
    const [uploadFile, setUploadFile] = useState<File | undefined>();
    const filename = useAppSelector((state: RootState) => state.uploadReducer.filename);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target as HTMLInputElement & {
            files: FileList;
        };
        setUploadFile(files.files[0]);
        const file: File = files.files[0];
        console.log(file);
        dispatch(uploadActions.reqDataUpload({ file }));
        console.log(ROOT_URL_UPLOAD+filename);
    };

    return (
        <div className="upload_file">
            <label htmlFor="file" className="custom-file-upload">
                <div className="icon">{filename ? <img className="img_film" src={ROOT_URL_UPLOAD+filename} alt="img film" /> : <img className="img_film" src={uploadFileIcon} alt="img film" />}</div>
                <div className="text">{uploadFile ? <span>{uploadFile.name}</span> : <span>Click to upload image</span>}</div>
                <input id="file" type="file" onChange={handleImageUpload} />
            </label>
        </div>
    );
};

export default UploadFile;
