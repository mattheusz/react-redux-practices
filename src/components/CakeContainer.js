import React from 'react';
import { buyCake } from '../redux'
import { connect } from "react-redux";

function CakeContainer(props) {

    return (
        <div>
            <h2>Number of cakes</h2>
            <p>{props.numberOfCakes}</p>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
}

// recebe o state da store conectada e passa para a props do componente atual.
// o state é acessado pelo componente atual com props.numberOfCakes
const mapStateToProps = state => {
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}

// recebe o dispatch da store conectada e passa para a props do componente atual.
// o dispatch é acessado pelo componente atual com props.buyCake
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);