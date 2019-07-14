import React from 'react';

import icon from '../assets/icon1.svg';
import { Link } from "react-router-dom";

import {
    Menu,
    Container,
    Image
} from 'semantic-ui-react';

function NavBar() {
    return(
        <Menu fixed='top' inverted>
            <Container>
            <Menu.Item header>
                <Image size='mini' src={icon} style={{ marginRight: '1.5em' }} />
                <Link to='/'>KanoPay Admin Home</Link>
            </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar;