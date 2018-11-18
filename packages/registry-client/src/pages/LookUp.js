import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Divider, Input } from 'semantic-ui-react';

export default class LookUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      to: '',
    };

    this.search = this.search.bind(this);
  }

  search(e) {
    e.preventDefault();
    const { term } = this.state;
    this.setState({ to: `/${term}` });
  }

  render() {
    const { term, to } = this.state;

    if (to) {
      return <Redirect to={to} />;
    }

    return (
      <>
        <Form onSubmit={this.search}>
          <Form.Field
            fluid
            required
            control={Input}
            icon="search"
            label="Address"
            placeholder="Lookup address"
            size="massive"
            value={term}
            onInput={
              ({ target: { value } }) => this.setState({ term: value })
            }
          />
          <Divider hidden />
          <Form.Button
            color="blue"
            fluid
            type="submit"
            size="massive"
          >
            Look up
          </Form.Button>
        </Form>
      </>
    );
  }
}

