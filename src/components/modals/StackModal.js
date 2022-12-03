import React, { useState, useRef } from 'react'
import { Modal, Form } from 'react-bootstrap'
import StackType from '../StackType'


export default function StackModal({ show, handleClose }) {

    const stackRef = useRef();
    const [stack, setStack] = useState([])

    return (
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton closeVariant="white" className="bg-dark text-light">
                <h1>Stack</h1>
            </Modal.Header>

            <Modal.Body className='bg-light text-light'>

                <Form.Group className=' text-light row'>
                    <Form.Control className='bg-light w-75 m-2 col' type='text' placeholder='Value of New Element' ref={stackRef} onKeyPress={(e) => {
                        if (e.key === "Enter") {
                            stackRef.current.value !== "" ?
                                setStack([stackRef.current.value, ...stack]) : alert("Please enter a value")
                            stackRef.current.value = ""
                        }
                    }} />
                    <button className='btn btn-dark w-25 m-2 col fs-4'
                        onClick={() => {
                            stackRef.current.value !== "" ?
                                setStack([stackRef.current.value, ...stack]) : alert("Please enter a value")
                            stackRef.current.value = ""
                        }}> Add </button>
                </Form.Group>
                <div className='row'>
                    <button className='btn btn-dark w-50 col m-2 fs-4' onClick={() => {

                        {
                            if (stack.length !== 0) {
                                stack.shift()
                                setStack([...stack])
                            }
                            else { alert("Stack is empty") }


                        }

                    }}> Pop </button>
                    <button className='btn btn-dark w-50 col m-2 fs-4' onClick={() => {
                        stack.length !== 0 ?
                            alert(stack[0]) : alert("Stack is empty")
                    }}> Get Top </button>
                </div>

                <br />
                {
                    stack?.map((item) => {
                        return <StackType value={item} />
                    })
                }

            </Modal.Body>
        </Modal>

    )
}
