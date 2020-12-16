import React from 'react';
import { Link } from 'react-router-dom'
import "./styles.css";
import Shipping from "./Shipping";
import { useDispatch, useSelector } from "react-redux";
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions'

const Cart = () => {
    const dispatch = useDispatch();

     //to remove the item completely
    let handleRemove = (id)=>{
        dispatch(removeItem(id));
    }
    //to add the quantity
    let handleAddQuantity = (id)=>{
        dispatch(addQuantity(id));
    }
    //to substruct from the quantity
    let handleSubtractQuantity = (id)=>{
        dispatch(subtractQuantity(id));
    }

    const items = useSelector(state => state.addedItems)
              
        let addedItems = items.length ?
            (  
                items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: Rs. {item.price}</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="fa fa-arrow-up" aria-hidden="true" 
                                            onClick={()=>{handleAddQuantity(item.id)}}></i></Link>
                                            <Link to="/cart"><i className="fa fa-arrow-down" aria-hidden="true"
                                            onClick={()=>{handleSubtractQuantity(item.id)}}></i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" 
                                        onClick={()=>{handleRemove(item.id)}}>Remove</button>
                                    </div>
                                    
                               </li>                        
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )

       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                <Shipping/> 
            </div>
       )
    }

export default Cart;