import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Product from './Components/Product';
import ProductItem from './Components/ProductItem';
import Navbaritems from './Components/Navbar';

function RouteConfig() {
    return (
        <Router>
            <header>
            <Navbaritems />
            </header>
            <Switch>
                <Route exact path = '/' component={Home} />
                <Route path = '/about' component={About} />
                <Route path = '/contactus' component={ContactUs} />
                <Route exact path = '/product' component={Product} />
                <Route path = '/product/:id' component={ProductItem} />
                <Route path = '*' component={()=><h2>404 Not Found</h2>} />
            </Switch>
        </Router>
        
    )
}

export default RouteConfig;