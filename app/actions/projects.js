import { getPortfolioItem } from '../utils/portfolio';

export const FETCH_PROJECT = 'FETCH_PROJECT'
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT'
export const RECEIVE_PROJECT_ERROR = 'RECEIVE_PROJECT_ERROR'
export const SHOW_PROJECT = 'SHOW_PROJECT'

const _fetchProject = urlPath => ({
    type: FETCH_PROJECT,
    urlPath,
})

const _receiveProject = (data, urlPath) => ({
    data,
    type: RECEIVE_PROJECT,
    urlPath,
})

const _receiveProjectError = urlPath => ({
    type: RECEIVE_PROJECT_ERROR,
    urlPath,
})

const _showProject = urlPath => ({
    type: SHOW_PROJECT,
    urlPath,
})

export const fetchProject = urlPath => {
    return (dispatch, getState) => {

        const { projects } = getState()

        // Was already retrieved successfully
        if (projects[urlPath] && !projects[urlPath].hasLoadedError) {
            return dispatch(_showProject(urlPath))
        }

        dispatch(_fetchProject(urlPath))

        getPortfolioItem(urlPath)
            .then(project => dispatch(_receiveProject(project, urlPath)))
            .catch((err) => { console.log('err', err); return dispatch(_receiveProjectError(urlPath)) })


    }
}
