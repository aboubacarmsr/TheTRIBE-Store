import React from 'react'
import SpinnerComponent from '../spinner-component/spinner-component.jsx';


const Spinner = RandomComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <SpinnerComponent/>
    ) : (
        <RandomComponent {...otherProps}/>
    )
}

export default Spinner;