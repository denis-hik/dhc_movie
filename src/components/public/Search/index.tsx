import React, {useEffect, useState} from "react";
import searchLogo from "../../../images/search.png";
import "./styled.scss";
import {useDebounce} from "@uidotdev/usehooks";

type SearchType = {
    value?: string;
    placeholder?: string;
    onChange?: (text: string) => void;
    onSearch?: (text: string) => void;

}
const Search: React.FC<SearchType> = ({value, placeholder, onChange, onSearch}) => {
    const [visible, setVisible] = useState(false);
    const [search, setSearch] = useState("");
    const debounceSearch = useDebounce(search, 500);
    const onChangeValue: React.ChangeEventHandler<HTMLInputElement> | undefined = (e) => {
        setSearch(e.target.value);
    }
    const onClickIcon = () => {
        if (!search.length) {
            setVisible(!visible);
        }
    }

    useEffect(() => {
        value && setSearch(value);
    }, [value])

    useEffect(() => {
        onChange && onChange(search);
    }, [debounceSearch])

    return (
        <div className={"Search-body"}>
            {visible && <input placeholder={placeholder} value={search} onChange={onChangeValue}/>}
            <img src={searchLogo} onClick={onClickIcon} />
        </div>
    )
}

export default Search;