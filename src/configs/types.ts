import React from "react";
import {AnyAction, Dispatch, ThunkDispatch} from "@reduxjs/toolkit";

export type routesHomeType = {
    path: string,
    exact: boolean,
    component?:  React.ComponentType,
    data?: {
        requiresLogin: boolean
    }
}

export type dispatchType = ThunkDispatch<{base: reducerDataType}, undefined, AnyAction> & Dispatch<AnyAction>

export type reducerDataType = {
    search: string,
    like: string
    list: itemFilmType[];
    listSearch: itemFilmType[];
    maxPage: number;
}

export type itemFilmType = {
    title: string,
    des: string,
    id: string,
    image: string,
    genres?: string[],
    popularity?: string,
}


export type CaruselImageType = {
    image: string,
    title: string
}