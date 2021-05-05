import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import NotFound from '../../components/NotFound'
import Detailpage from './pages/DetailPage'
import Listpage from './pages/ListPage'

TodoFeature.propTypes = {

}
function TodoFeature(props) {
   const match = useRouteMatch();
    return (
        <div>
            Todo state UI
            <Switch>
                <Route path={match.path} component={Listpage} exact />
                <Route path={`${match.path}/:todoId`} component={Detailpage} exact/>
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}

export default TodoFeature;

