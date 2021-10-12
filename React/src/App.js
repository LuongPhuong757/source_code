// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import * as handleStorage from './handleLocalStorage'
// import Header from './component/category/Header';
// import Trend from './component/homePage/Trend';
// import TopProduct from './component/homePage/TopProduct';
// import Fashion from './component/homePage/Fashion';
// import ListProduct from './component/homePage/ListProduct';
// import News from './component/homePage/News';
// import Banner from './component/homePage/Banner';
// import Footer from './component/category/Footer';
// import HomePageContainer from './container/HomePageContainer';
import MyApp from './MyApp';
import LoginContainer from './container/LoginContainer';

function App() {
  const user = handleStorage.getLocalStorage('user')
  console.log(user, '12333333333')
  return (
    <Router>
      <Route path='/' render={() => {
        if (user) {
          return (< Redirect to='/' />)
        } else {
          return (< Redirect to='/login' />)
        }
      }} />
      <Switch>
        <Route exact path='/login' component={LoginContainer} />
        <Route path='/' component={MyApp} />
      </Switch>
    </Router>
  );
}

export default App;
