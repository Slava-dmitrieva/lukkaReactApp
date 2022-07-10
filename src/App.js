import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import { Header } from "./components/header/header";
import { NavBar } from "./components/NavBar/Nav";
import { Home } from "./pages/home-page/home"
import { store } from "./components/redux";
import { OrderPage } from "./components/orderPage/orderPage";
function App() {


  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Header />
        <div className='desctop-wrapper'>
         <NavBar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/order" component={OrderPage}/>
          </Switch>
        </div>
      </div>
      </Router>
    </Provider>
  );
}


export default App;
