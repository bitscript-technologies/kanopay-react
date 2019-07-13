import React, {Fragment, Component} from 'react'
import {
    Container,
    Header,
    Grid,
    Statistic,
    Segment,
    Accordion,
    Icon,
    Table,
    Menu,
} from 'semantic-ui-react';
export default class User extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
    
        this.setState({ activeIndex: newIndex })
    }
    render() {
        const { activeIndex } = this.state
        return (
            <Fragment>
                <div>
                    <Container text style={{marginTop: '7em'}}>
                        <Header as='h2'>Viewing Records For: JUAN DELA CRUZ (A/N 09171231234)</Header>
                    </Container>
                    <Grid columns='equal' style={{ padding: '5em 5em' }}>
                        <Grid.Row>
                            <Grid.Column width={12}>
                                <Segment textAlign='center'>
                                    <Statistic>
                                        <Statistic.Label><h3>ACCOUNT BALANCE</h3></Statistic.Label>
                                        <Statistic.Value><span style={{fontSize:'35px'}}>PHP</span> 1,000.00</Statistic.Value>
                                    </Statistic>
                                </Segment>
                                <Table celled striped>
                                    <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='3'><h3>Recent Transactions</h3></Table.HeaderCell>
                                    </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                    <Table.Row>
                                        <Table.Cell collapsing>
                                            10 JUL 2019
                                        </Table.Cell>
                                        <Table.Cell>
                                            PLDT HOME MYDSL
                                            <Accordion>
                                                <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}><Icon name='dropdown' />See Details</Accordion.Title>
                                                <Accordion.Content active={activeIndex === 1}>
                                                    <p>Reference ID: 1920494820</p>
                                                </Accordion.Content>
                                            </Accordion>
                                        </Table.Cell>
                                        <Table.Cell collapsing textAlign='right'>
                                            - PHP 599.00
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell collapsing>
                                            10 JUL 2019
                                        </Table.Cell>
                                        <Table.Cell>
                                            PLDT HOME MYDSL
                                            <Accordion>
                                                <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}><Icon name='dropdown' />See Details</Accordion.Title>
                                                <Accordion.Content active={activeIndex === 2}>
                                                    <p>Reference ID: 1920494820</p>
                                                </Accordion.Content>
                                            </Accordion>
                                        </Table.Cell>
                                        <Table.Cell collapsing textAlign='right'>
                                            - PHP 599.00
                                        </Table.Cell>
                                    </Table.Row>
                                    <Table.Row>
                                        <Table.Cell collapsing>
                                            10 JUL 2019
                                        </Table.Cell>
                                        <Table.Cell>
                                            PLDT HOME MYDSL
                                            <Accordion>
                                                <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}><Icon name='dropdown' />See Details</Accordion.Title>
                                                <Accordion.Content active={activeIndex === 3}>
                                                    <p>Reference ID: 1920494820</p>
                                                </Accordion.Content>
                                            </Accordion>
                                        </Table.Cell>
                                        <Table.Cell collapsing textAlign='right'>
                                            - PHP 599.00
                                        </Table.Cell>
                                    </Table.Row>
                                    </Table.Body>
                                </Table>
                            </Grid.Column>
                            <Grid.Column>
                                <Menu vertical fluid>
                                    <Menu.Item link disabled>Edit Account Balance</Menu.Item>
                                    <Menu.Item link disabled>Add/Edit Transaction Records</Menu.Item>
                                    <Menu.Item link disabled>Delete Account</Menu.Item>
                                </Menu>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </Fragment>
        )
    }
}