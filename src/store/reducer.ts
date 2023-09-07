import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {itemFilmType, reducerDataType} from "../configs/types";
import {RootState} from "@reduxjs/toolkit/dist/query/core/apiState";

const initialState = {
    search: "",
    like: "",
    list: [],
    listSearch: [],
    maxPage: 2,
} as reducerDataType
export const reducerSlice = createSlice({
    name: 'base',
    initialState: initialState,
    reducers: {
        setSearch: (state, action: PayloadAction<{text: string}>) => {
            state.search = action.payload.text;
        },
        setLike: (state, action: PayloadAction<{id: string}>) => {
            const likes = state.like
            if (state.like.toString().includes(action.payload.id)) {
                state.like = likes.replace(action.payload.id + ",", "");
            } else {
                state.like = action.payload.id.toString() + "," + likes;
            }
        },
        setList: (state, action: PayloadAction<{list: itemFilmType[], page: number, maxPage: number}>) => {

            if (action.payload.page > 1) {
                state.list = [...state.list,...action.payload.list];
            } else {
                state.list = action.payload.list;
            }
            state.maxPage = action.payload.maxPage;
            state.listSearch = [];
        },
        setSearchList: (state, action: PayloadAction<{list: itemFilmType[], page: number, maxPage: number}>) => {
            if (action.payload.page > 1) {
                state.listSearch = [...state.listSearch,...action.payload.list];
            } else {
                state.listSearch = action.payload.list;
            }
            state.maxPage = action.payload.maxPage;
            state.list = [];
        },
    },
});

export const { setSearch, setLike, setList, setSearchList } = reducerSlice.actions

export default reducerSlice.reducer