import React from 'react';
import { Link } from 'react-router-dom';
import {
  Divider,
  Dropdown,
  Dimmer,
  Form,
  Input,
  Loader,
  Message,
} from 'semantic-ui-react';
import ethw from 'charitydb';

import AddressContext from '../contexts/AddressContext';
import organizationTypes from '../organizationTypes';

const validators = {
  name: ethw.validateName,

};

export default class Edit extends React.Component {
  static contextType = AddressContext;

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      fullName: '',
      type: -1,
      to: undefined,
      error: undefined,
      loading: false,
      saved: false,
    };

    this.setStateField = this.setStateField.bind(this);
    this.saveProfile = this.saveProfile.bind(this);
  }

  setStateField(e, { name, value }) {
    const validator = validators[name] || (() => true);

    if (!validator(value)) {
      return;
    }

    this.setState({
      [name]: value,
      saved: false,
    });
  }

  async saveProfile() {
    const { name, fullName, type } = this.state;
    const otherData = 0;

    this.setState({
      saved: false,
      loading: true,
    });

    try {
      await ethw.register(type, name, fullName, otherData);
      this.setState({
        saved: true,
        loading: false,
      });
    }
    catch (e) {
      this.setState({
        error: e,
        saved: false,
        loading: false,
      });
    }
  }

  render() {
    const {
      error,
      name,
      fullName,
      loading,
      type,
      saved,
    } = this.state;
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
            placeholder="Short organization name"
            value={name}
          />
          <Form.Field
            label="Full Name"
            name="fullName"
            control={Input}
            onChange={this.setStateField}
            placeholder="Full organization name"
            value={fullName}
          />
          <Form.Field>
            <label>
              Organization Type
            </label>
            <Dropdown
              fluid
              clearable
              selected={type}
              placeholder="Organization type"
              name="type"
              onChange={this.setStateField}
              options={
                Object.entries(organizationTypes)
                .map(([key, { type, name }]) => ({
                  key: type,
                  text: name,
                  value: type,
                }))
              }
              selection
            />
          </Form.Field>
          <Form.Button
            fluid
            loading={loading}
            size="massive"
            color={saved ? 'green' : 'blue'}
            content={saved ? 'Saved' : 'Submit'}
          />
        </Form>
      );
    }

    return (
      <>
        <Link to={`/${address}`}>Back to details</Link>
        {error &&
          <Message
            error
            header="Something went wrong"
            content={error.message}
          />
        }
        <h2 style={{ wordWrap: 'break-word' }}>{address}</h2>
        {content}
        <Divider hidden />
      </>
    );
  }
};

