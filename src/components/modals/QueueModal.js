import React, { useState, useRef } from 'react'
import { Modal, Form } from 'react-bootstrap'
import QueueType from '../QueueType'


export default function QueueModal({ show, handleClose }) {

    const queueRef = useRef();
    const [queue, setQueue] = useState([])

    return (
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton closeVariant="white" className="bg-primary text-light">
                <h1>Queue</h1>
            </Modal.Header>

            <Modal.Body className='bg-light text-light'>

                <Form.Group className=' text-light row'>
                    <Form.Control className='bg-light m-2 col' type='text' placeholder='Value of New Element' ref={queueRef} onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            queueRef.current.value !== "" ?
                                setQueue([queueRef.current.value, ...queue]) : alert("Please enter a value")
                            queueRef.current.value = ""
                        }
                    }} />
                    <button className='btn btn-success m-2 col fs-4'
                        onClick={() => {
                            queueRef.current.value !== "" ?
                                setQueue([queueRef.current.value, ...queue]) : alert("Please enter a value")
                            queueRef.current.value = ""
                        }}> Enqueue </button>
                </Form.Group>
                <div className='row'>
                    <button className='btn btn-danger col-5 m-1 fs-4' onClick={() => {
                        if (queue.length !== 0) {
                            queue.pop()
                            setQueue([...queue])
                        }
                        else { alert("Queue is empty") }

                    }}> Dequeue </button>

                    <button className='btn btn-info col-3 m-1 fs-4' onClick={() => {
                        queue.length !== 0 ?
                            alert(queue[0]) : alert("Queue is empty")
                    }}> Get First </button>
                    <button className='btn btn-secondary col-3 m-1 fs-4' onClick={() => {
                        queue.length !== 0 ?
                            alert(queue[queue.length - 1]) : alert("Queue is empty")
                    }}> Get Last </button>
                </div>

                <br />
                <div className='bg-dark w-25 h-25'></div>
                <div className="row ms-5">
                    {
                        queue?.map((item) => {
                            return <QueueType value={item} />
                        })
                    }
                </div>

            </Modal.Body>
        </Modal>

    )
}
