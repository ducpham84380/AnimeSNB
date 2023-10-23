import React, { useState } from "react";
import logoHeader from "src/assets/images/logo.png";
import Account from "src/share/account/Account";
import Search from "src/share/search/Search";
import Notification from "src/share/notification/Notification";
import "src/components/layout/header/Header.scss";
interface HeaderProps {
    onDataSentMedia: (dataFromChildMedia: number) => void;
}

/**
 * Login
 * @param {object} props
 * @return {jsx}
 */

const Header: React.FC<HeaderProps> = ({onDataSentMedia}) => {
    const [isChecked, setIsChecked] = useState(true);

    const handleMenuItemClick = (itemId: number) => {
        onDataSentMedia(itemId);
    };
    return (
        <React.Fragment>
            <header>
                <nav className="container">
                    <div className="header-logo">
                        <img src={logoHeader} alt="logo Header" className="logo-img"></img>
                    </div>
                    <div className="tabs">
                        <input type="radio" id="tab1" name="tab" defaultChecked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} onClick={() => handleMenuItemClick(0)}/>
                        <label htmlFor="tab1">Home</label>
                        <input type="radio" id="tab2" name="tab" onClick={() => handleMenuItemClick(1)}/>
                        <label htmlFor="tab2">TV Show</label>
                        <input type="radio" id="tab3" name="tab" onClick={() => handleMenuItemClick(2)}/>
                        <label htmlFor="tab3">Movie</label>
                        <input type="radio" id="tab4" name="tab" onClick={() => handleMenuItemClick(3)}/>
                        <label htmlFor="tab4">Anime</label>
                        <input type="radio" id="tab5" name="tab" onClick={() => handleMenuItemClick(4)}/>
                        <label htmlFor="tab5">Tokusatsu</label>
                    </div>
                    <div className="header-right">
                        <Search />
                        <Notification />
                        <Account />
                    </div>
                </nav>
            </header>
        </React.Fragment>
    );
};

export default Header;
