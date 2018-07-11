import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { triggerRefetch, updateTableData } from "../js/actions/index";

const mapDispatchToProps = dispatch => {
  return {
    triggerRefetch: trigger => dispatch(triggerRefetch(trigger)),
    updateTableData: data => dispatch(updateTableData(data))
  };
};

class Form extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };

  state = {
    name: "",
    email: "",
    message: ""
  };

  baseState = this.state;

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    const conf = {
      method: "post",
      body: JSON.stringify(lead),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => {
      if (response.status !== 201) {
        return this.setState({ placeholder: "Something went wrong" });
      }
      this.props.triggerRefetch(true);
      this.setState(this.baseState);
      fetch(this.props.endpoint).then(response => {
        return response.json();
      }).then(data => {
        this.props.updateTableData(data);
      });
    });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="column is-12">
        <form id="new-msg-form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={name}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                onChange={this.handleChange}
                value={email}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                type="text"
                name="message"
                onChange={this.handleChange}
                value={message}
                required
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Send message
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const ConnectedForm = connect(null, mapDispatchToProps)(Form);

export default ConnectedForm;