import React, {useEffect} from "react";
import "./styled.scss";
import Loader from "../Loader";
import Carusel from "../Carusel";
import {CaruselImageType} from "../../../configs/types";

type GridType = {
    children: React.ReactNode;
    onScroll?: React.UIEventHandler<HTMLDivElement> | undefined;
    onNext?: () => void;
    isLoad?: boolean;
    disableLoad?: boolean;
    listCorusel?: CaruselImageType[];
}
const Grid: React.FC<GridType> = ({children, onScroll, onNext, isLoad, disableLoad, listCorusel}) => {

    return (
        <div className={"Grid-body"}>
            {listCorusel && listCorusel.length && <div className={"Grid-carusel"}>
                <Carusel photos={listCorusel}/>
            </div>}
            <div className={"Grid-list"}>
                {children}
            </div>
            {!disableLoad && onNext && <>
                {!isLoad && <div className={"next"} onClick={onNext}>Next</div>}
                {isLoad && <div className={"next"}><Loader/></div>}
            </>}

        </div>
    )
}

export default Grid;