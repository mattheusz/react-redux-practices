import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyIceCream } from '../redux'

function IceCreamContainer() {
    const numberOfIceCream = useSelector(state => state.iceCream.numberOfIceCream);
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of ICE CREAM</h2>
            <p>{numberOfIceCream}</p>
            <button onClick={(() => dispatch(buyIceCream()))}>Buy Ice Cream</button>
        </div>
    );
}

export default IceCreamContainer;