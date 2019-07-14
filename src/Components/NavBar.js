import React from 'react';

import icon from '../assets/icon1.svg';

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
                <a href='/'>KanoPay Admin Home</a>
            </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar;