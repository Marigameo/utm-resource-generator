import React from 'react'

export default function Button ({ actionHandler, children }) {
    const resultButton = {
        width: '180px',
        margin: '25px',
        padding: '15px',
        cursor: 'pointer'
    }
    return (
        <div>
            <button style={resultButton} onClick={actionHandler}>{children}</button>
        </div>
    )
}
