
import './App.css';
import NavBar from './components/NavBar';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';
import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import SignIn from './components/Signin';
import SignUp from './components/SignUp';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import { actionTypes } from './reducer';
import Checkout from './components/CheckoutForm/Checkout';

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if (authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,

        });
      }
    });
  },[]);
  
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path="/signup">
            <SignUp/>
        </Route>
      <Route path="/signin">
            <SignIn/>
        </Route>
        <Route path="/checkout-page">
            <CheckoutPage/>
        </Route>
      <Route path="/checkout">
            <Checkout/>
        </Route>
        <Route path="/">
           <Products/>
        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
