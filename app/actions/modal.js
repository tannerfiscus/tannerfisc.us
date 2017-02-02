export const CLOSE_MODAL_BEGIN = 'CLOSE_MODAL_BEGIN'
export const CLOSE_MODAL_END = 'CLOSE_MODAL_END'
export const INIT_MODAL = 'INIT_MODAL'
export const OPEN_MODAL = 'OPEN_MODAL'

export const closeModal = name => {
    return dispatch => {
        dispatch({
            name,
            type: CLOSE_MODAL_BEGIN
        })

        setTimeout(() => {
            return dispatch({
                name,
                type: CLOSE_MODAL_END
            })
        }, 400)
    }
}

export const initModal = name => ({
    name,
    type: INIT_MODAL,
})

export const openModal = name => ({
    name,
    type: OPEN_MODAL,
})
