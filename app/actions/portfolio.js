import { getPortfolio } from '../utils/portfolio';

export const FETCH_PORTFOLIO = 'FETCH_PORTFOLIO'
export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO'
export const RECEIVE_PORTFOLIO_ERROR = 'RECEIVE_PORTFOLIO_ERROR'

export const fetchPortfolio = () => {
    return dispatch => {

        dispatch({ type: FETCH_PORTFOLIO })

        getPortfolio(true)
            .then(projects => {
                return dispatch({
                    projects,
                    type: RECEIVE_PORTFOLIO
                })
            })
            .catch(() => {
                return dispatch({ type: RECEIVE_PORTFOLIO_ERROR })
            })


    }
}
