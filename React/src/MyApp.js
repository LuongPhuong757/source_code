import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import Footer from './component/category/Footer';
import Header from './component/category/Header';
import HomePageContainer from './container/HomePageContainer';
import SingleProductContainer from './container/SingleProductContainer';
import PageProductContainer from './container/PageProductContainer';
import CartContainer from './container/CartContainer';
import AdminContainer from './container/AdminContainer';
import * as handleStorage from './handleLocalStorage'
function MyApp(props) {
    const user = handleStorage.getLocalStorage('user')
    return (
        <div className="App">
            <Router >
                <Header />
                <Switch>
                    <Route exact path='/' component={HomePageContainer} />
                    <Route exact path='/product/:type' component={PageProductContainer} />
                    <Route path='/cart' component={CartContainer} />
                    <Route path='/admin' render={() => {
                        if (user.account.role === 'Admin') return (<AdminContainer />)
                        else return (<Redirect to='/' />)
                    }} />
                    <Route path='/product-item/:slug' render={(props) => {
                        return <SingleProductContainer {...props} />
                    }} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default MyApp;