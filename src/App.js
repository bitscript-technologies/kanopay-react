import React, {useState} from 'react';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Input,
  Form
} from 'semantic-ui-react';

import icon from './assets/icon1.svg';

var url = 'https://3e2e7882.ngrok.io/';

function App() {
  let [mobile, setMobile] = useState();
  return (
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h2'>Query Mobile Number</Header>
      <Form onSubmit={(x, y) => {
        console.log(mobile);
        fetch(url+mobile, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        })
      }}>
        <Input fluid action={{icon:'search'}} onChange={(x, data)=>setMobile(data.value)} placeholder='KanoPay Mobile Number' />
      </Form>
    </Container>
  );
}

// handleMessage = e => { console.log(e.target.value); }

export default App;
