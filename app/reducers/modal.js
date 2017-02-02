import { CLOSE_MODAL_BEGIN,
         CLOSE_MODAL_END,
         INIT_MODAL,
         OPEN_MODAL } from '../actions/modal'

export default (state = {}, action) => {

    switch (action.type) {
        case CLOSE_MODAL_BEGIN:
            return {
                ...state,
                [ action.name ]: {
                    ...state[ action.name ],
                    isClosing: true,
                    isVisible: false,
                }
            }
        case CLOSE_MODAL_END:
            return {
                ...state,
                [ action.name ]: {
                    ...state[ action.name ],
                    isClosing: false,
                    isVisible: false,
                }
            }
        case INIT_MODAL:
            return {
                ...state,
                [ action.name ]: {
                    isClosing: false,
                    isVisible: false,
                }
            }
        case OPEN_MODAL:
            return {
                ...state,
                [ action.name ]: {
                    ...state[ action.name ],
                    isVisible: true,
                }
            }
        default:
            return state
    }

}
