import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "src/components/layout/data_Management/Data_Management.scss";
import Table from "src/share/table/Table";
import RadioMedia from "src/share/radio_media/Radio_Media";
import InputText from "src/share/input_text/Input_Text";
import ModalAdd from "src/share/modal_add/Modal_Add";
import { RootState } from "src/app/store";
import { useAppSelector, useAppDispatch } from "src/app/hooks";
import { enginesAction } from "src/redux/reducer/engines/EnginesReducer";
import categoryIcon from "src/assets/images/baseline-category.svg";
import filmIcon from "src/assets/images/film-plus.svg";
import episodesIcon from "src/assets/images/episodes.svg";
import addIcon from "src/assets/images/addIcon.svg";
interface DataManagementProps {}
interface DataItem {
    id: number;
    title: string;
    media: string;
}

interface DataItemFilm {
    id: number;
    categories: string;
    title: string;
    title_image: string;
    image: string;
    language: string;
    year: string;
    reviews: string;
    views: number;
}
/**
 * Login
 * @param {object} props
 * @return {jsx}
 */

const DataManagement: React.FC<DataManagementProps> = () => {
    const [isCheckedDataManagement, setIsCheckedDataManagement] = useState(true);
    const [isReset, setIsReset] = useState(false);
    const [nameDisplay, setNameDisplay] = useState(0);
    const [idMedia, setIdMedia] = useState(1);
    const [idCategory, setIdCategory] = useState(0);
    const [nameCategory, setNameCategory] = useState("");
    const [onModal, setOnModal] = useState(false);
    const [nameMedia, setNameMedia] = useState("TV Show");
    const timeSetTwoHour = new Date();
    const dispatch = useAppDispatch();
    const category = useAppSelector((state: RootState) => state.enginesReducer.category);
    const media = useAppSelector((state: RootState) => state.enginesReducer.media);
    const film = useAppSelector((state: RootState) => state.enginesReducer.film);
    const handleMenuItemClick = (itemId: number) => {
        setNameDisplay(itemId);
    };

    const handleSetIdMedia = (onDataSentMedia: number) => {
        setIdMedia(onDataSentMedia);
    };

    const handleSetInput = (onDataSentInput: string) => {
        setNameCategory(onDataSentInput);
    };
    
    const handleSetDataTable = (onDataTable: DataItem[]) => {
        setIdCategory(onDataTable[0].id);
        setNameCategory(onDataTable[0].title);
        setNameMedia(onDataTable[0].media);
    };

    const handleSetDataTableFilm = (onDataTable: DataItemFilm[]) => {
        setIdCategory(onDataTable[0].id);
        setNameCategory(onDataTable[0].title);
    };

    const toggle = () => {
        setOnModal(!onModal);
    };

    const handleIsShowAddModal = () => {
        setOnModal(true);
    };

    const handleResetCategory = () => {
        setIsReset(true);
        setIdCategory(0);
        setNameCategory("");
        setNameMedia("TV Show");
    };

    const handleCreateCategory = () => {
        dispatch(enginesAction.reqCreateCategory({ idMedia, nameCategory }));
        handleResetCategory();
    };

    const handleUpdateCategory = () => {
        dispatch(enginesAction.reqUpdateCategory({ idMedia, nameCategory, idCategory }));
        handleResetCategory();
    };

    const handleDeleteCategory = () => {
        dispatch(enginesAction.reqDeleteCategory({ idCategory }));
        handleResetCategory();
    };

    useEffect(() => {
        dispatch(enginesAction.reqGetCategoryAll(0));
        dispatch(enginesAction.reqGetMediaAll(0));
        dispatch(enginesAction.reqGetFilm(0));
        setIsReset(false);
    }, [dispatch, isReset]);

    const modalRoot = document.getElementById("root-modal");

    const modalAdd = modalRoot ? createPortal(<ModalAdd isShow={onModal} title={"再度ログインするには上記の時間までお待ちください"} timeSetTwoHour={timeSetTwoHour} onClose={toggle} />, modalRoot) : null;

    return (
        <React.Fragment>
            {modalAdd}
            <div id="root-modal"></div>
            <div className="data_management_menu">
                <input type="radio" id="tab1" name="tab" defaultChecked={isCheckedDataManagement} onChange={(e) => setIsCheckedDataManagement(e.target.checked)} onClick={() => handleMenuItemClick(0)} />
                <label className="category" htmlFor="tab1">
                    <img src={categoryIcon} alt="Data Management" className="img_icon_data_management_menu" />
                    <span>Category</span>
                </label>
                <input type="radio" id="tab2" name="tab" onClick={() => handleMenuItemClick(1)} />
                <label className="film" htmlFor="tab2">
                    <img src={filmIcon} alt="Data Management" className="img_icon_data_management_menu" />
                    <span>Film</span>
                </label>
                <input type="radio" id="tab3" name="tab" onClick={() => handleMenuItemClick(2)} />
                <label className="episodes" htmlFor="tab3">
                    <img src={episodesIcon} alt="Data Management" className="img_icon_data_management_menu" />
                    <span>Episodes</span>
                </label>
            </div>
            <div className="data_management_show">
                <div>
                    <div className="table_category">
                        {nameDisplay === 1 && (
                            <button className="btn_add" onClick={handleIsShowAddModal}>
                                <img src={addIcon} alt="icon img" className="img_icon_btn_add" />
                            </button>
                        )}
                        <Table dataCategory={category} onDataTable={handleSetDataTable} nameDisplay={nameDisplay} dataFilm={film} onDataTableFilm={handleSetDataTableFilm} />
                    </div>
                    <div className="form_category">
                        {nameDisplay === 0 && (
                            <div className="flex">
                                <h2> form add </h2>
                                <RadioMedia data={media} onDataSentMedia={handleSetIdMedia} isCheck={nameMedia} />
                                <InputText titleInput={"Title category"} onDataSentInput={handleSetInput}/>
                                <button className="submit" onClick={handleCreateCategory}>
                                    Create
                                </button>
                                <button className="submit" onClick={handleUpdateCategory}>
                                    Update
                                </button>
                                <button className="submit" onClick={handleDeleteCategory}>
                                    Delete
                                </button>
                                <button className="submit" onClick={handleResetCategory}>
                                    Reset
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DataManagement;
