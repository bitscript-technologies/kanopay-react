import React, {Fragment, useState} from 'react';
import {
  Container,
  Header,
  Input,
  Form,
  Message,
  Label,
  Grid,
  Segment,
  Statistic,
  Table,
  Menu
} from 'semantic-ui-react';
import { withAuthenticator } from 'aws-amplify-react';

var url = 'https://kanopay.herokuapp.com/';

function App() {
  let [mobile, setMobile] = useState();
  let [error, setError] = useState(false);
  let [user, setUser] = useState(false);
  let [transactions, setTransactions] = useState(false);
  return (
    <Container fluid style={{ marginTop: '7em', paddingLeft: '3em', paddingRight: '3em' }}>
      <Header as='h2'>View Account Records</Header>
      {error && (
        <Message negative>
            <Message.Header>{error}</Message.Header>
        </Message>
      )}
      <Form onSubmit={(x, y) => {
        fetch(url+mobile, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((response) => response.json()).then(res => {
            if (res.error) setError(res.error);
            else {
                setUser(res[0]);
                let transactions1 = res[1].map((x, i) => {
                    return (
                        <Table.Row key={i}>
                            <Table.Cell collapsing>
                                {`${(new Date(x.time)).getMonth()+1}-${(new Date(x.time)).getDate()}-${(new Date(x.time)).getFullYear()}`}
                            </Table.Cell>
                            <Table.Cell>
                                {x.sender._id === res[0]._id ? (x.partner ? (x.partner.name) : (x.recipient.name+` (${x.recipient.phone_number})`)) : (x.sender.name+` (${x.sender.phone_number})`)}
                                {x.account_id && (<p>Account Number: {x.account_id}</p>)}
                            </Table.Cell>
                            <Table.Cell collapsing textAlign='right'>
                                {x.sender.id === res[0]._id && (<p>-</p>)} PHP {x.money_transferred}
                            </Table.Cell>
                        </Table.Row>
                    );
                })
                setTransactions(transactions1);
                console.log(res);
            }
        });
      }}>
        <Input fluid action={{icon:'search'}} error={error !== false} onChange={(x, data)=>setMobile(data.value)} placeholder='KanoPay Mobile Number' />
      </Form>
      {user !== false && (
        <Fragment>
            <div>
                <Container fluid text style={{marginTop: '2rem'}}>
                    <center>
                        <Header as='h1'>Viewing Records For: {user.name} {user.verified && <Label color="teal" horizontal>Verified Sari-Sari Store Owner</Label>}<br></br>(A/N {user.phone_number}) - {user.city}, {user.province}</Header>
                    </center>
                </Container>
                <Grid columns='equal' style={{ padding: '5em 5em' }}>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <Segment textAlign='center'>
                                <Statistic>
                                    <Statistic.Label><h3>ACCOUNT BALANCE</h3></Statistic.Label>
                                    <Statistic.Value><span style={{fontSize:'35px'}}>PHP</span> {user.balance}</Statistic.Value>
                                </Statistic>
                            </Segment>
                            {user.verified && (
                                <Segment textAlign='center'>
                                    <Statistic>
                                        <Statistic.Label><h3>CREDIT BALANCE</h3></Statistic.Label>
                                        <Statistic.Value><span style={{fontSize:'35px'}}>PHP</span> {user.load_balance}</Statistic.Value>
                                    </Statistic>
                                </Segment>
                            )}
                            <Table celled striped>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='3'><h3>Recent Transactions</h3></Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                    {transactions}
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </Fragment>
      )}
    </Container>
  );
}

export default withAuthenticator(App);
