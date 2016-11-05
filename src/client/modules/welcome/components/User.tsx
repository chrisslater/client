import * as React from "react";
import * as Relay from "react-relay";

export interface IUser {
  name: string;
}

export interface UserProps {
  user: IUser;
}

export class User extends React.Component<UserProps, void> {
  public render() {
    return (<h1>Hello from {this.props.user.name}!</h1>);
  }
}

export const UserContainer = Relay.createContainer(User, {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
        name,
      }
    `,
  },
});
