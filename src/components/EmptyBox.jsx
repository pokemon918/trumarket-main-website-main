import React from 'react'

const EmptyBox = ({text}) => {
    return (
        <div className='empty-box d-flex justify-content-center align-items-center'>
            <p>{text}</p>
        </div>
    )
}

export default EmptyBox
