import React, { useState } from "react";
import logoHeader from "src/assets/images/logo.png";
import img1 from "src/assets/images/home-solid.svg";
import img2 from "src/assets/images/table-fill.svg";
import img3 from "src/assets/images/rss-interface.svg";
import img4 from "src/assets/images/statistics.svg";
import img5 from "src/assets/images/account-cog.svg";
import img6 from "src/assets/images/setting.svg";
import "src/share/menu_admin/Menu_admin.scss";

interface MenuAdminProps {
    onDataSentPage: (dataFromChildPage: string) => void;
}

const MenuAdmin: React.FC<MenuAdminProps> = ({ onDataSentPage }) => {
    const [isChecked, setIsChecked] = useState(true);

    const handleMenuNameClick = (namePage: string) => {
        onDataSentPage(namePage);
    };

    return (
        <div className="menu_admin_box">
            <div className="logo_menu">
                <img className="img_logo_menu" src={logoHeader} alt="" />
            </div>
            <hr className="hr_menu_user"></hr>
            <div className="menu_box">
                <div className="menu_items">
                    <input type="radio" id="menu1" name="menu" defaultChecked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} onClick={() => handleMenuNameClick("Dashboard")} />
                    <label className="menu" htmlFor="menu1">
                        <img src={img1} alt="Dashboard" className="sliderImg_1" />
                        <span>Dashboard</span>
                    </label>
                    <input type="radio" id="menu2" name="menu" onClick={() => handleMenuNameClick("Data Management")} />
                    <label className="menu" htmlFor="menu2">
                        <img src={img2} alt="Data Management" className="sliderImg_1" />
                        <span>Data Management</span>
                    </label>
                    <input type="radio" id="menu3" name="menu" onClick={() => handleMenuNameClick("Interface Management")} />
                    <label className="menu" htmlFor="menu3">
                        <img src={img3} alt="Interface Management" className="sliderImg_1" />
                        <span>Interface Management</span>
                    </label>
                    <input type="radio" id="menu4" name="menu" onClick={() => handleMenuNameClick("Statistic")} />
                    <label className="menu" htmlFor="menu4">
                        <img src={img4} alt="Statistic" className="sliderImg_1" />
                        <span>Statistic</span>
                    </label>
                    <input type="radio" id="menu5" name="menu" onClick={() => handleMenuNameClick("Account")} />
                    <label className="menu" htmlFor="menu5">
                        <img src={img5} alt="Account" className="sliderImg_1" />
                        <span>Account Management</span>
                    </label>
                    <input type="radio" id="menu6" name="menu" onClick={() => handleMenuNameClick("Setting")} />
                    <label className="menu" htmlFor="menu6">
                        <img src={img6} alt="Setting" className="sliderImg_1" />
                        <span>Setting</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default MenuAdmin;
