import React from "react";
import PropTypes from "prop-types";
import hoistNonReactStatics from "hoist-non-react-statics";

import { LAYOUT_CONTEXT, LAYOUT_CONTEXT_TYPE } from "./context";

export function withLayout(Component) {
  function Wrapper(props, context) {
    const ctx = context[LAYOUT_CONTEXT];
    return <Component {...ctx} {...props} />;
  }
  Wrapper.contextTypes = {
    [LAYOUT_CONTEXT]: PropTypes.object.isRequired
  };
  return hoistNonReactStatics(Wrapper, Component);
}
