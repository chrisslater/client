import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export class Hello extends React.Component<HelloProps, void> {
  public render() {
      return (<h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>);
  }
}
