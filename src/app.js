import React from 'react'
import { render } from 'react-dom'
import Main from './components/main'
import { Router, Route, IndexRoute } from 'react-router'
import './css/style.scss'
import { Provider, connect } from 'react-redux'
import store, { history } from './store'
import { bindActionCreators } from 'redux'
import * as messagesActions from './actions/messages'
import * as usersActions from './actions/users'
import * as spacesActions from './actions/spaces'
import socket from './socket'
import Spaces from './components/pages/Spaces'
import SignUp from './components/auth/SignUp'
import LogIn from './components/auth/LogIn'
import Home from './components/home'


// make state available as props
const mapStateToProps = (state) => ({
  socket: socket,
  messages: state.messages.messages,
  spaces: state.spaces,
  user: state.user
})

// make actions available as props
const mapDispatchToProps = (dispatch) => ({
  actions: {
    messages: bindActionCreators(messagesActions, dispatch),
    users: bindActionCreators(usersActions, dispatch),
    spaces: bindActionCreators(spacesActions, dispatch)
  }
})
var App = connect(mapStateToProps, mapDispatchToProps)(Main)

const root = document.getElementById('root')
render(
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="spaces/:spaceId" component={Spaces}/>
            <Route path="signup" component={SignUp}/>
            <Route path="login" component={LogIn}/>
          </Route>
        </Router>
      </Provider>, root)

