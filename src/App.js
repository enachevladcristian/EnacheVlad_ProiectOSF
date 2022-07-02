import "./App.css";
import Header from "./common/header/Header";
import {BrowserRouter as Router, Switch , Route, useLocation} from "react-router-dom";
import Pages from "./pages/Pages";
import Data from "./components/flashDeals/Data";
import { useState } from "react";
import Cart from "./common/cart/Cart";
import Sdata from "./components/shop/Sdata";
import Footer from "./components/footer/Footer";
import CookieConsent from "react-cookie-consent";
import eroare from "./components/error/Eroare";
import Eroare from "./components/error/Eroare";

function App(){
  // pasul 1 : facem fetch la date din database
  const {productItems} = Data
  const {shopItems} = Sdata
  const [cartItem, setCardItem] = useState([])

  const addToCart = (product) =>{
    const productExit = cartItem.find((item)=>item.id === product.id)

    if (productExit) {
      setCardItem(cartItem.map((item)=>(item.id === product.id ?
        {...productExit,qty:productExit.qty+1}:item)))
    } else {
      setCardItem([...cartItem,{...product,qty:1}])
    }
  }

  const decreaseQty = (product) =>{
    const productExit = cartItem.find((item)=>item.id === product.id)
    if (productExit.qty === 1){
      setCardItem(cartItem.filter((item)=>item.id !== product.id))
    } else {
      setCardItem(cartItem.map((item)=> (item.id === product.id ? {...productExit,qty:productExit.qty-1}:item)))
    }
  }

  return(
    <>
      
      <Router>
      <Header cartItem={cartItem}/>
        <Switch>
          <Route path='/' exact>
          <Pages productItems={productItems} addToCart ={addToCart} cartItem={cartItem} shopItems ={shopItems} />
          </Route>
          <Route path='/cart' exact>
          <Cart cartItem={cartItem} addToCart ={addToCart} decreaseQty={decreaseQty} />
          </Route>
          <Route path ='*'>
            <Eroare />
          </Route>
        </Switch>
        <Footer />
      </Router>
      <CookieConsent 
      debug={true}
      location="bottom"
      style={{background:'#000',textAlign:"left"}}
      buttonStyle={{color:'#000',background:'#fff',fontSize:'14px'}}
      buttonText ='Accept'
      >
        This site uses cookies.See our privacy policy for more.
        </CookieConsent>
    </>
  )
}

export default App