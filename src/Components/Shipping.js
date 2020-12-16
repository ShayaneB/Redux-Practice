import React, { useEffect, useRef } from 'react'
import {useSelector, useDispatch} from 'react-redux'

const Shipping = () => {

    // const addedItems = useSelector(state => state.addedItems)
    const total = useSelector(state => state.total)

    const dispatch = useDispatch();
    const shipping = useRef(null)

    useEffect(()=> {
         if(shipping.checked)
         dispatch({type: 'SUB_SHIPPING'})    
        })

    const handleChecked = (e)=>{
        if(e.target.checked){
            dispatch({type: 'ADD_SHIPPING'})        
        }
        else{
            dispatch({type: 'SUB_SHIPPING'})        
        }
    }
  
        return(
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref={shipping} 
                                onChange= {handleChecked} />
                                <span>Shipping(+10Rs.)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {total} Rs.</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn">Checkout</button>
                    </div>
                 </div>
        )
    }

export default Shipping;