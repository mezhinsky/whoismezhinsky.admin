import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectGlobalDomain = (state:any) => state.tags || initialState


const makeSelectTags = () =>
	createSelector(selectGlobalDomain, substate => substate.items)

const makeSelectTagsAsArray = () =>
	createSelector(selectGlobalDomain, substate => substate.items && Object.values(substate.items).length ? Object.keys(substate.items).map(i => substate.items[i]) : [] )

const makeSelectIds = () =>
	createSelector(selectGlobalDomain, substate => substate.items ? Object.keys(substate.items) : null)

const makeSelectLoading = () =>
	createSelector(selectGlobalDomain, substate => substate.loading)

const makeSelectError = () =>
	createSelector(selectGlobalDomain, substate => substate.error)

const makeSelectPage = () =>
	createSelector(selectGlobalDomain, substate => substate.page)

const makeSelectTotal = () => 
	createSelector(selectGlobalDomain, substate => substate.total)

const makeSelectSize = () =>
	createSelector(selectGlobalDomain, substate => substate.size)


export default selectGlobalDomain
export { makeSelectPage, makeSelectTags, makeSelectTagsAsArray, makeSelectIds, makeSelectLoading, makeSelectError, makeSelectTotal, makeSelectSize }
