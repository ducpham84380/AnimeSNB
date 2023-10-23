import React, { useState } from "react";
import "src/components/admin/Admin.scss";
import MenuAdmin from "src/share/menu_admin/Menu_admin";
import Account from "src/share/account/Account";
import Search from "src/share/search/Search";
import Notification from "src/share/notification/Notification";
import DataManagement from "src/components/layout/data_Management/Data_Management";
interface AdminProps {}

/**
 * Login
 * @param {object} props
 * @return {jsx}
 */

const Admin: React.FC<AdminProps> = (props) => {
    const [namePage, setNamePage] = useState("Dashboard");

    const handleSetNamePage = (onDataSentPage: string) => {
        setNamePage(onDataSentPage);
    };
    

    return (
        <main>
            <MenuAdmin onDataSentPage={handleSetNamePage} />
            <div className="container_admin">
                <div className="container_top">
                    <div className="container_top_left">
                        <span className="pages">Pages/</span>
                        <span className="name_Page">{namePage}</span>
                    </div>
                    <div className="container_top_right">
                        <Search />
                        <Notification />
                        <Account />
                    </div>
                </div>
                <div className="container_bottom">
                    <div className="page_display">
                        {namePage === "Data Management" && (
                            <div className="data_management">
                                <DataManagement />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Admin;
