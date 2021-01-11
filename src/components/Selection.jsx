
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from 'react-bootstrap/Form'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setPoints } from "../actions";

const classes = ["individualWaste", "clothes", "EverydayObjects", "books", "store", "foodsharing", "repair", "furniture", "diverse", "clothes, toys", "multimedia", 
                "clothes, electronics, green waste, glass, plastics, wood, metal, paper, problematic waste, packaging waste, furniture", 
                "clothes, electronics, green waste, glass, plastics, wood, metal, paper, problematic waste, packaging waste, furniture, bicycle batteries",
                "clothes, electronics, green waste, glass, plastics, wood, metal, paper, problematic waste, packaging waste, furniture, demolition waste, bicycle batteries, plate glass, treated wood"]

const Selection = (category) => {
    const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    return (
                        <NavItem eventKey={"categories/"+`${category}`}>
                            <NavText>
                                <Form.Check 
                                    type={'switch'}
                                    id={`${category}`}
                                    label={`${category}`}
                                    //checked={true}
                                    onChange={() => {dispatch(setCategory(`${category}`))
                                                    dispatch(setPoints(categories))
                                                    }}
                                />
                            </NavText>
                        </NavItem>
    )
};

export default Selection;