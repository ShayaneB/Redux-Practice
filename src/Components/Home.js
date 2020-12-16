import React from 'react';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from "react-redux";

import { addToCart } from './actions/cartActions'
import "./styles.css";

const Home = () => {
    const items = useSelector(state => state.items)
    
    const dispatch = useDispatch()

    const handleClick = (id)=>{
        dispatch(addToCart(id)); 
    }

    let itemList = items.map(item=>{
        return(
            <div className="card" key={item.id}>
                    <div className="card-image">
                        <img src={item.img} alt={item.title}/>
                        <span className="card-title">{item.title}</span>
                        <span to="/" 
                        className="btn-floating halfway-fab waves-effect waves-light red"
                        onClick={()=>{handleClick(item.id)}}>
                        <i className="fa fa-plus" aria-hidden="true"></i></span>
                    </div>

                    <div className="card-content">
                        <p>{item.desc}</p>
                        <p><b>Price: Rs. {item.price}</b></p>
                    </div>
             </div>
        )})

    return (
        <div className="container">
                <h3 className="center">Our items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
    )
}


export default Home;