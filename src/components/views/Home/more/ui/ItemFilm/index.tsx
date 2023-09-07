import React from "react";
import {itemFilmType} from "../../../../../../configs/types";
import redirectIcon from "../../../../../../images/redirect.png";
import favIcon from "../../../../../../images/favourite.png";
import "./styled.scss"
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../../../store/hooks";
import {likeSelector} from "../../../../../../store/selectors";
import {setLike} from "../../../../../../store/reducer";

const ItemFilm: React.FC<itemFilmType> = ({title, image, id, des}) => {

    const likes = useAppSelector(likeSelector);
    const dispatch = useAppDispatch();

    const onLikeItem = () => {
        dispatch(setLike({id}));
    }

    return (
        <div className={"ItemFilm-body"}>
            <span className={"ItemFilm-title"}>{title}</span>
            <img className={"ItemFilm-image"} src={`http://image.tmdb.org/t/p/w185/${image}`}/>
            <div className={"ItemFilm-hover"}>
                <Link to={`/film/${id}`}><img className={"onRedirect"} src={redirectIcon} /></Link>
                <img
                    className={"onLike"}
                    style={{filter: likes.includes(id) ? "none" : "contrast(1%) sepia(100%) hue-rotate(295deg) brightness(1) saturate(5%)"}}
                    src={favIcon}
                    onClick={onLikeItem}
                />
                <span className={"ItemFilm-des"} >{des}</span>
            </div>
        </div>
    )
}

export default ItemFilm;