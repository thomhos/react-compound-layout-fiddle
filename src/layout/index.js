import React from "react";
import PropTypes from "prop-types";

import { LAYOUT_CONTEXT, LAYOUT_CONTEXT_TYPE } from "./context";

import { withLayout } from "./with-layout";
import { Wrapper } from "./wrapper";
import { Sidebar } from "./sidebar";
import { Main } from "./main";

/* Define main component */
class Layout extends React.Component {
  static Main = withLayout(Main);
  static Sidebar = withLayout(Sidebar);
  static childContextTypes = LAYOUT_CONTEXT_TYPE;
  static defaultProps = {
    defaultOpen: false,
    onToggle: () => {}
  };

  initialState = { sidebarExpanded: this.props.defaultOpen };
  state = this.initialState;

  toggle = () =>
    this.setState({ sidebarExpanded: !this.state.sidebarExpanded }, () =>
      this.props.onToggle(this.state.sidebarExpanded)
    );

  getChildContext() {
    return {
      [LAYOUT_CONTEXT]: {
        sidebarExpanded: this.state.sidebarExpanded,
        toggle: this.toggle
      }
    };
  }

  render() {
    return <Wrapper>{this.props.children}</Wrapper>;
  }
}

export { withLayout, Layout };
