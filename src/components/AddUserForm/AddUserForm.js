import { Component } from "react";

export class AddUserForm extends Component {
  state = { name: "", email: "" };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addedUser({ ...this.state });
    this.props.onFormClose();
  };

  render() {
    const { name, email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    );
  }
}
