import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectGlobalDomain = (state:any) => state.posts || initialState


const makeSelectPosts = () =>
	createSelector(selectGlobalDomain, substate => substate.items)

const makeSelectPostsAsArray = () =>
	createSelector(selectGlobalDomain, substate => substate.items ? Object.keys(substate.items).map(i => substate.items[i]) : null )

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
export { makeSelectPage, makeSelectPosts, makeSelectPostsAsArray, makeSelectIds, makeSelectLoading, makeSelectError, makeSelectTotal, makeSelectSize }
