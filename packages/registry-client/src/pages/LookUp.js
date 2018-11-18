import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Divider, Input } from 'semantic-ui-react';

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
        <form onSubmit={this.search}>
          <Input
            fluid
            icon="search"
            placeholder="Lookup address"
            size="massive"
            value={term}
            onInput={({ target: { value } }) => this.setState({ term: value })}
          />
          <Divider hidden />
          <Button
            fluid
            type="submit"
            size="massive"
          >
            Look up
          </Button>
        </form>
      </>
    );
  }
}

