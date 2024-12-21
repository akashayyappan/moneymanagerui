import React, { useEffect, useState } from "react";
import { CiLogin, CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router";
import { clearAuthToken, getUser, isLoggedIn } from "../service/httpClient";
import { iUSER } from "../model/user";

function Header() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState<iUSER>();
    const navigate = useNavigate();

    useEffect(() => {
        setLoggedIn(isLoggedIn());
    }, []);

    useEffect(() => {
        setUser(getUser());
    }, [loggedIn]);

    const login = () => {
        navigate("/login");
    }

    const logout = () => {
        clearAuthToken();
        setLoggedIn(false);
    }

    return (
        <React.Fragment>
            <div className="header">
                <div className="money-manager">Money Manager</div>
                <div className="header-buttons">
                    {loggedIn ? <React.Fragment>
                        <span className="username">{`${user?.firstName}, ${user?.lastName}`}</span>
                        <CiLogout className="button" onClick={logout} />
                    </React.Fragment> : <CiLogin className="button" onClick={login} />}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;