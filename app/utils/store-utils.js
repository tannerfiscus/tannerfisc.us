import { bindActionCreators } from 'redux'

export const mapDispatchToProps = (dispatch) => {
    // Empty object since there aren't currently any specific actions for this app
    const actions = {}
    return bindActionCreators(actions, dispatch)
}

export const mapStateToProps = (state) => {
    // Return everything in the state as
    // a prop except for `routing`, since
    // that is only consumed by the router
    let props = { ...state };
    delete props.routing;

    return props;
}

export default {
    mapDispatchToProps,
    mapStateToProps
}
