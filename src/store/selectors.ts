import {reducerDataType} from "../configs/types";
import type { RootState } from '../store/store'

export const searchSelector = (state: RootState) => state.base.search;
export const likeSelector = (state: RootState) => state.base.like;
export const listSelector = (state: RootState) => state.base.list;
export const listSearchSelector = (state: RootState) => state.base.listSearch;
export const maxPageSelector = (state: RootState) => state.base.maxPage;