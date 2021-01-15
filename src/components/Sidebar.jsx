import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Selection from "./Selection.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecycle, faShoppingCart, faDumpster } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setPoints, setWholeGroup } from "../actions";
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
const recycling = ["glass","individualWaste", "clothes", "EverydayObjects", "books", "organization", "foodsharing"]

const shops = ["store", "repair", "clothes", "clothes, toys", "diverse", "multimedia", "furniture"]

const Sidebar = () => {
    const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    return (
        <SideNav className="sidenav"
        style={{marginTop:'64px'}}
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav>
        <NavItem eventKey="recycling" key="recylcing">
            <NavIcon>
                <FontAwesomeIcon icon={faRecycle} style={{ fontSize: '1.75em' }}/>
            </NavIcon>
            <NavText>
                recycling
            </NavText>
        {/*            <NavItem eventKey={"recyclingswitch"} key={"recyclingswitch"}>
                <NavText>
                <Form.Check
                        style={{marginTop:'5px'}} 
                        type={'checkbox'}
                        id={'recycling'}
                        label={'all'}
                        onChange={() => {dispatch(setWholeGroup('recycling'))
                                        dispatch(setPoints(categories))
                                        }}
                    />
                </NavText>    
            </NavItem>
            <NavItem>
                <NavText>
                <Dropdown.Divider />
                </NavText>
            </NavItem>
        */}
            {recycling.map(p => Selection(p, "recycling"))}
        </NavItem>
        <NavItem eventKey="shop" key="shop">
            <NavIcon>
                <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '1.75em' }}/>
            </NavIcon>
            <NavText>
                shops
            </NavText>
            {/*
            <NavItem eventKey={"recyclingswitch"} key={"recyclingswitch"}>
                <NavText>
                    <Form.Check
                    style={{marginTop:'5px'}} 
                    type={'checkbox'}
                    id={'shops'}
                    label={'all'}
                    onChange={() => {dispatch(setWholeGroup('shop'))
                                    dispatch(setPoints(categories))
                                    }}
                    />
                </NavText>    
            </NavItem>
            <NavItem>
                <NavText>
                <Dropdown.Divider />
                </NavText>
            </NavItem>
            */}
            {shops.map(p => Selection(p, "shop"))}
        </NavItem>
        <NavItem eventKey="yard" key="yard">
            <NavIcon>
                <FontAwesomeIcon icon={faDumpster} style={{ fontSize: '1.75em' }}/>
            </NavIcon>
            <NavText>
                recycling-yards
            </NavText>
            <NavItem eventKey={"recyclingswitch"} key={"recyclingswitch"}>
                <NavText>
                    <Form.Check
                        style={{marginTop:'5px'}} 
                        type={'checkbox'}
                        id={'yards'}
                        label={'all'}
                        onChange={() => {dispatch(setWholeGroup('yard'))
                                        console.log(categories)
                                        dispatch(setPoints(categories))
                                        }}
                    />
                </NavText>    
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>
    )
};

export default Sidebar;