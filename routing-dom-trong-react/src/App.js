import Header from 'components/Header';
import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import productApi from './api/productApi';
import NotFound from './components/NotFound';
import AlbumFearure from './features/Album';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';
function App() {

  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      }
      const productList = await productApi.getAll(params);
      //console.log(productList);
    }
    fetchProducts();
  }, [])

  return (
    <div className="App">

      <Header />

      {/* <p>
        <NavLink to='/todos' activeClassName='active-menu'>Todos</NavLink>
      </p>
      <p>
        <NavLink to='/albums'>Albums</NavLink>
      </p> */}
      <Switch>
        <Redirect from='/home' to='/' exact />
        <Redirect from='/post-list/:postId' to='/posts/:postId' exact />

        <Route path='/' component={CounterFeature} exact />
        {/* <Route path='/' component={TodoFeature} exact /> */}
        <Route path='/todos' component={TodoFeature} />
        <Route path='/albums' component={AlbumFearure} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
