import {urlBase, urlDiscovery, urlFilm, urlSearch} from "../configs/urls";
import {useQuery} from "react-query";
import axios from "axios";
import {dispatchType} from "../configs/types";
import {setList, setSearch, setSearchList} from "../store/reducer";

export async function actionGetFilmsSearch(search: string, page: number, dispath: dispatchType) {
    const { data } = await axios.get(
        urlSearch + search + "&page=" + page
    );
    console.log(data)
    dispath(setSearchList({list: data?.results?.map((data: any) => ({
            title: data?.title,
            des: data?.overview,
            image: data?.poster_path,
            id: data?.id
        })), page, maxPage: data?.total_pages || 1}))
}
export async function actionGetFilms( page: number, dispath: dispatchType) {
    const { data } = await axios.get(
        urlDiscovery + "&page=" + page
    );

    dispath(setList({list: data?.results?.map((data: any) => ({
            title: data?.title,
            des: data?.overview,
            image: data?.poster_path,
            id: data?.id
        })) || [], page, maxPage: data?.total_pages || 1}));
}

export const useDataFilm = (id: string) => {
    return useQuery("film", async () => {
        const { data } = await axios.get(
            urlFilm(id)
        );
        return data;
    });
}