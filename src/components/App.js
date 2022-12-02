import React, { useState } from 'react'
import StackModal from "./modals/StackModal"
export default function App() {

    const [showStack, setShowStack] = useState()
    return (


        <div className='container mt-5'>
            <div className='row row-cols-2'>

                <button className='btn btn-outline-dark col fs-1' onClick={() => setShowStack(true)}> Stack </button>
                <button className='btn btn-outline-dark col fs-1 '> Queue </button>
                <button className='btn btn-outline-dark col fs-1  '> Tree </button>
                <button className='btn btn-outline-dark col fs-1 '> Map </button>

            </div>


            <StackModal
                show={showStack}
                handleClose={() => setShowStack(false)}
            />

        </div>
    )





}
