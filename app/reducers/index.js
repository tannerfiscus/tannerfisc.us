import { combineReducers }        from 'redux'
import modal                      from './modal'
import portfolio                  from './portfolio'
import projects                   from './projects'
import { reducer as formReducer } from 'redux-form'
import { routerReducer }          from 'react-router-redux'

export const reducers = combineReducers({ form: formReducer,
                                          modal,
                                          portfolio,
                                          projects,
                                          routing: routerReducer, })
export default reducers
