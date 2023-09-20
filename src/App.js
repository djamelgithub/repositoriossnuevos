import { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import PageRender from './customRouter/PageRender'
import PrivateRouter from './customRouter/PrivateRouter'

import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'

import Alert from './components/alert/Alert'
import Header from './components/header/Header'

import { useSelector, useDispatch } from 'react-redux'
import { refreshToken } from './redux/actions/authAction'
import { getPosts } from './redux/actions/postAction'
import { getPostsPendientesss } from './redux/actions/postaproveAction'
import { getSuggestions } from './redux/actions/suggestionsAction'

import io from 'socket.io-client'
import { GLOBALTYPES } from './redux/actions/globalTypes'
import SocketClient from './SocketClient'

import { getNotifies } from './redux/actions/notifyAction'
import CallModal from './components/message/CallModal'
 
import Postspendientesss from './pages/administracion/postspendientesss'
import Blockposts from './pages/bloqueos/blockposts';
import Blockcomments from './pages/bloqueos/blockcomments';
import UserRole from './pages/roles/userRole';
import Usersposts from './pages/users/usersposts'

import { getUsers } from './redux/actions/users/usersAction'
import { getPostsadmin } from './redux/actions/postadminAction'
import StatusadminModal from './components/statusmodelll/StatusadminModal'
import StatusModal from './components/statusmodelll/StatusModal'
import Infoclient from './pages/infoclient'


function App() {
  const { auth, status, statusadmin, modal, call } = useSelector(state => state)
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(refreshToken())

    const socket = io()
    dispatch({ type: GLOBALTYPES.SOCKET, payload: socket })
    return () => socket.close()
  }, [dispatch])

  useEffect(() => {
    if (auth.token) {

      dispatch(getPostsadmin(auth.token))
      dispatch(getUsers(auth.token))
      dispatch(getPostsPendientesss(auth.token))
      dispatch(getPosts(auth.token))
      dispatch(getSuggestions(auth.token))
      dispatch(getNotifies(auth.token))
    }
  }, [dispatch, auth.token])


  useEffect(() => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
    else if (Notification.permission === "granted") { }
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") { }
      });
    }
  }, [])


 


  return (
    <Router>
      <Alert />

      <input type="checkbox" id="theme" />
      <div className={`App ${(status || statusadmin || modal) && 'mode'}`}>
        <div className="main">
          {auth.token && <Header />}
          {status && <StatusModal />}
          {statusadmin && <StatusadminModal />}
          {auth.token && <SocketClient />}
          {call && <CallModal />}


          <Route exact path="/" component={auth.token ? Home : Login} />
          <Route exact path="/register" component={Register} />

          <Route exact path="/administracion/postspendientes" component={Postspendientesss} />

          <Route exact path="/pages/roles/userRole" component={UserRole} />
          <Route exact path="/pages/bloqueos/blockcomments" component={auth.token ? Blockcomments : Login} />
          <Route exact path="/pages/bloqueos/blockposts" component={Blockposts} />
          <Route exact path="/pages/users/usersposts" component={Usersposts} />
          <Route exact path="/pages/infoclient" component={Infoclient} />

          <PrivateRouter exact path="/:page" component={PageRender} />
          <PrivateRouter exact path="/:page/:id" component={PageRender} />

        </div>
      </div>
    </Router>
  );
}

export default App;
