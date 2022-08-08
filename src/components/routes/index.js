
import {Route, Switch} from 'react-router-dom'
import Cart from '../../pages/Cart'
import MarketPlace from '../../pages/MarketPlace'

const Routes = () => {


  return (

    <Switch>
        <Route exact path="/">
            <MarketPlace />
        </Route>
        <Route exact path="/cart">
            <Cart />
        </Route>
        
    </Switch>
   
  )
}

export default Routes