import React from "react";

//setup the intial context
export const UserContext = React.createContext();
// returns object with consumer/provider

// Create a consumer to export
export const singleUser = UserContext.User;

class UserProvider extends React.Component {
  state = {
    email: "sloanybones@hotmail.com",
    firstName: "Andrew",
    lastName: "Katie",
    
  };

  updateUser = (user) => {
    this.setState({ ...user });
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserProvider;
