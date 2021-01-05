
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from 'react-bootstrap/Form'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setPoints } from "../actions";

const classes = ['glass', 'individualWaste', 'clothes', 'Givebox',
                'open bookshelf', 'store', 'sharing', 'repair',
                'organisation', 'multiple']

const Selection = () => {
    const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    console.log(categories)

    return (
        <Navbar fixed="bottom" id="selectionDiv">
        <Nav className="mr-auto">
        <NavItem>

                {['glass', 'individualWaste'].map((type) => (
                    <div key={`${type}`} className="mb-3">
                    <Form.Check 
                        type={'switch'}
                        id={`${type}`}
                        label={`${type}`}
                        //checked={true}
                        onChange={() => {dispatch(setCategory(`${type}`))
                                        dispatch(setPoints(categories))
                                        }}
                    />
                    </div>
                ))}

                {['clothes', 'Givebox', 'open bookshelf'].map((type) => (
                    <div key={`${type}`} className="mb-3">
                    <Form.Check 
                        type={'switch'}
                        id={`${type}`}
                        label={`${type}`}
                    />
                    </div>
                ))}

                {[ 'store', 'sharing', 'repair'].map((type) => (
                    <div key={`${type}`} className="mb-3">
                    <Form.Check 
                        type={'switch'}
                        id={`${type}`}
                        //checked={true}
                        label={`${type}`}
                    />
                    </div>
                ))}

                {['organisation', 'multiple'].map((type) => (
                    <div key={`${type}`} className="mb-3">
                    <Form.Check 
                        type={'switch'}
                        id={`${type}`}
                        label={`${type}`}
                    />
                    </div>
                ))}

        </NavItem>
        </Nav>
        </Navbar>
    )
};

export default Selection;