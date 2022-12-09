import React from 'react'

import './error-indicator.scss'

const ErrorIndicator = () => {
    
    return <div className='ErrorIndicator__div'>
        <span className='span-error'>
            Error!
        </span>
        <h1 className='description-error'>Something went wrong.</h1>
    </div>
}

export default ErrorIndicator