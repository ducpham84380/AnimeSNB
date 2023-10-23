import React, { useState } from "react";
import Header from "src/components/layout/header/Header";
import Category from "src/share/category/Category";
import Slider from "src/share/slider/Slider";
import "src/components/main/Main.scss";
interface MainProps {

}

/**
 * Login
 * @param {object} props
 * @return {jsx}
 */

const Main: React.FC<MainProps> = (props) => {
    const [idMedias, setIdMedia] = useState(0);


    const handleSetIdMedia = (onDataSentMedia:number) => {
        setIdMedia(onDataSentMedia);
    };

    return (
        <React.Fragment>
            <div className="header">
                <Header onDataSentMedia={handleSetIdMedia}/>
            </div>
            <div className="aside-1">
                <Slider />
            </div>
            <div className="aside-2">
                <Category idMedia={idMedias} />
            </div>
        </React.Fragment>
    );
};

export default Main;
