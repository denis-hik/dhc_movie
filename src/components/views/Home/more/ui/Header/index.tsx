import React, {useState} from "react";
import "./Header.scss"
import logo from "../../../../../../images/logo.png"
import Search from "../../../../../public/Search";
import {Link, Redirect, useParams} from "react-router-dom";
import {setSearch} from "../../../../../../store/reducer";
import {useAppDispatch} from "../../../../../../store/hooks";

const Header: React.FC = () => {
    const [isRedirect, setIsRedirect] = useState(false);
    const dispatch = useAppDispatch();
    const params = useParams();
    const handleChangeSearch = (value: string) => {
        dispatch(setSearch({text: value}));
        if (!!params) {
            setIsRedirect(true);
        }
    }

    return (<div className={"Header-body"}>
        <Link to={"/"}><img className={"Header-logo"} src={logo} /></Link>
        <div style={{width: "100%"}} />
        <Search placeholder={"Search films"} onChange={handleChangeSearch} />
        {isRedirect && <Redirect to={"/"}/>}
    </div>)
}

export default Header;