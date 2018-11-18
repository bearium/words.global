import React from 'react';
import { Link } from 'react-router-dom';
import { Dimmer, Form, Input, Loader } from 'semantic-ui-react';

import ProfileContext from '../contexts/ProfileContext';

export default class Edit extends React.Component {
  static contextType = ProfileContext;

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
    };
  }

  setStateField(key, value) {
    this.setState({ [key]: value });
  }

  saveProfile() {
    const { name, category } = this.state;

    // TODO
  }

  render() {
    const { name, category } = this.state;
    const { match: { params: { address } } } = this.props;

    let content;
    if (typeof this.context === "undefined") {
      content = (
        <Dimmer active inverted>
          <Loader inverted content="Loading" />
        </Dimmer>
      );
    }
    else {
      content = (
        <Form
          size="massive"
          onSubmit={this.saveProfile}
        >
          <Form.Field
            label="Name"
            name="name"
            control={Input}
            onChange={this.setStateField}
            placeholder="John Doe"
            value={name}
          />
          <Form.Field
            label="Category"
            control={Input}
            onChange={this.setStateField}
            placeholder="John Doe"
            value={category}
          />
          <Form.Button
            fluid
            size="massive"
            color="blue"
            content="Submit"
          />
        </Form>
      );
    }

    return (
      <>
        <Link to={`/${address}`}>Back</Link>
        <h2>{address}</h2>
        {content}
      </>
    );
  }
};

