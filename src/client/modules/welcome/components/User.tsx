import * as React from 'react';
import { graphql } from 'react-apollo';
import * as gql from 'graphql-tag';

export interface User {
  name: string;
}

export interface Props {
  data: {
    user: User;
  };
}

const UserSchema = gql`
  query User {
    user {
      name
    }
  }
`;

export class User extends React.Component<Props, void> {
  public render() {
    const { data } = this.props;

    if (!data.user) {
      return null;
    }

    return (<h1>Hello from {data.user.name}!</h1>);
  }
}

export const UserContainer = graphql(UserSchema)(User);
