import { FETCH_PORTFOLIO,
         RECEIVE_PORTFOLIO,
         RECEIVE_PORTFOLIO_ERROR } from '../actions/portfolio'

const defaultState = {
    hasLoaded: false,
    hasLoadedError: false,
    isLoading: false,
    projects: []
}

export default (state = defaultState, action) => {

    switch (action.type) {
        case FETCH_PORTFOLIO:
            return {
                ...state,
                isLoading: true,
            }
        case RECEIVE_PORTFOLIO:
            return {
                hasLoaded: true,
                hasLoadedError: false,
                isLoading: false,
                projects: action.projects,
            }
        case RECEIVE_PORTFOLIO_ERROR:
            return {
                ...state,
                hasLoaded: false,
                hasLoadedError: true,
                isLoading: false,
            }
        default:
            return state
    }

}
