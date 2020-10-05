import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectGlobalDomain = (state:any) => state.post || initialState

const makeSelectPost = () =>
	createSelector(selectGlobalDomain, substate => substate.post)

const makeSelectLoading = () =>
	createSelector(selectGlobalDomain, substate => substate.loading)

const makeSelectError = () =>
	createSelector(selectGlobalDomain, substate => substate.error)


export { makeSelectPost, makeSelectLoading, makeSelectError }
