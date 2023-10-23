import React, { useEffect } from "react";
import { RootState } from "src/app/store";
import { useAppSelector, useAppDispatch } from "src/app/hooks";
import { userActions } from "src/redux/reducer/user/UserReducer";
import { authActions } from "src/redux/reducer/auth/AuthReducer";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import "src/share/account/Account.scss";

interface AccountProps {}

const Account: React.FC<AccountProps> = (props) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const token = Cookies.get("token");
    const refreshToken = Cookies.get("refreshToken");
    const userData = useAppSelector((state: RootState) => state.userReducer.user);
    const isLoggedOut = useAppSelector((state: RootState) => state.authReducer.isLoggedOut);
    const accessTokenNew = useAppSelector((state: RootState) => state.userReducer.accessTokenNew);
    const idUser = userData.Id_User;

    useEffect(() => {
        dispatch(userActions.reqDataUser({ token, refreshToken }));
    }, [token, refreshToken, dispatch]);

    useEffect(() => {
        if (accessTokenNew) {
            Cookies.set("token", accessTokenNew, { path: "/", expires: 7 });
        }
    }, [accessTokenNew]);

    const handleGoLogin = () => {
        navigate("/login");
    };

    const handleLogOut = (e: { preventDefault: () => void }) => {
        dispatch(authActions.reqDataLogOut({ idUser, refreshToken }));
        dispatch(userActions.setLogout({}));
        Cookies.remove("token", { path: "/" });
        Cookies.remove("refreshToken", { path: "/" });
    };

    return (
        <div className="header_account">
            {token !== null && token !== undefined && isLoggedOut === false ? (
                <div className="header_account_img">
                    <div className="box_account">
                        <div className="box_img">
                            <img className="img_user" src={userData.Avatar} alt="" />
                        </div>

                        {userData !== null && userData !== undefined && (
                            <div className="box_span">
                                <span className="account_email">{userData.Email}</span>
                                <span className="username">{userData.Name}</span>
                            </div>
                        )}
                    </div>
                    <div className="menu_user">
                        <hr className="hr_menu_user"></hr>
                        <button className="change_pass_btn">Change Password</button>
                        <hr className="hr_menu_user"></hr>
                        <button className="logout_btn" onClick={handleLogOut}>
                            Logout
                        </button>
                    </div>
                </div>
            ) : (
                <div className="header_account_login">
                    <button className="login_btn" onClick={handleGoLogin}> Login </button>
                </div>
            )}
        </div>
    );
};

export default Account;
