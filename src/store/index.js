import { createStore, compose, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import rootReducer from '../reducers'
import promiseMiddleware from 'redux-promise'
import { loadState, saveState } from '../localStorage'


const enhancers = compose(
  applyMiddleware(promiseMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, loadState(), enhancers)

store.subscribe(() => {
  saveState({
    user: store.getState().user
  })
})
export const history = syncHistoryWithStore(browserHistory, store)


export default store