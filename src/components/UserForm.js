import React, { useState, useContext } from "react";
import { Form } from "semantic-ui-react";
import { UserConsumer, UserContext } from "../providers/UserProvider";

const AccountForm = (props) => {
  const [userName, setUsername] = useState(defaultUsername);
  const [email, setEmail] = useState(
    defaultMembershipLevel
  );
  

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label="New Username"
        type="text"
        name="username"
        value={username}
        onChange={(e, { value }) => {
          setUsername(value);
        }}
      />
      <Form.Select
        label="Email"
        name="email"
        value={email}
        onChange={(e, { value }) => {
          setEmail);
       
      />
      <Form.Button color="blue">Save</Form.Button>
    </Form>
  );
};
        }


export default UserForm;