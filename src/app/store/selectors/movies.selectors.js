import { createSelector } from "reselect";

const getData = state => state.movies.data;
const getTotal = state => state.movies.total;
const getOffset = state => state.movies.offset;
const getSortBy = state => state.movies.sortBy;
const getSortOrder = state => state.movies.sortOrder;
const getSearch = state => state.movies.search;
const getSearchBy = state => state.movies.searchBy;
const getFilter = state => state.movies.filter;
const getLimit = state => state.movies.limit;
const getLoading = state => state.movies.loading;

export const makeGetDataState = () => createSelector([getData], _ => _);
export const makeGetTotalState = () => createSelector([getTotal], _ => _);
export const makeGetOffsetState = () => createSelector([getOffset], _ => _);
export const makeGetSortByState = () => createSelector([getSortBy], _ => _);
export const makeGetSortOrderState = () =>
  createSelector([getSortOrder], _ => _);
export const makeGetSearchState = () => createSelector([getSearch], _ => _);
export const makeGetSearchByState = () => createSelector([getSearchBy], _ => _);
export const makeGetFilterState = () => createSelector([getFilter], _ => _);
export const makeGetLimitState = () => createSelector([getLimit], _ => _);
export const makeGetLoadingState = () => createSelector([getLoading], _ => _);
