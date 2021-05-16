import { Component } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      itemName: '',
      itemValue: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state);
  }

  render() {
    const { itemName, itemValue } = this.state
    return (
      <Container fluid>
        <Header as="h2">React Google Sheets</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Item name</label>
            <input placeholder="Enter item name" name="itemName" value={itemName} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Item value</label>
            <input placeholder="Enter item value" name="itemValue" value={itemValue} onChange={this.handleChange} />
          </Form.Field>

          <Button color='blue' type='submit'>Submit</Button>
        </Form>
      </Container>
    );
  }
}
