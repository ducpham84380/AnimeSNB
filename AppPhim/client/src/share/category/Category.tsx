import React, { useEffect, useState } from "react";

import { RootState } from "src/app/store";
import { useAppSelector, useAppDispatch } from "src/app/hooks";
import { enginesAction } from "src/redux/reducer/engines/EnginesReducer";
import "src/share/category/Category.scss";

interface CategoryProps {
    idMedia: number;
    // onDataSentMenu: (dataFromChildMenu: number) => void;
}

const Category: React.FC<CategoryProps> = ({ idMedia }) => {
    const dispatch = useAppDispatch();
    const category = useAppSelector((state: RootState) => state.enginesReducer.category);
    const [selectedItemId, setSelectedItemId] = useState(1);

    const handleMenuItemClick = (itemId: number) => {
        setSelectedItemId(itemId);
    };

    useEffect(() => {
        if (idMedia) {
            dispatch(enginesAction.reqGetCategory({ idMedia }));
        }
    }, [idMedia, dispatch]);

    return (
        <React.Fragment>
            <div className="category-box">
                {category !== null && category !== undefined && idMedia !== 0 &&(
                    <div className="category-items">
                        {category.map((item) => (
                            <button className={selectedItemId === item.id ? "selected" : ""} key={item.id} onClick={() => handleMenuItemClick(item.id)}>
                                {item.title}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default Category;
