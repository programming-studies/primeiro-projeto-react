import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/Dasboard'
import Repository from '../pages/Repository'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact={true} component={Dashboard}/>
    <Route path="/repository" component={Repository}/>
  </Switch>
)

export default Routes;
