import React, { useContext } from "react";
import { Card } from "semantic-ui-react";
import { UserContext} from "../providers/UserProvider";

const User = () => {
  const { email, firstName, lastName } = useContext(UserContext);
  return(
  <Card>
    <Card.Content>
      <Card.Header>{firstName} {lastName}</Card.Header>
      <Card.Meta>
        {email}
      </Card.Meta>
    </Card.Content>
   
  </Card>
)
  }
export default User;