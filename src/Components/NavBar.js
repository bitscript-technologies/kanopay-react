import React, {useState} from 'react';

import icon from '../assets/icon1.svg';

import {
    Menu,
    Container,
    Image
} from 'semantic-ui-react';

import { Auth } from 'aws-amplify';

function NavBar() {
    let [loggedOut, setloggedOut] = useState(false);
    return(
        <Menu fixed='top' inverted>
            <Container>
            <Menu.Item header>
                <Image size='mini' src={icon} style={{ marginRight: '1.5em' }} />
                <a href='/'>KanoPay Admin Home</a>
            </Menu.Item>
            {Auth.userPool.getCurrentUser() !== null && loggedOut === false && (
                <Menu.Item header>
                    <button onClick={() => {
                        setloggedOut(true);
                        Auth.signOut();
                    }}>Logout</button>
                </Menu.Item>
            )}
            </Container>
        </Menu>
    )
}

export default NavBar;