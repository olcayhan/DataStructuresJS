import React from 'react'

export default function StackType({ value }) {
    return (
        <div className='container bg-dark mt-1 fs-5' style={{ width: "100px", height: "40px" }}>
            <p className='text-center'>{value}</p>

        </div>
    )
}
