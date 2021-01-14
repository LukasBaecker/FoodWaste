import React from "react";
import Form from 'react-bootstrap/Form'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setPoints } from "../actions";

const Selection = (category, group) => {
    const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    return (
                        <NavItem eventKey={`${group}` +"/"+`${category}`} key={`${group}`+"/"+`${category}`}>
                            <NavText>
                                <Form.Check 
                                    type={'checkbox'}
                                    label={`${category}`}
                                    onChange={() => {dispatch(setCategory(`${category}`, `${group}`))
                                                    dispatch(setPoints(categories))
                                                    }}
                                />
                            </NavText>
                        </NavItem>
    )
};

export default Selection;