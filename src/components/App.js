import React, { useState } from 'react'
import StackModal from "./modals/StackModal"
import QueueModal from "./modals/QueueModal"

export default function App() {

    const [showStack, setShowStack] = useState();
    const [showQueue, setShowQueue] = useState()

    return (


        <div className='container mt-5'>
            <div className='row row-cols-2' style={{ height: "600px" }}>

                <button className='btn btn-outline-dark col fs-1' onClick={() => setShowStack(true)}> Stack </button>
                <button className='btn btn-outline-primary col fs-1 ' onClick={() => setShowQueue(true)}> Queue </button>
                <button className='btn btn-outline-danger col fs-1  '> Tree </button>
                <button className='btn btn-outline-success col fs-1 '> Map </button>

            </div>


            <StackModal
                show={showStack}
                handleClose={() => setShowStack(false)}
            />

            <QueueModal
                show={showQueue}
                handleClose={() => setShowQueue(false)} />

        </div>
    )





}
