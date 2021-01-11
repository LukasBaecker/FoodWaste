import React from "react";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Selection from "./Selection.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecycle, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const recycling = ["individualWaste", "clothes", "EverydayObjects", "books", "furniture", "diverse", "clothes, toys", "multimedia", 
                "clothes, electronics, green waste, glass, plastics, wood, metal, paper, problematic waste, packaging waste, furniture", 
                "clothes, electronics, green waste, glass, plastics, wood, metal, paper, problematic waste, packaging waste, furniture, bicycle batteries",
                "clothes, electronics, green waste, glass, plastics, wood, metal, paper, problematic waste, packaging waste, furniture, demolition waste, bicycle batteries, plate glass, treated wood"]

const shops = ["store", "repair", "foodsharing"]

const Sidebar = () => {

    return (
        <SideNav className="sidenav"
        style={{marginTop:'64px'}}
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        {/*<NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>*/}
        <NavItem eventKey="categories">
            <NavIcon>
                <FontAwesomeIcon icon={faRecycle} style={{ fontSize: '1.75em' }}/>
            </NavIcon>
            <NavText>
                recylcing
            </NavText>
            {recycling.map(p => Selection(p))}
        </NavItem>
        <NavItem eventKey="categories">
            <NavIcon>
                <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '1.75em' }}/>
            </NavIcon>
            <NavText>
                shops
            </NavText>
            {shops.map(p => Selection(p))}
        </NavItem>

    </SideNav.Nav>
</SideNav>
    )
};

export default Sidebar;