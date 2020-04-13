import React from 'react'
import './spinner.styles.scss'

const Spinner = RandomComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <div className="SpinnerOverlay">
            <div className="SpinnerContainer"/>
        </div>
    ) : (
        <RandomComponent {...otherProps}/>
    )
}

export default Spinner;