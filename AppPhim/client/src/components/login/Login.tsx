import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { RootState } from "src/app/store";
import { useAppSelector, useAppDispatch } from "src/app/hooks";
import { authActions } from "src/redux/reducer/auth/AuthReducer";
import backgroundImg from "src/assets/images/login-bg.png";
import iconUser from "src/assets/images/user-3-line.svg";
import iconPW from "src/assets/images/lock-2-line.svg";
import iconEyeOff from "src/assets/images/eye-off-line.svg";
import iconEye from "src/assets/images/eye-line.svg";
import "src/components/login/Login.scss";

interface LoginProps {}

/**
 * Login
 * @param {object} props
 * @return {jsx}
 */

const Login: React.FC<LoginProps> = (props) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const refreshToken = useAppSelector((state: RootState) => state.authReducer.refreshToken);
    const token = useAppSelector((state: RootState) => state.authReducer.accessToken);
    const isLogin = useAppSelector((state: RootState) => state.authReducer.isLogin);
    const isAdmin = useAppSelector((state: RootState) => state.authReducer.isAdmin);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };


    useEffect(() => {
        if (isLogin) {
            Cookies.set("token", token, { path: "/" , expires: 7});
            Cookies.set("refreshToken", refreshToken, { path: "/" , expires: 7});
            dispatch(authActions.setLogout({}));
            if(!isAdmin){
                navigate("/");
            }else{
                navigate("/admin");
            }
        }
    }, [ isLogin, navigate, refreshToken, dispatch, token,isAdmin]);

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        dispatch(authActions.reqGetDataLogin({ email, password }));
    };

    return (
        <React.Fragment>
            <div className="login">
                <img src={backgroundImg} alt="backgroundImg" className="login-img"></img>
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1 className="login-title">Login</h1>
                    <div className="login-content">
                        <div className="login-box">
                            <img src={iconUser} alt="" className="login-icon"></img>
                            <div className="login-box-input">
                                <input type="email" required className="login-input" placeholder="Please Email" onChange={(e) => setEmail(e.target.value)}/>
                                <label className="login-label">Email</label>
                            </div>
                        </div>
                        <div className="login-box">
                            <img src={iconPW} alt="" className="login-icon"></img>
                            <div className="login-box-input">
                                <input type={isPasswordVisible ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required className="login-input" id="login-pass" placeholder="Please Password" />
                                <label className="login-label">Password</label>
                                <img src={isPasswordVisible ? iconEye : iconEyeOff} alt={isPasswordVisible ? "Show Password":"Hide Password"} onClick={togglePasswordVisibility}  className="login-eye" id="login-eye"></img>
                            </div>
                        </div>
                    </div>
                    <div className="login-check">
                        <div className="login-check-group">
                            <input type="checkbox" className="login-check-input" placeholder="ok" />
                            <label className="login-check-label">Remember me</label>
                        </div>
                        <a href="/" className="login-forgot">
                            Forgot Password?
                        </a>
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                    <p className="login-register">
                        Don`t have an account? <a href="/">Register</a>
                    </p>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Login;
