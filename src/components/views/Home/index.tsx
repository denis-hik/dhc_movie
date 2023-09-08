import React, {useEffect, useState} from "react";
import Header from "../../public/Header";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {listSearchSelector, listSelector, maxPageSelector, searchSelector} from "../../../store/selectors";
import {actionGetFilms, actionGetFilmsSearch} from "../../../api/getFilms";
import Loader from "../../public/Loader";
import {itemFilmType} from "../../../configs/types";
import Grid from "../../public/Grid";
import ItemFilm from "./more/ui/ItemFilm";
import Carusel from "../../public/Carusel";

const Home: React.FC = () => {
    const dispatch = useAppDispatch()

    const search = useAppSelector(searchSelector);
    const list = useAppSelector(listSelector);
    const listSearch = useAppSelector(listSearchSelector);
    const maxPage = useAppSelector(maxPageSelector);

    const [page, setpage] = useState<number>(1);
    const [isLoad, setIsLoad] = useState<boolean>(true);
    const [oldSearch, setOldSearch] = useState<string>(search);

    useEffect(() => {
        let page1 = page
        setIsLoad(true);
        if (search !== oldSearch) {
            setpage(1);
            page1 = 1;
            setOldSearch(search);
        }
        if (search.length) {
            actionGetFilmsSearch(search, page1, dispatch);
        } else {
            actionGetFilms(page1, dispatch);
        }
    }, [search, page]);

    useEffect(() => {
        setIsLoad(false);
    }, [listSearch, list]);

    return (
        <div className={"Home-body"}>
            {!(list.length || listSearch.length) && <Loader />}
            {(list.length || listSearch.length) && <>
                <Grid
                    isLoad={isLoad}
                    disableLoad={maxPage <= page}
                    onNext={() => setpage( page + 1)}
                    listCorusel={[...list, ...listSearch].map(({title, image}) => ({
                        title: title,
                        image: "http://image.tmdb.org/t/p/w185/" + image
                    }))}
                >
                    {[...list, ...listSearch].map((film) => (
                        <ItemFilm {...film} />
                    ))}
                </Grid>
            </>
            }
        </div>
    )
}

export default Home;