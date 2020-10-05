import { createSelector } from 'reselect'
import { initialState } from './reducer'

const selectGlobalDomain = (state:any) => state.login || initialState

const makeSelectLogin = () =>
	createSelector(selectGlobalDomain, substate => substate)

	const makeSelectLoggedIn = () =>
	createSelector(selectGlobalDomain, substate => substate.loggedIn)

export default selectGlobalDomain
export { makeSelectLogin, makeSelectLoggedIn }
