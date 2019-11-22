import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import config from 'routes/config'

import 'assets/iconfont.css'
import 'styles/reset.css'

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        {config.map((v, index) => {
          return <Route path={v.path} exact={v.exact} component={v.component} key={index} />
        })}
      </Switch>
    </Router>
  )
}

export default App
