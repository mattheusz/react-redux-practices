import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux';

function NewHookCakeContainer(props) {
    const [number, setNumber] = useState(1);

    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Numbers of cakes (hook) - {numberOfCakes} </h2>
            <input value={number} onChange={e => setNumber(e.target.value)}></input>
            <button onClick={() => dispatch(buyCake(number))}>Buy Cake</button>
        </div >
    );
}

export default NewHookCakeContainer;