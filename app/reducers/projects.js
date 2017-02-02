import { CLOSE_MODAL_BEGIN } from '../actions/modal'
import { FETCH_PROJECT,
         RECEIVE_PROJECT,
         RECEIVE_PROJECT_ERROR,
         SHOW_PROJECT }      from '../actions/projects'

const _fetchProject = (state, { urlPath }) => ({
    ...state,
    [ urlPath ]: {
        hasLoaded: false,
        hasLoadedError: false,
        isLoading: true,
        isVisible: true,
    }
})

// For resume projects, when the modal is closed. If
// this is 'resumeProject', then we can set `isVisible`
// to false for all projects
const _hideProjectIfNeeded = (state, { name }) => {

    if (name === 'resumeProject') {
        const updatedState = {}

        Object.keys(state).forEach(projectKey => {
            updatedState[projectKey] = {
                ...state[projectKey],
                isVisible: false,
            }
         })

         return updatedState
    }

    return state

}

const _receiveProject = (state, { data, urlPath }) => ({
    ...state,
    [ urlPath ]: {
        data,
        hasLoaded: true,
        hasLoadedError: false,
        isLoading: false,
        isVisible: true,
    }
})

const _receiveProjectError = (state, { urlPath }) => ({
    ...state,
    [ urlPath ]: {
        hasLoaded: false,
        hasLoadedError: true,
        isLoading: false,
        isVisible: true,
    }
})

const _showProject = (state, { urlPath }) => ({
    ...state,
    [ urlPath ]: {
        ...state[urlPath],
        isVisible: true,
    }
})

export default (state = {}, action) => {

    switch (action.type) {
        case CLOSE_MODAL_BEGIN:
            return _hideProjectIfNeeded(state, action)
        case FETCH_PROJECT:
            return _fetchProject(state, action)
        case RECEIVE_PROJECT:
            return _receiveProject(state, action)
        case RECEIVE_PROJECT_ERROR:
            return _receiveProjectError(state, action)
        case SHOW_PROJECT:
            return _showProject(state, action)
        default:
            return state
    }

}
