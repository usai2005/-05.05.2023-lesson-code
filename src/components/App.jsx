import { Component } from "react";
import { nanoid } from "nanoid";
import { data } from "./Data/Users";
import { Button } from "./Button/Button";
import { UserList } from "./UserList/UserList";
import { AddUserForm } from "./AddUserForm/AddUserForm";

export class App extends Component {
  state = {
    users: data,
    isListShown: false,
    isFormShown: false,
  };

  showList = () => {
    this.setState({ isListShown: true });
  };

  openForm = () => {
    this.setState({ isFormShown: true });
  };

  closeForm = () => {
    this.setState({ isFormShown: false });
  };

  addUser = (data) => {
    const newUser = { id: nanoid(), ...data };
    // console.log(newUser)
    this.setState((prevState) => {
      return { users: [...prevState.users, newUser] };
    });
  };

  onDeleteUser = (id) => {
    this.setState((prevState) => {
      return {
        users: prevState.users.filter((user) => user.id !== id),
      };
    });
  };

  render() {
    const { users, isListShown, isFormShown } = this.state;
    return (
      <div>
        {isListShown ? (
          <UserList users={users} deleteUser={this.onDeleteUser} />
        ) : (
          <Button text="Show list of user" clickHandler={this.showList} />
        )}
        {isFormShown ? (
          <AddUserForm addedUser={this.addUser} onFormClose={this.closeForm} />
        ) : (
          <Button text="Add user" clickHandler={this.openForm} />
        )}
      </div>
    );
  }
}
