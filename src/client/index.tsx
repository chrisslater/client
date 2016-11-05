import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Relay from "react-relay";

// import { Hello } from "./modules/welcome/components/Hello";
import { UserContainer } from "./modules/welcome/components/User";
import { UserRoute } from "./modules/welcome/routes/UserRoute";

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer("/graphql/", {
    credentials: "same-origin",
  }),
);

ReactDOM.render(
  <Relay.Renderer
    environment={Relay.Store}
    Container={UserContainer}
    queryConfig={new UserRoute()}
  />,
  document.getElementById("example")
);
