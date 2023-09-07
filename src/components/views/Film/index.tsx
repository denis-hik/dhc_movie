import "./styled.scss";
import {useParams} from "react-router-dom";
import {useDataFilm} from "../../../api/getFilms";
import React, {useEffect, useState} from "react";
import {itemFilmType} from "../../../configs/types";
import Loader from "../../public/Loader";
import {setLike} from "../../../store/reducer";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import favIcon from "../../../images/favourite.png";
import popIcon from "../../../images/star.png";
import {likeSelector} from "../../../store/selectors";

const Film = () => {
    const [film, setFilm] = useState<null | itemFilmType>(null);

    const { id }: {id: string} = useParams();
    const { status, data, error, isFetching } = useDataFilm(id);
    const dispatch = useAppDispatch();

    const likes = useAppSelector(likeSelector);

    const onLikeItem = () => {
        dispatch(setLike({id}));
    }

    useEffect(() => {
        if (status === "success") {
            setFilm({
                title: data?.title || "Нету имени",
                image: "http://image.tmdb.org/t/p/w185/" + data?.poster_path,
                des: data?.overview,
                id: data?.id,
                popularity: data?.popularity,
                genres: data?.genres.map(({name}: {name: string}) => name),
            })
        }
    }, [data])

    return (
        <div className={"Film-body"}>
            {(isFetching)
                ? <Loader />
                : <>
                    <img className={"Film-banner"} src={film?.image}/>
                    <img
                        className={"Film-like"}
                        src={favIcon}
                        onClick={onLikeItem}
                        style={{filter: likes.includes(id) ? "none" : "contrast(1%) sepia(100%) hue-rotate(295deg) brightness(1) saturate(5%)"}}
                    />
                    <div
                        className={"Film-pop"}
                    >
                        <img
                            src={popIcon}
                            onClick={onLikeItem}
                        />
                        <span>{film?.popularity || 0}</span>
                    </div>

                    <h3 className={"Film-title"}>{film?.title}</h3>
                    <span className={"Film-des"}>{film?.des}</span>
                    <div className={"Film-gen"}>
                        {film?.genres?.map((data: string) => (
                            <span>{data}</span>
                        ))}
                    </div>
                </> }

        </div>
    )
}

export default Film;