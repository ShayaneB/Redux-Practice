import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";
import {useSelector} from "react-redux";

 const Navbar = ()=>{

    const cartItems = useSelector(state => state.addedItems.length)
    console.log(cartItems)

    // const totalCartItems = cartItems.map( cartItem => {
    //     return (<span className="counter">{cartItem.quantity}</span>)
    // })

    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Shopping</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart"><span className="counter">{cartItems}</span>
                            <i className="fa fa-shopping-cart fa-lg"
                            aria-hidden="true"></i></Link></li>
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;